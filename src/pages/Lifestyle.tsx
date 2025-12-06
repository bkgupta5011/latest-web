import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Moon, Sun, Heart, Brain, Coffee, Droplets, Wind, Timer } from "lucide-react";

const habits = [
  {
    icon: Moon,
    title: "Sleep Optimization",
    description: "Quality sleep is when your muscles grow and your mind recovers",
    tips: [
      "7-8 hours of sleep every night - non-negotiable",
      "No screens 1 hour before bed",
      "Sleep in a cool, dark room (18-20°C)",
      "Consistent sleep and wake times",
      "No caffeine after 2 PM",
      "Magnesium before bed helps relaxation",
    ],
  },
  {
    icon: Droplets,
    title: "Hydration",
    description: "Water is essential for every bodily function and performance",
    tips: [
      "Drink 3-4 liters of water daily",
      "Start your day with 500ml water",
      "Drink before you feel thirsty",
      "Electrolytes during intense workouts",
      "Herbal teas count towards intake",
      "Reduce alcohol - it dehydrates you",
    ],
  },
  {
    icon: Sun,
    title: "Morning Routine",
    description: "Win the morning, win the day",
    tips: [
      "Wake up at the same time daily",
      "No phone for first 30 minutes",
      "5-10 minutes of stretching/mobility",
      "Cold shower for alertness",
      "Protein-rich breakfast within 1 hour",
      "Set 3 priorities for the day",
    ],
  },
  {
    icon: Wind,
    title: "Stress Management",
    description: "Chronic stress kills gains and destroys health",
    tips: [
      "10 minutes daily meditation or breathwork",
      "Walk in nature when possible",
      "Limit social media consumption",
      "Practice gratitude journaling",
      "Say no to unnecessary commitments",
      "Deep breathing: 4-7-8 technique",
    ],
  },
];

const recoveryMethods = [
  {
    name: "Active Recovery",
    description: "Light movement to promote blood flow",
    examples: ["Walking", "Light yoga", "Swimming", "Cycling"],
    frequency: "Rest days",
  },
  {
    name: "Stretching & Mobility",
    description: "Maintain flexibility and prevent injury",
    examples: ["Dynamic stretching", "Foam rolling", "Static stretches", "Hip openers"],
    frequency: "Daily, 10-15 min",
  },
  {
    name: "Cold Exposure",
    description: "Reduce inflammation and boost recovery",
    examples: ["Cold showers", "Ice baths", "Cryotherapy"],
    frequency: "Post-workout or morning",
  },
  {
    name: "Massage & Bodywork",
    description: "Release muscle tension and adhesions",
    examples: ["Sports massage", "Self-massage", "Trigger point therapy"],
    frequency: "Weekly if possible",
  },
];

const weeklySchedule = [
  { day: "Monday", workout: "Push (Chest, Shoulders, Triceps)", recovery: "Stretching" },
  { day: "Tuesday", workout: "Pull (Back, Biceps)", recovery: "Foam rolling" },
  { day: "Wednesday", workout: "Legs & Core", recovery: "Stretching" },
  { day: "Thursday", workout: "Rest Day", recovery: "Active recovery walk" },
  { day: "Friday", workout: "Upper Body", recovery: "Stretching" },
  { day: "Saturday", workout: "Lower Body", recovery: "Foam rolling" },
  { day: "Sunday", workout: "Rest & Meal Prep", recovery: "Yoga or stretching" },
];

const Lifestyle = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Lifestyle Habits"
            subtitle="Fitness is 24/7. What you do outside the gym matters just as much as what you do inside."
          />

          {/* Core Habits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {habits.map((habit) => (
              <div
                key={habit.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <habit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">{habit.title}</h3>
                    <p className="text-sm text-muted-foreground">{habit.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {habit.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Recovery Section */}
          <h3 className="font-display text-3xl text-center mb-8">
            Recovery <span className="text-gradient">Methods</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
            {recoveryMethods.map((method) => (
              <div
                key={method.name}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <h4 className="font-display text-lg mb-2">{method.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-primary font-medium">Examples:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {method.examples.map((ex) => (
                        <span key={ex} className="px-2 py-1 bg-secondary text-xs rounded">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Timer className="w-3 h-3" /> {method.frequency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Schedule */}
          <h3 className="font-display text-3xl text-center mb-8">
            Weekly <span className="text-gradient">Schedule</span>
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 font-medium text-sm">
                <div>Day</div>
                <div>Workout</div>
                <div>Recovery</div>
              </div>
              {weeklySchedule.map((day, index) => (
                <div
                  key={day.day}
                  className={`grid grid-cols-3 gap-4 p-4 text-sm ${
                    index !== weeklySchedule.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="font-display text-primary">{day.day}</div>
                  <div className="text-muted-foreground">{day.workout}</div>
                  <div className="text-muted-foreground">{day.recovery}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="font-display text-2xl text-center mb-8">
              Quick <span className="text-gradient">Tips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Coffee, title: "Pre-Workout", tip: "Caffeine 30-60 min before training. Avoid late in day." },
                { icon: Heart, title: "Listen to Body", tip: "Rest when needed. Overtraining is real and counterproductive." },
                { icon: Brain, title: "Mental Health", tip: "Exercise is medicine for the mind. Prioritize consistency over intensity." },
              ].map((item) => (
                <div key={item.title} className="bg-card p-6 rounded-xl border border-border text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-display text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Lifestyle;
