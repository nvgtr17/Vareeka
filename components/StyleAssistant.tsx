
import React, { useState, useRef, useEffect } from 'react';
import { getStylingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const StyleAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Welcome to Vareeka, darling. I am your personal style concierge. How can I help you sparkle today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await getStylingAdvice(input);
    const assistantMsg: ChatMessage = { role: 'assistant', content: advice || "I'm momentarily speechless at your elegance." };
    setMessages(prev => [...prev, assistantMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-deep-text w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform pulse-marker"
        >
          <span className="material-symbols-outlined">auto_fix</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-[#454065]/90 backdrop-blur-xl border border-white/20 w-80 md:w-96 h-[450px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-4 bg-primary text-deep-text flex justify-between items-center font-serif italic font-bold">
            <span>Style Concierge</span>
            <button onClick={() => setIsOpen(false)}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.role === 'user'
                    ? 'bg-primary/20 text-white border border-primary/30 rounded-br-none'
                    : 'bg-white/10 text-gray-100 border border-white/10 rounded-bl-none'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-xl animate-pulse text-xs text-gray-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-primary"
              placeholder="Ask for advice..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-primary text-deep-text px-3 py-2 rounded-lg"
            >
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleAssistant;
