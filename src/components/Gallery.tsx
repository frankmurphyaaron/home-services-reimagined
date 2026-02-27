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
  return (
    <section id="gallery" className="py-24 px-6 bg-section-alt">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Recent Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.label}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
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
    </section>
  );
};

export default Gallery;
