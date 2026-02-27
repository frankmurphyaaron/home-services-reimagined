import { Phone, Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Carpentry craftsmanship"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="font-display text-5xl md:text-7xl font-bold text-warm-white mb-4 tracking-tight">
          Merrill Home Services
        </h1>
        <p className="text-lg md:text-xl text-warm-white/85 mb-3 font-light">
          Projects that require thought, precision, and craftsmanship.
        </p>
        <p className="flex items-center justify-center gap-2 text-warm-white/70 text-sm mb-8">
          <MapPin className="w-4 h-4" />
          London, Ontario &amp; surrounding area
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+15197190418"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-3.5 rounded-md transition-colors w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            Call / Text
          </a>
          <a
            href="mailto:aaron@merrillhomeservices.com"
            className="inline-flex items-center justify-center gap-2 bg-warm-white/15 hover:bg-warm-white/25 text-warm-white border border-warm-white/30 font-semibold px-8 py-3.5 rounded-md transition-colors backdrop-blur-sm w-full sm:w-auto"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
