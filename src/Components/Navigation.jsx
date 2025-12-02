import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Trailer",
      url: 'https://www.youtube.com/watch?v=VQRLujxTm3c&t=0s'
    },
    {
      name: "Social",
      url : '#footer'
    }];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-pink-500/20 shadow-lg shadow-pink-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter"
          >
            <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              TIME GTA VI
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                target={item.name === "Social" ? undefined : "_blank"}
                rel={item.name === "Social" ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group text-gray-300 font-medium tracking-wide transition-colors duration-300 hover:text-white cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-0 blur-xl opacity-0 bg-gradient-to-r from-pink-500 to-cyan-400 transition-opacity duration-300 group-hover:opacity-30" />
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-pink-500/20"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.url}
                target={item.name === "Social" ? undefined : "_blank"}
                rel={item.name === "Social" ? undefined : "noopener noreferrer"}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-left text-gray-300 font-medium py-3 px-4 rounded-lg hover:bg-pink-500/10 hover:text-white transition-all duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}