import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-11-19T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds }
  ];

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative mb-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-cyan-400/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-100" />
            
            {/* Timer card */}
            <div className="relative bg-gradient-to-br from-[#1a0a1f] to-[#0f1a1f] border border-pink-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              {/* Digital number display */}
              <div className="text-5xl md:text-7xl font-black text-center mb-2 font-mono">
                <span className="bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,20,147,0.5)]">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              
              {/* Label */}
              <div className="text-center text-xs md:text-sm tracking-[0.3em] text-gray-400 font-semibold">
                {unit.label}
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-pink-500/50" />
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400/50" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400/50" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-pink-500/50" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}