import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppButton: React.FC = () => {
  const { data } = useLanguage();

  if (!data.phone) return null;

  return (
    <motion.a
      href={`https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 left-6 z-[100] h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-500/30 flex items-center justify-center border border-green-400/20 pointer-events-auto"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.5} />
    </motion.a>
  );
};

export default WhatsAppButton;