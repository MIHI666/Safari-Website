import { motion } from 'framer-motion';
import elephantImg from '@/assets/images/elephant_sunset.jpg';
import cheetahImg from '@/assets/images/cheetah.jpg';
import leopardImg from '@/assets/images/leopard_tree.jpg';
import lionPrideImg from '@/assets/images/lion_pride.jpg';
import giraffesSilImg from '@/assets/images/giraffes_silhouette.jpg';
import panoramaImg from '@/assets/images/savanna_panorama.jpg';

const images = [
  { src: elephantImg, alt: 'Elephant at sunset', className: 'md:col-span-2 md:row-span-2 h-[300px] md:h-full' },
  { src: cheetahImg, alt: 'Cheetah mid-stride', className: 'md:col-span-1 md:row-span-1 h-[300px] md:h-full' },
  { src: leopardImg, alt: 'Leopard on tree', className: 'md:col-span-1 md:row-span-1 h-[300px] md:h-full' },
  { src: panoramaImg, alt: 'Savanna panorama', className: 'md:col-span-2 md:row-span-1 h-[300px] md:h-full' },
  { src: giraffesSilImg, alt: 'Giraffes silhouette', className: 'md:col-span-1 md:row-span-1 h-[300px] md:h-full' },
  { src: lionPrideImg, alt: 'Lion pride', className: 'md:col-span-1 md:row-span-1 h-[300px] md:h-full' },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[#0D0A07] relative z-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">Life in the Wild</span>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white">
            A GLIMPSE INTO THE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">UNTAMED WORLD</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${img.className}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
