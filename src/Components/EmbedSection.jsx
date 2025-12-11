import { motion } from "framer-motion";
import { Check, Code2, Copy, Monitor } from "lucide-react";
import { useState } from "react";

export default function EmbedSection() {
  const [copied, setCopied] = useState(false);
  const [selectedSize, setSelectedSize] = useState({ width: "700", height: "250" });
  
  const embedCode = `<iframe src="https://www.timetillgta.com/embed" width="${selectedSize.width}" height="${selectedSize.height}" frameborder="0" allowtransparency="true" style="border-radius: 12px;"></iframe>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const embedSizes = [
    { label: "Small", width: "500", height: "200" },
    { label: "Medium", width: "700", height: "250" },
    { label: "Large", width: "900", height: "300" }
  ];

  return (
    <section id="embed" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 mb-6">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Share the Countdown
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Add the GTA VI countdown to your stream, website or blog. 
            Just copy and paste the code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Preview</h3>
              </div>
              
              {/* Preview iframe real */}
              <div className="bg-[#0a0a0f] rounded-xl p-4 border border-gray-700/50 flex items-center justify-center">
                <motion.div
                  key={`${selectedSize.width}-${selectedSize.height}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                  style={{ 
                    width: '100%',
                    maxWidth: `${selectedSize.width}px`
                  }}
                >
                  <iframe 
                    src="/embed" 
                    width="100%"
                    height={selectedSize.height}
                    frameBorder="0" 
                    allowTransparency="true"
                    className="rounded-xl shadow-lg"
                    title="GTA VI Countdown Preview"
                  />
                </motion.div>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">
                Size: {selectedSize.width}x{selectedSize.height}px
              </p>
            </div>

            {/* Embed sizes */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Available Sizes</h4>
              <div className="space-y-3">
                {embedSizes.map((size) => (
                  <button
                    key={size.label}
                    onClick={() => setSelectedSize({ width: size.width, height: size.height })}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                      selectedSize.width === size.width && selectedSize.height === size.height
                        ? 'bg-cyan-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                        : 'bg-white/5 border-gray-700/50 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-gray-300 font-medium">{size.label}</span>
                    <span className="text-cyan-400 text-sm font-mono">
                      {size.width}x{size.height}px
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Code section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Embed Code</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                    copied 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                      : 'bg-pink-500/20 text-pink-400 border border-pink-500/50 hover:bg-pink-500/30'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={18} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={18}  />
                      Copy
                    </>
                  )}
                </motion.button>
              </div>

              {/* Code block */}
              <div className="bg-[#0a0a0f] rounded-xl p-4 border border-gray-700/50 overflow-x-auto">
                <pre className="text-sm text-cyan-400 font-mono">
                  <code>{embedCode}</code>
                </pre>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">How to Use</h4>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold">
                    1
                  </span>
                  <span>Click the "Copy" button to copy the code</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold">
                    2
                  </span>
                  <span>Paste the code into your website, stream overlay or blog</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold">
                    3
                  </span>
                  <span>Adjust the width and height according to your needs</span>
                </li>
              </ol>
            </div>

            {/* Platforms */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Compatible with</h4>
              <div className="flex flex-wrap gap-3">
                {['OBS Studio', 'Streamlabs', 'WordPress', 'Webflow', 'Wix', 'Blogger'].map((platform) => (
                  <span 
                    key={platform}
                    className="px-4 py-2 bg-white/5 border border-gray-700/50 rounded-lg text-sm text-gray-300 font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-[150px] opacity-10 -z-10" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-[150px] opacity-10 -z-10" />
      </div>
    </section>
  );
}
