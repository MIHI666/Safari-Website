import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    trip: 'Yala Leopard Expedition',
    quote: "We spotted three leopards on our very first morning in Yala. The guides were extraordinary — patient, knowledgeable, and deeply passionate about Sri Lanka's wildlife. Truly unforgettable.",
    rating: 5,
  },
  {
    name: 'David & Emma Chen',
    trip: 'Udawalawe Elephant Trail',
    quote: 'Watching a herd of 60 elephants cross the plain at golden hour was the most moving thing I have ever witnessed. Solitude Safari made every detail perfect.',
    rating: 5,
  },
  {
    name: 'Marcus Thorne',
    trip: 'Wilpattu Wilderness Drive',
    quote: 'Wilpattu felt like the world had been paused just for us. Remote, wild, and completely authentic. I booked my second trip before I even left the country.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F4F0EA] relative z-20" id="reviews">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#C05C1F]"></div>
            <span className="text-[#C05C1F] font-medium tracking-[0.2em] uppercase text-sm">Traveler Stories</span>
            <div className="h-[2px] w-8 bg-[#C05C1F]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-[#0D0A07] italic">Voices of the Wild</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8C44A]/20 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E8C44A]/30" />
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C05C1F] text-[#C05C1F]" />
                ))}
              </div>
              <p className="text-[#0D0A07]/80 italic mb-8 relative z-10 leading-relaxed">"{test.quote}"</p>
              <div>
                <h4 className="font-bold text-[#0D0A07] text-lg">{test.name}</h4>
                <span className="text-sm text-[#C05C1F] uppercase tracking-wider font-medium">{test.trip}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
