import { Compass, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050403] pt-24 pb-8 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-6">
              <Compass className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl tracking-[0.15em] text-white">SOLITUDE</span>
            </a>
            <p className="text-foreground/60 text-sm leading-relaxed mb-8">
              We curate extraordinary wildlife encounters across Sri Lanka's most pristine national parks — from Yala's leopards to Udawalawe's elephant herds.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display tracking-widest uppercase mb-6 text-lg">Destinations</h4>
            <ul className="flex flex-col gap-3">
              {['Yala National Park', 'Udawalawe National Park', 'Wilpattu National Park', 'Minneriya National Park', 'Sinharaja Rainforest'].map((d) => (
                <li key={d}><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">{d}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display tracking-widest uppercase mb-6 text-lg">Support</h4>
            <ul className="flex flex-col gap-3">
              {['Contact Us', 'FAQ', 'Booking Terms', 'Safety Protocols', 'Travel Insurance'].map((s) => (
                <li key={s}><a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display tracking-widest uppercase mb-6 text-lg">Your Story Starts Here</h4>
            <p className="text-foreground/60 text-sm mb-4">Subscribe for exclusive wilderness dispatches and early access to unique safari offers.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="button"
                className="bg-primary hover:bg-secondary text-white rounded px-4 py-3 font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 transition-colors"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Made by Mihira */}
        <div className="mb-10 rounded-2xl border border-[#D4831A]/30 bg-gradient-to-r from-[#D4831A]/10 via-[#E8C44A]/5 to-[#C05C1F]/10 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-foreground/50 text-xs tracking-[0.25em] uppercase mb-2 font-medium">Designed &amp; Built by</p>
            <p className="font-display text-4xl md:text-5xl italic text-transparent bg-clip-text bg-gradient-to-r from-[#E8C44A] via-[#D4831A] to-[#C05C1F] leading-none">Mihira</p>
            <p className="text-foreground/40 text-sm mt-2">Full-Stack Developer &amp; UI/UX Designer</p>
          </div>
          <a
            href="https://t.me/itz_zyron"
            className="shrink-0 inline-flex items-center gap-3 bg-gradient-to-r from-[#D4831A] to-[#C05C1F] hover:from-[#E8C44A] hover:to-[#D4831A] text-white font-semibold px-8 py-4 rounded-xl tracking-wide transition-all duration-300 shadow-lg shadow-[#D4831A]/20 hover:shadow-[#D4831A]/40 hover:-translate-y-0.5"
          >
            <span>Hire Developer</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">© 2025 Solitude Safari. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm text-foreground/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
