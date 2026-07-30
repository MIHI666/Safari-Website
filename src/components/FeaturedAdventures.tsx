import { motion } from 'framer-motion';
import { Star, MapPin, Clock } from 'lucide-react';
import okavangoImg from '@/assets/images/okavango.jpg';
import serengetiImg from '@/assets/images/serengeti.jpg';
import giraffesImg from '@/assets/images/giraffes_blue.jpg';

const adventures = [
  {
    id: 1,
    title: 'Yala Leopard Expedition',
    image: okavangoImg,
    location: 'Yala, Sri Lanka',
    days: '5 Days',
    price: '$2,800',
    rating: '5.0',
    category: 'Leopard Safari',
  },
  {
    id: 2,
    title: 'Udawalawe Elephant Trail',
    image: serengetiImg,
    location: 'Udawalawe, Sri Lanka',
    days: '4 Days',
    price: '$2,100',
    rating: '4.9',
    category: 'Elephant Safari',
  },
  {
    id: 3,
    title: 'Wilpattu Wilderness Drive',
    image: giraffesImg,
    location: 'Wilpattu, Sri Lanka',
    days: '3 Days',
    price: '$1,600',
    rating: '4.8',
    category: 'Classic Game Drive',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function FeaturedAdventures() {
  return (
    <section className="py-24 md:py-32 bg-[#0D0A07] relative z-20" id="tours">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-primary"></div>
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Featured Tours</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-white italic leading-tight">
              Explore Our Wildest <span className="not-italic text-primary">Adventures</span>
            </h2>
          </div>
          <button className="hidden sm:block text-sm font-bold tracking-[0.2em] uppercase border-b border-primary text-foreground hover:text-primary transition-colors pb-1">
            View All Tours
          </button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {adventures.map((adv) => (
            <motion.div
              key={adv.id}
              variants={item}
              className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="relative h-[300px] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 z-20 bg-[#0D0A07]/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary">{adv.category}</span>
                </div>
              </div>
              <div className="p-6 relative z-20 bg-gradient-to-b from-[#0D0A07]/0 to-[#0D0A07] -mt-16 pt-16">
                <h3 className="text-2xl font-display tracking-wide text-white group-hover:text-primary transition-colors mb-3">
                  {adv.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
                  <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{adv.location}</span></div>
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{adv.days}</span></div>
                  <div className="flex items-center gap-1 ml-auto text-primary">
                    <Star className="w-4 h-4 fill-current" /><span className="text-white font-medium">{adv.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-sm text-foreground/50 block mb-1">Starting from</span>
                    <span className="text-xl font-bold text-white">{adv.price}</span>
                  </div>
                  <button className="bg-white/10 hover:bg-primary text-white px-5 py-2.5 rounded text-sm font-bold tracking-wider uppercase transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
