import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActions: React.FC = () => {
  const phoneNumber = "+15551234567";
  const whatsappNumber = "15551234567";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=Hi! I'd like to get a quote for carpentry services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Call us now"
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default FloatingActions;