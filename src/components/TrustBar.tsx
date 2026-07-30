import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Tag } from 'lucide-react';

const pillars = [
  { icon: Compass, title: 'Expert Guides', desc: 'Local trackers who know the wilderness like the back of their hand.' },
  { icon: ShieldCheck, title: 'Safety First', desc: 'Premium equipped vehicles and rigorous safety protocols.' },
  { icon: Tag, title: 'Best Prices', desc: 'Direct bookings with lodges to ensure you get unparalleled value.' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TrustBar() {
  return (
    <section className="bg-[#F4F0EA] py-20 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={item} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#E8C44A]/20 flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-[#C05C1F]" />
              </div>
              <h3 className="text-2xl font-display text-[#0D0A07] mb-3 tracking-wide">{pillar.title}</h3>
              <p className="text-[#0D0A07]/70 leading-relaxed font-light">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
