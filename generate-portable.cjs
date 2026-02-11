
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function generate() {
    console.log('--- Truly Portable HTML Generator ---');

    // 1. Build using the single-file config
    console.log('Step 1: Building project with Vite...');
    execSync('npx vite build -c vite.singlefile.config.ts --outDir dist-single', { stdio: 'inherit' });

    let html = fs.readFileSync(path.join(__dirname, 'dist-single', 'index.html'), 'utf-8');

    // 2. Inline Assets (Images)
    console.log('Step 2: Inlining assets from all sources...');

    // Greedily find all URLs that look like images or Google storage links
    const urls = html.match(/https?:\/\/[a-zA-Z0-9.\-_/%?=&]+/g) || [];
    const localPaths = html.match(/["'](\/(?:assets|public)[^"']+)["']/g) || [];

    const assetsToProcess = new Set([
        ...urls,
        ...localPaths.map(p => p.slice(1, -1))
    ]);

    for (const assetUrl of assetsToProcess) {
        if (assetUrl.includes('cdn.tailwindcss.com') || assetUrl.includes('fonts.googleapis.com') || assetUrl.includes('esm.sh')) continue;

        try {
            let buffer;
            let contentType;

            if (assetUrl.startsWith('http')) {
                // Check if it's likely an image (Google Photos links are long and don't have extensions)
                if (assetUrl.includes('googleusercontent') || assetUrl.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)/i)) {
                    console.log(`  Processing remote: ${assetUrl.substring(0, 50)}...`);
                    const response = await fetch(assetUrl);
                    if (!response.ok) continue;
                    contentType = response.headers.get('content-type');
                    if (contentType && contentType.startsWith('image')) {
                        buffer = Buffer.from(await response.arrayBuffer());
                    }
                }
            } else {
                // Local asset
                const normalizedPath = assetUrl.startsWith('/') ? assetUrl.substring(1) : assetUrl;
                // Try several possible locations
                const pathsToTry = [
                    path.join(__dirname, 'public', normalizedPath),
                    path.join(__dirname, normalizedPath)
                ];

                for (const p of pathsToTry) {
                    if (fs.existsSync(p) && fs.lstatSync(p).isFile()) {
                        console.log(`  Inlining local: ${assetUrl}`);
                        buffer = fs.readFileSync(p);
                        const ext = path.extname(p).toLowerCase();
                        const types = { '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon' };
                        contentType = types[ext] || 'application/octet-stream';
                        break;
                    }
                }
            }

            if (buffer && contentType && contentType.startsWith('image')) {
                const base64 = buffer.toString('base64');
                const dataUrl = `data:${contentType};base64,${base64}`;
                // Using split/join to replace all occurrences in the giant string
                html = html.split(assetUrl).join(dataUrl);
            }
        } catch (e) {
            // Silently skip if error
        }
    }

    // 4. Final output
    const outputPath = path.join(__dirname, 'Vareeka_Variation4.html');
    fs.writeFileSync(outputPath, html);

    console.log('\n-----------------------------------');
    console.log(`Success! File generated: ${outputPath}`);
    console.log(`Final size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
}

generate().catch(console.error);
