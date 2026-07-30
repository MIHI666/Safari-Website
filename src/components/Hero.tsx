import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import heroImg from '@/assets/images/hero.jpg';
import jeepImg from '@/assets/images/jeep.jpg';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex items-center bg-[#0D0A07]">
      <motion.div className="absolute inset-0 z-0" style={{ y: y1 }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A07] via-black/40 to-black/60" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-8 sm:w-12 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base">
              The Ultimate Wilderness Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[130px] leading-[0.88] font-display text-white mb-8 tracking-tight italic"
          >
            Safari in <br />
            <span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F7F5F0] to-[#D4831A]">
              Sri Lanka
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl text-lg md:text-xl text-foreground/80 mb-10 font-light leading-relaxed"
          >
            Leave the concrete world behind. Step into the ancient wilderness of Sri Lanka — where leopards reign in Yala, wild elephants roam Udawalawe, and every sunrise feels like a discovery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="bg-primary hover:bg-secondary text-white px-8 py-5 rounded-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-3 group">
              Begin Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Tour Preview Card - Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden lg:block absolute bottom-12 right-12 z-20 w-[340px] bg-[#0D0A07]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden p-3"
      >
        <div className="relative h-40 rounded-xl overflow-hidden mb-4">
          <img src={jeepImg} alt="Safari Jeep" className="w-full h-full object-cover" />
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            <span className="text-xs font-bold tracking-widest uppercase text-white">Tour For You</span>
          </div>
        </div>
        <div className="px-2 pb-2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-display tracking-wide text-white italic">Golden Hour Drive</h3>
            <div className="flex items-center text-primary">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 text-sm font-bold text-white">4.9</span>
            </div>
          </div>
          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
            Experience the savanna when it comes alive. Private guided jeep tours through elite reserves.
          </p>
          <a
            href="#tours"
            className="block w-full py-3 border border-primary/50 hover:bg-primary text-primary hover:text-white rounded-lg text-sm font-bold tracking-widest uppercase transition-colors text-center"
          >
            Get a Unique Offer
          </a>
        </div>
      </motion.div>

      {/* Mobile Tour Strip */}
      <motion.a
        href="#tours"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="lg:hidden absolute bottom-20 left-4 right-4 z-20 bg-primary/90 backdrop-blur-md px-6 py-4 rounded-xl flex items-center justify-between group"
      >
        <span className="text-white font-bold text-sm tracking-wide">Golden Hour Drive — Get a Unique Offer</span>
        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
      </motion.a>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-foreground/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
      </motion.div>
    </section>
  );
}
