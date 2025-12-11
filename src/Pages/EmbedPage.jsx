import { useEffect, useState } from "react";

export default function EmbedPage() {
  const targetDate = new Date("2026-11-19T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "DÍAS", value: timeLeft.days },
    { label: "HORAS", value: timeLeft.hours },
    { label: "MINUTOS", value: timeLeft.minutes },
    { label: "SEGUNDOS", value: timeLeft.seconds }
  ];

  return (
    <div  className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a0a1f] to-[#0f1a1f] flex items-center justify-center p-4">
      {/* Neon grid effect */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 20, 147, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-black mb-2 tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              GTA VI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide uppercase">
            Tiempo Hasta el Lanzamiento
          </p>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-2 md:gap-4 mb-6">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-3 md:p-4 overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-cyan-400/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-400/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="text-2xl md:text-4xl font-black mb-1 text-center">
                    <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-bold tracking-widest text-center">
                    {unit.label}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-400 blur-xl opacity-20" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Powered by */}
        <div className="text-center">
          <a 
            href="https://www.timetillgta.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors duration-300"
          >
            <span>Powered by</span>
            <span className="font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
              TIMETILLGTA.COM
            </span>
          </a>
        </div>

        {/* Decorative orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-500 rounded-full blur-[100px] opacity-20 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-400 rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
}
