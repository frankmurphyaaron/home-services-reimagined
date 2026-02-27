import { useState } from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nContact: ${emailOrPhone}\n\n${message}`;
    window.location.href = `mailto:aaron@merrillhomeservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-section-alt">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          Get in Touch
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Reach out anytime — I'm happy to talk through your project.
        </p>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact info */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <a
              href="tel:+15197190418"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">519-719-0418</span>
            </a>
            <a
              href="mailto:aaron@merrillhomeservices.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium text-sm">aaron@merrillhomeservices.com</span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-muted-foreground text-center">
              This will open your email client with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
