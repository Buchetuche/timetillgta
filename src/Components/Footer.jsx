import { motion } from "framer-motion";
import { Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", color: "hover:text-cyan-400", url: 'https://x.com/GTAVlUpdates'},
    { icon: Youtube, label: "YouTube", color: "hover:text-red-500", url: 'https://www.youtube.com/@RockstarGames'}
  ];

  return (
    <footer id="footer" className="relative border-t border-pink-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social) => (
            <motion.button
              key={social.label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`cursor-pointer p-3 rounded-full bg-white/5 border border-gray-700/50 text-gray-400 transition-all duration-300 ${social.color} hover:border-current hover:shadow-lg hover:shadow-current/50`}
              aria-label={social.label}
              onClick={() => { window.open(social.url, '_blank');}}
            >
              <social.icon size={20} />
            </motion.button>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm mb-2">
            © 2025 Rockstar Games. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            This is a fan-made countdown website. Not affiliated with Rockstar Games.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500 rounded-full blur-[150px] opacity-10 -z-10" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-[150px] opacity-10 -z-10" />
      </div>
    </footer>
  );
}