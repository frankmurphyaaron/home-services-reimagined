import { ShieldCheck, Star } from "lucide-react";
import aaronImg from "@/assets/aaron.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          About
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={aaronImg}
              alt="Aaron Merrill"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I specialize in projects that require thought, precision, and
              craftsmanship. From small repairs to full builds, I take on the work
              that needs a careful eye and a clean finish.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">
                <ShieldCheck className="w-4 h-4" />
                Insured
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">
                <Star className="w-4 h-4" />
                References Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
