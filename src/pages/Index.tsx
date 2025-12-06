import { Link } from "react-router-dom";
import {
  ArrowRight,
  Dumbbell,
  Apple,
  Brain,
  Heart,
  Calculator,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Layout from "@/components/Layout";

const transformationTimeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Started my fitness journey at 85kg",
  },
  {
    year: "2021",
    title: "Building Foundation",
    description: "Learned proper form and nutrition basics",
  },
  {
    year: "2022",
    title: "Transformation",
    description: "Lost 20kg and gained lean muscle",
  },
  {
    year: "2023",
    title: "Sharing Knowledge",
    description: "Started TheFitBhaskar to help others",
  },
  {
    year: "2024",
    title: "Community Growth",
    description: "Building a fitness community together",
  },
];

const sections = [
  {
    icon: Dumbbell,
    title: "Workouts",
    desc: "Muscle-specific exercise guides",
    path: "/workouts",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Apple,
    title: "Diet",
    desc: "Nutrition plans & food guides",
    path: "/diet",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Lifestyle",
    desc: "Habits, sleep & recovery",
    path: "/lifestyle",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Brain,
    title: "Self Dev",
    desc: "Mindset & discipline",
    path: "/self-development",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Calculator,
    title: "BMI & Tools",
    desc: "Health calculators",
    path: "/tools",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Blog",
    desc: "Community fitness stories",
    path: "/blog",
    color: "from-amber-500 to-yellow-500",
  },
];

const heroVideo = "/gym-clip.mp4";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-3 sm:px-4">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(18,100%,55%,0.1)_0%,_transparent_70%)]" />

        <div className="container mx-auto px-0 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Welcome to My Fitness Journey
              </span>
            </div>

            <h1 className="font-display text-[2.4rem] sm:text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight max-w-[16ch] mx-auto mb-6 animate-slide-up delay-100">
              TheFit<span className="text-gradient">Bhaskar</span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground mb-8 animate-slide-up delay-200 max-w-2xl mx-auto">
              Transforming lives through fitness, nutrition, and mindset. Join
              me on this journey to become the best version of yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/about">
                  My Story <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/workouts">Start Training</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float delay-200" />
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              My <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To inspire and guide individuals on their fitness journey by
              sharing authentic experiences, proven workout routines, practical
              nutrition advice, and the mental frameworks needed for lasting
              transformation. Fitness is not just about looking good—it's about
              building a stronger, healthier, and more confident version of
              yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Train With Me <span className="text-gradient">Anywhere</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Here is a quick look at my latest gym set. The clip is
                lightweight and optimized to start instantly, even on slower
                connections.
              </p>
              <p className="text-sm text-muted-foreground">
                Autoplays muted, loops, and fits perfectly in a 9:16 frame so
                you can see every rep without black bars.
              </p>
            </div>

            <div className="relative w-full max-w-[320px] mx-auto">
              <div
                className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-primary/50 via-orange-500/40 to-amber-400/50 blur-2xl opacity-60"
                aria-hidden
              />
              <div className="relative rounded-3xl border border-border bg-background/80 shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-2">
                <AspectRatio ratio={1}>
                  <video
                    src="/gym-video.mp4"
                    className="h-full w-full rounded-2xl object-cover border border-border/80"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
            Transformation <span className="text-gradient">Timeline</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:hidden" />
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {transformationTimeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start md:items-center mb-12 gap-4 md:gap-0 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } flex-col md:flex-row`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:pr-8 md:text-right"
                      : "md:pl-8 md:text-left"
                  } text-left`}
                >
                  <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                    <span className="text-primary font-display text-2xl">
                      {item.year}
                    </span>
                    <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3.5 h-3.5 md:w-4 md:h-4 bg-primary rounded-full glow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16">
            Explore <span className="text-gradient">Sections</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="group bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(18,100%,55%/0.1)]"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <section.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-2xl mb-2">{section.title}</h3>
                <p className="text-muted-foreground text-sm">{section.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                  Explore{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 rounded-2xl border border-primary/20">
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Ready to <span className="text-gradient">Transform</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Start your fitness journey today. Check out my workouts, follow my
              diet tips, and join the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/workouts">View Workouts</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://youtube.com/@TheFitBhaskar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
