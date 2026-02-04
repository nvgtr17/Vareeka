
// Marker interface defines the structure for interactive jewelry points on the image
export interface Marker {
  id: string;
  label: string;
  // top is now optional as some markers may use bottom instead
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  // height is optional because responsive dimensions are often bundled in the width Tailwind string
  height?: string;
  bgPos: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
