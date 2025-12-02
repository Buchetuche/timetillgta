import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";

export default function InfoCards() {
  const cards = [
    {
      icon: Calendar,
      label: "Release Date",
      value: "Nov 19, 2026",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      icon: Play,
      label: "Latest Trailer",
      value: "Watch Now",
      color: "from-cyan-500 to-blue-500",
      glowColor: "shadow-cyan-500/50",
      isButton: true,
      url: 'https://www.youtube.com/watch?v=VQRLujxTm3c&t=0s'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
      {cards.map((card, index) => (
        <motion.a
          key={card.label}
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className={`relative group cursor-pointer ${card.highlight ? 'md:col-span-1' : ''}`}
        >
          {card.highlight && (
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 animate-pulse transition-all duration-500" />
          )}
          
          <div className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500`} />
          
          <div className={`relative bg-gradient-to-br from-[#1a0a1f]/90 to-[#0f1a1f]/90 backdrop-blur-sm border ${
            card.highlight ? 'border-pink-500/50' : 'border-gray-700/50'
          } rounded-2xl p-6 transition-all duration-300 group-hover:border-opacity-100`}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} ${card.glowColor} shadow-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1 text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {card.label}
                </p>
                <p className={`font-bold ${card.highlight ? 'text-lg' : 'text-base'} bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                  {card.value}
                </p>
              </div>

              {card.isButton && (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  →
                </motion.div>
              )}
            </div>
          </div>

          {card.highlight && (
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
              HOT
            </div>
          )}
        </motion.a>
      ))}
    </div>
  );
}