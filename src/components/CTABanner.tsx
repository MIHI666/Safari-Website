import { motion } from 'framer-motion';
import dunesImg from '@/assets/images/dunes.jpg';

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${dunesImg})` }}
        />
        <div className="absolute inset-0 bg-[#0D0A07]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A07] via-transparent to-[#0D0A07]" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight italic">
            Ready to Trade Concrete for <span className="not-italic text-primary">Endless Horizons?</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Your Sri Lanka safari adventure awaits. Let our expert local guides craft a bespoke wildlife experience that leaves you breathless and forever changed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-secondary text-white px-8 py-4 rounded-sm font-bold tracking-[0.15em] uppercase transition-colors">
              Book Your Safari Now
            </button>
            <button className="w-full sm:w-auto bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-sm font-bold tracking-[0.15em] uppercase transition-colors">
              Contact an Expert
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
