import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CountdownTimer from "../Components/CountdownTimer.jsx";
import Footer from "../Components/Footer.jsx";
import InfoCards from "../Components/InfoCards.jsx";
import Navigation from "../Components/Navigation.jsx";
import PromoSection from "../Components/PromoSection.jsx";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a1f] to-[#0f1a1f] -z-10" />
      
      {/* Neon grid effect */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 20, 147, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <Navigation scrolled={scrolled} />

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center px-4 pt-20"
      >

        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
          <img 
            src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=1920&q=80"
            alt="Miami skyline"
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                GTA VI
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide uppercase">
              Time Until Launch
            </p>
          </motion.div>

          <CountdownTimer />
          <InfoCards />
        </div>

        {/* Floating neon orbs */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-pink-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-400 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </motion.section>

      <PromoSection />
      <Footer />
    </div>
  );
}