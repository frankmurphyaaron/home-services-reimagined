import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const projects = [
  { src: gallery4, label: "Portico & Steps" },
  { src: gallery3, label: "Kitchen Renovation" },
  { src: gallery2, label: "Entrance Restoration" },
  { src: gallery5, label: "Custom Shed" },
  { src: gallery6, label: "Porch Steps" },
  { src: gallery1, label: "Counter & Sink" },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const prev = useCallback(() => setActiveIndex((i) => (i !== null ? (i - 1 + projects.length) % projects.length : null)), []);
  const next = useCallback(() => setActiveIndex((i) => (i !== null ? (i + 1) % projects.length : null)), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [activeIndex, prev, next]);

  return (
    <section id="gallery" className="py-24 px-6 bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Recent Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.label}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={project.src}
                alt={project.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-warm-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-warm-dark/90 backdrop-blur-sm animate-fade-in-up"
          onClick={close}
        >
          <button onClick={close} className="absolute top-5 right-5 text-warm-white/70 hover:text-warm-white transition-colors">
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-warm-white/60 hover:text-warm-white transition-colors"
          >
            <ChevronLeft className="w-9 h-9" />
          </button>

          <div className="max-w-4xl max-h-[85vh] px-12" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[activeIndex].src}
              alt={projects[activeIndex].label}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center text-warm-white/80 font-medium mt-4 text-sm">
              {projects[activeIndex].label}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-warm-white/60 hover:text-warm-white transition-colors"
          >
            <ChevronRight className="w-9 h-9" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
