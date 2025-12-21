import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
// Removed top-level import of GenerateContentResponse to avoid runtime loading issues
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const ResumeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { data, language } = useLanguage();
  
  // Localized welcome messages
  const welcomeMessages = {
    en: "Hi! I'm Nexus, David's AI assistant. Ask me anything about David's skills, experience, or projects.",
    fr: "Bonjour ! Je suis Nexus, l'assistant IA de David. Posez-moi des questions sur les compétences ou l'expérience de David.",
    de: "Hallo! Ich bin Nexus, Davids KI-Assistent. Fragen Sie mich etwas über Davids Fähigkeiten oder Erfahrungen.",
    es: "¡Hola! Soy Nexus, el asistente de IA de David. Pregúntame cualquier cosa sobre las habilidades o experiencia de David."
  };

  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'model', text: welcomeMessages[language] || welcomeMessages.en }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset welcome message when language changes if chat is empty or only has welcome msg
  useEffect(() => {
    if (messages.length <= 1) {
       setMessages([{ id: 'init', role: 'model', text: welcomeMessages[language] }]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Pass the current data and language to the service
      const streamResult = await sendMessageToGemini(userMsg.text, data, language);
      
      let fullText = '';
      const botMsgId = (Date.now() + 1).toString();
      
      // Add a placeholder message for the bot
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: '' }]);

      for await (const chunk of streamResult) {
          // Explicitly cast to any or use generic access to avoid import dependency
          const c = chunk as any; 
          const textChunk = c.text;
          if (textChunk) {
            fullText += textChunk;
            setMessages(prev => 
                prev.map(msg => msg.id === botMsgId ? { ...msg, text: fullText } : msg)
            );
            scrollToBottom();
          }
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "I'm having trouble connecting to the neural network right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper function to render text with Markdown links [text](url)
  const renderMessageText = (text: string) => {
    // Split by newlines to preserve formatting
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      // Split the line by Markdown link pattern: [text](url)
      // Added \s* to allow for accidental spaces like [text] (url)
      const parts = line.split(/(\[[^\]]+\]\s*\([^)]+\))/g);
      
      return (
        <div key={lineIndex} className={line.trim() === '' ? 'h-2' : ''}>
          {parts.map((part, partIndex) => {
            const linkMatch = part.match(/^\[([^\]]+)\]\s*\(([^)]+)\)$/);
            if (linkMatch) {
              return (
                <a
                  key={partIndex}
                  href={linkMatch[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 underline font-bold hover:text-indigo-500 transition-colors break-all"
                >
                  {linkMatch[1]}
                </a>
              );
            }
            return <span key={partIndex}>{part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[300px] sm:w-[350px] md:w-[400px] h-[400px] sm:h-[500px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 mr-0 sm:mr-0 origin-bottom-right"
          >
            {/* Header */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-indigo-600 rounded-lg">
                    <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white text-sm">Nexus AI</h3>
                  <p className="text-xs text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
                    {data.ui.online}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-sm border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {renderMessageText(msg.text)}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-sm border border-slate-200 dark:border-slate-700">
                        <div className="flex gap-1">
                            <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <span className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={data.ui.askMe}
                  className="flex-1 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-xl px-4 py-2.5 border border-slate-200 dark:border-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-xl transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-600 text-center mt-2 flex items-center justify-center gap-1">
                <Sparkles size={10} /> {data.ui.poweredBy}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center border border-indigo-400/20"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ResumeChat;
