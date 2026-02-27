import { Wrench, Hammer, Fence, Home, ClipboardCheck, HelpCircle } from "lucide-react";

const services = [
  { icon: Wrench, title: "General Repairs" },
  { icon: Hammer, title: "Trim & Carpentry" },
  { icon: Fence, title: "Decks & Exterior Work" },
  { icon: Home, title: "Renovation Projects" },
  { icon: ClipboardCheck, title: "Ongoing Property Maintenance" },
  { icon: HelpCircle, title: "…and other problem-solving situations" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          What I Do
        </h2>
        <p className="text-muted-foreground mb-14 max-w-lg mx-auto">
          From small fixes to full builds, every project gets the same careful attention.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground text-left">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
