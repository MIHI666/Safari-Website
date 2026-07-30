import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import FeaturedAdventures from '@/components/FeaturedAdventures';
import CTABanner from '@/components/CTABanner';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <Hero />
      <TrustBar />
      <FeaturedAdventures />
      <CTABanner />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
