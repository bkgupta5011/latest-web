import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle } from "lucide-react";

const dailyRoutine = [
  { time: "5:30 AM", activity: "Wake up & Hydrate", icon: "💧" },
  { time: "6:00 AM", activity: "Morning Workout", icon: "🏋️" },
  { time: "7:30 AM", activity: "Cold Shower & Breakfast", icon: "🍳" },
  { time: "8:30 AM", activity: "Work / Productive Tasks", icon: "💻" },
  { time: "12:30 PM", activity: "Lunch & Short Walk", icon: "🥗" },
  { time: "1:30 PM", activity: "Deep Work Session", icon: "📚" },
  { time: "5:30 PM", activity: "Evening Cardio / Stretching", icon: "🏃" },
  { time: "7:00 PM", activity: "Dinner", icon: "🍽️" },
  { time: "8:00 PM", activity: "Reading / Learning", icon: "📖" },
  { time: "10:00 PM", activity: "Sleep", icon: "😴" },
];

const routineSections = [
  {
    title: "Morning",
    items: [
      "Wake up at 4:30 AM",
      "Coffee to start the day",
      "Gym session till 7:30 AM",
      "Prepare meals and follow a personalized diet plan",
    ],
  },
  {
    title: "Day time",
    items: [
      "Head to the office",
      "Focus on accounting, clients, and learning",
      "Maintain clean eating during work hours",
    ],
  },
  {
    title: "Evening",
    items: [
      "Finish office around 6:30 PM",
      "Edit gym-recorded clips or personal content",
      "Prepare dinner, review the day, and sleep by 10 PM",
    ],
  },
];

const values = [
  "Discipline over motivation",
  "Consistency is the real secret",
  "Natural growth - no shortcuts",
  "Daily movement is mandatory",
  "Every day 1% progress",
  "Show up, even on the toughest days",
];

const reasons = [
  "Document my own fitness journey",
  "Keep myself motivated and consistent",
  "Share genuine fitness knowledge",
  "Guide people to live healthier lives",
  "Show that anyone can balance office, gym, study, and personal life",
  "Spread fitness awareness in India",
];

const About = () => {
  return (
    <Layout>
      {/* Hero / Intro */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(18,100%,55%,0.1)_0%,_transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="From 92 kg to 68 kg"
              subtitle="Building strength, discipline, and self-belief one day at a time"
            />
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-card p-8 rounded-2xl border border-border mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My name is Bhaskar, and fitness changed my life. Back in 2020, I was overweight, 
                  struggling with low energy, and lacking confidence. I knew something had to change.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I started with simple walks, then gradually moved to the gym. The journey was not 
                  easy—I made countless mistakes, tried fad diets, and injured myself multiple times. 
                  But through persistence and learning, I discovered what truly works.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, I'm in the best shape of my life, and I've made it my mission to share 
                  everything I've learned. TheFitBhaskar is not just a brand—it's a community of 
                  people committed to becoming their best selves through fitness, nutrition, and mindset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Clock, label: "Years Training", value: "4+" },
              { icon: Target, label: "Weight Lost", value: "20kg" },
              { icon: Award, label: "Workouts Done", value: "1000+" },
              { icon: Flame, label: "Transformation", value: "100%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-background rounded-xl border border-border">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I created this site */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Daily Routine"
            subtitle="Structure creates freedom. Here's how I organize my day for maximum productivity and fitness."
          />
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {dailyRoutine.map((item, index) => (
                <div key={item.time} className="flex items-start gap-6 mb-6 relative">
                  <div className="w-16 text-right">
                    <span className="text-sm text-muted-foreground">{item.time}</span>
                  </div>
                  <div className="relative z-10 w-4 h-4 mt-1 rounded-full bg-primary glow" />
                  <div className="flex-1 bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium">{item.activity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fitness values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="My Rules"
            subtitle="Non-negotiable principles that guide my fitness journey"
          />
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {myRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-8">
              What Keeps Me <span className="text-gradient">Going</span>
            </h2>
            
            <blockquote className="text-2xl md:text-3xl font-display text-muted-foreground italic mb-8">
              "The body achieves what the mind believes. Every rep, every meal, every choice—they all compound into the person you become."
            </blockquote>
            
            <p className="text-muted-foreground">
              My motivation comes from seeing progress—not just in the mirror, but in how I feel, 
              think, and perform. And now, seeing others transform through my guidance is the 
              greatest reward of all.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;



