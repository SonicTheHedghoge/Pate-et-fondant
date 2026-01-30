import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour, cher(e) ami(e). I am Pierre. How may I sweeten your day?", timestamp: Date.now() }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);
    
    const botMessage: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-accent-rose hover:bg-accent-gold text-white p-5 rounded-full shadow-2xl shadow-accent-rose/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
      >
        {isOpen ? <X size={24} strokeWidth={1.5} /> : <MessageCircle size={28} strokeWidth={1.5} />}
        {!isOpen && (
            <span className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-white text-text-main text-xs tracking-wider px-4 py-2 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                Ask Chef Pierre
            </span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-[90vw] md:w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 flex flex-col overflow-hidden animate-slide-up origin-bottom-right h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-rose to-[#E5B5B5] p-6 flex items-center gap-4 relative overflow-hidden">
             <Sparkles className="absolute -top-4 -right-4 text-white/20 w-32 h-32" />
             <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
                 <span className="font-display italic font-bold text-white text-xl">P</span>
             </div>
             <div>
                 <h3 className="text-white font-display text-2xl leading-none">Chef Pierre</h3>
                 <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase mt-1">Votre Assistant Culinaire</p>
             </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-white to-[#FDFAF7] space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-3 text-sm font-light leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-text-main text-white rounded-2xl rounded-tr-sm' 
                    : 'bg-white border border-secondary text-text-main rounded-2xl rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-secondary px-6 py-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-2 items-center">
                  <div className="w-2 h-2 bg-accent-rose rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-accent-rose rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-accent-rose rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-50 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about our pastries..."
              className="flex-1 text-sm bg-secondary/30 border-transparent focus:bg-white focus:border-accent-rose focus:ring-0 rounded-full px-6 py-3 outline-none transition-all placeholder-gray-400 font-light"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !input.trim()}
              className="p-3 bg-accent-rose text-white rounded-full hover:bg-accent-gold transition-colors disabled:opacity-50 shadow-lg transform active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default ChatWidget;
