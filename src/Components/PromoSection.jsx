import { motion } from "framer-motion";
import { Gamepad2, Sparkles } from "lucide-react";

export default function PromoSection() {
  const promos = [
    {
      icon: Gamepad2,
      title: "Rockstar Games Collection",
      description: "Explore the legendary catalog",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80",
      color: "from-purple-600 to-pink-600",
      url: "https://www.rockstargames.com/games"
    },
    {
      icon: Sparkles,
      title: "Exclusive Merchandise",
      description: "Limited edition collectibles",
      image: "https://images.unsplash.com/photo-1523199455310-87b16c0eed11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-cyan-600 to-blue-600",
      url: "https://store.rockstargames.com/es/gear"
    }
  ];

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Content
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Discover exclusive offers and latest updates</p>
        </motion.div>

        {/* Promo cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promos.map((promo, index) => (
            <motion.a
              key={promo.title}
              href={promo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Background image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${promo.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${promo.color} shadow-lg mb-4`}>
                      <promo.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {promo.title}
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      {promo.description}
                    </p>
                  </div>

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Neon border effect */}
                <div className={`absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-2xl transition-all duration-500`} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional promotional banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 relative overflow-hidden rounded-3xl"
        >
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50 backdrop-blur-sm border border-pink-500/30">
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div>
                <h3 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Join the Community
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Stay updated with the latest news and connect with millions of fans worldwide
                </p>
                <motion.a
                  href="https://discord.com/invite/gta-vi"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r cursor-pointer from-pink-500 to-rose-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-pink-500/50 hover:shadow-pink-500/80 transition-all duration-300"
                >
                  Join Us
                </motion.a>
              </div>
            </div>
            
            {/* Animated background elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-[100px] opacity-30 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-400 rounded-full blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}