import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import {
  Target,
  Clock,
  Flame,
  Trophy,
  BookOpen,
  Zap,
  TrendingUp,
  Shield,
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Mindset",
    quote:
      "Your body can stand almost anything. It's your mind you have to convince.",
    content: [
      "Growth mindset vs fixed mindset - believe you can improve",
      "Embrace discomfort as the path to growth",
      "Visualize success before every workout",
      "Reframe failures as learning opportunities",
      "Your self-talk shapes your reality",
    ],
  },
  {
    icon: Flame,
    title: "Discipline",
    quote:
      "Discipline is choosing between what you want now and what you want most.",
    content: [
      "Motivation fades, discipline remains",
      "Create non-negotiable daily habits",
      "Start small and build momentum",
      "Environment design > willpower",
      "Track everything to stay accountable",
    ],
  },
  {
    icon: TrendingUp,
    title: "Consistency",
    quote:
      "It's not what we do once in a while that shapes our lives. It's what we do consistently.",
    content: [
      "Show up even when you don't feel like it",
      "Imperfect action beats perfect inaction",
      "1% better every day compounds massively",
      "Never miss twice in a row",
      "Consistency beats intensity long-term",
    ],
  },
  {
    icon: Clock,
    title: "Time Management",
    quote: "Time is the most valuable thing you can spend. Spend it wisely.",
    content: [
      "Plan your day the night before",
      "Time-block your priorities including workouts",
      "Learn to say no to protect your time",
      "Batch similar tasks together",
      "Audit your time weekly - where does it go?",
    ],
  },
];

const principles = [
  {
    icon: Trophy,
    title: "Goal Setting",
    description:
      "Set SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound",
    example:
      "Instead of 'get fit', try 'lose 5kg in 3 months through 4 weekly workouts and calorie deficit'",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Invest in knowledge about training, nutrition, and personal development",
    example:
      "Read 1 book per month, listen to podcasts during cardio, follow evidence-based sources",
  },
  {
    icon: Zap,
    title: "Energy Management",
    description:
      "Your energy is finite. Protect it and invest it wisely in what matters",
    example:
      "Morning = deep work + training. Afternoon = meetings. Evening = recovery + learning",
  },
  {
    icon: Shield,
    title: "Building Resilience",
    description:
      "Setbacks are inevitable. Your response defines your character",
    example:
      "Missed a week? Don't quit. Injured? Adapt and work around it. Bad day? Show up anyway.",
  },
];

const dailyPractices = [
  {
    time: "Morning",
    practice: "5 min gratitude journal + intentions",
    benefit: "Sets positive tone for the day",
  },
  {
    time: "Pre",
    practice: "Visualize the session going well",
    benefit: "Primes mind-body connection",
  },
  {
    time: "Post",
    practice: "Log workout + wins",
    benefit: "Builds positive feedback loop",
  },
  {
    time: "Evening",
    practice: "Review day + plan tomorrow",
    benefit: "Maintains momentum and clarity",
  },
  {
    time: "Weekly",
    practice: "Review progress + adjust goals",
    benefit: "Ensures continuous improvement",
  },
];

const SelfDevelopment = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Self Development"
            subtitle="Building physical strength is just the beginning. True transformation includes the mind."
          />

          {/* Opening Quote */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <blockquote className="text-2xl md:text-3xl font-display text-muted-foreground italic">
              "The iron never lies to you. You can walk outside and listen to
              all kinds of talk, but the iron will always kick you the real
              deal."
            </blockquote>
            <cite className="text-primary mt-4 block">— Henry Rollins</cite>
          </div>

          {/* Four Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl">{pillar.title}</h3>
                </div>

                <blockquote className="text-sm text-muted-foreground italic mb-4 pl-4 border-l-2 border-primary">
                  {pillar.quote}
                </blockquote>

                <ul className="space-y-2">
                  {pillar.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Principles */}
          <h3 className="font-display text-3xl text-center mb-8">
            Key <span className="text-gradient">Principles</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <principle.icon className="w-6 h-6 text-primary" />
                  <h4 className="font-display text-xl">{principle.title}</h4>
                </div>
                <p className="text-muted-foreground mb-4">
                  {principle.description}
                </p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <span className="text-xs text-primary font-medium">
                    Example:
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {principle.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Daily Practices */}
          <h3 className="font-display text-3xl text-center mb-8">
            Daily <span className="text-gradient">Practices</span>
          </h3>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {dailyPractices.map((practice, index) => (
                <div
                  key={practice.time}
                  className={`p-4 ${
                    index !== dailyPractices.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-24 flex-shrink-0">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        {practice.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{practice.practice}</h4>
                      <p className="text-sm text-muted-foreground">
                        {practice.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Long-term Growth */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl border border-primary/20 text-center">
              <h3 className="font-display text-3xl mb-4">
                Long-term <span className="text-gradient">Growth</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Remember: transformation is a marathon, not a sprint. The person
                you become through this process—disciplined, resilient,
                consistent—is the real prize. The physical changes are just the
                visible evidence of the mental transformation happening within.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Stay Patient",
                  "Stay Hungry",
                  "Stay Humble",
                  "Stay Growing",
                ].map((motto) => (
                  <span
                    key={motto}
                    className="px-4 py-2 bg-background rounded-lg border border-border text-sm font-medium"
                  >
                    {motto}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SelfDevelopment;
