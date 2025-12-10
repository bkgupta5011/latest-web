import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Youtube,
  Instagram,
  Mail,
  Send,
  Loader2,
  MessageSquare,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Youtube,
      name: "YouTube",
      handle: "@TheFitBhaskar",
      url: "https://youtube.com/@TheFitBhaskar",
      color: "bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white",
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@thefitbhaskar",
      url: "https://www.instagram.com/thefitbhaskar/",
      color:
        "bg-pink-500/20 text-pink-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white",
    },
    {
      icon: Mail,
      name: "Email",
      handle: "contact@thefitbhaskar.com",
      url: "mailto:contact@thefitbhaskar.com",
      color:
        "bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground",
    },
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have questions, suggestions, or want to collaborate? I'd love to hear from you!"
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-display text-2xl mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Connect Section */}
            <div className="space-y-8">
              {/* Social Links */}
              <div className="bg-card rounded-xl border border-border p-8">
                <h3 className="font-display text-2xl mb-6">Connect With Me</h3>

                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <div>
                        <div className="font-medium">{social.name}</div>
                        <div className="text-sm opacity-80">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* YouTube CTA */}
              <div className="bg-gradient-to-br from-red-500/20 via-red-500/10 to-transparent rounded-xl border border-red-500/20 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-red-500 flex items-center justify-center">
                    <Youtube className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">TheFitBhaskar</h3>
                    <p className="text-muted-foreground text-sm">on YouTube</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Watch workout tutorials, diet tips, transformation vlogs, and
                  more on my YouTube channel. Subscribe and join the fitness
                  journey!
                </p>
                <Button
                  asChild
                  className="w-full bg-red-500 hover:bg-red-600 text-white"
                >
                  <a
                    href="https://youtube.com/@TheFitBhaskar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Subscribe on YouTube
                  </a>
                </Button>
              </div>

              {/* Location Info */}
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Based in India • Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
