
import React, { useState, useRef, useEffect } from 'react';
import { getSchoolChatResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SchoolAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am the SGN School Assistant. How can I help you today? You can ask about admissions, academics, or events.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    const response = await getSchoolChatResponse(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'I am sorry, I could not process that request.' }]);
    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-sgn-navy text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 border-2 border-white"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-robot'} text-xl`}></i>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="bg-sgn-navy p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sgn-gold rounded-full flex items-center justify-center">
                <i className="fas fa-school text-sgn-navy text-xs"></i>
              </div>
              <span className="font-bold">SGN Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
              <i className="fas fa-minus"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                  m.role === 'user' 
                    ? 'bg-sgn-navy text-white rounded-tr-none' 
                    : 'bg-white border border-gray-200 text-gray-800 shadow-sm rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-400 px-4 py-2 rounded-2xl rounded-tl-none shadow-sm text-sm">
                  <i className="fas fa-ellipsis-h animate-pulse"></i>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sgn-navy"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-sgn-gold text-sgn-navy rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SchoolAssistant;
