import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle } from "lucide-react";

const quickInfo = [
  { label: "Name", value: "Bhaskar Kumar Gupta" },
  { label: "From", value: "Gopalganj, Bihar - 841428" },
  { label: "Currently in", value: "Kankarbagh, Patna - 800020" },
  { label: "Profession", value: "Accounts Manager, Protax Protect Services Private Limited" },
  { label: "Passion", value: "Fitness, self-development, and natural transformation" },
];

const timeline = [
  {
    title: "Before June 2024 - Stuck at 92 kg",
    detail:
      "Low energy, low confidence, unhealthy habits, and no real understanding of diet or structured training.",
  },
  {
    title: "24 June 2024 - The turning point",
    detail:
      "Walked into the gym for the first time with zero knowledge. Decided: \"No excuses. Bas start karna hai.\"",
  },
  {
    title: "July 2024 - Learning the basics",
    detail:
      "Stayed consistent while figuring out form, timing, soreness, calories, protein, and structured workouts.",
  },
  {
    title: "Aug-Oct 2024 - Visible changes",
    detail:
      "Weight started dropping, clothes fit better, stamina improved, and confidence came back.",
  },
  {
    title: "Nov 2024 - 70s weight range",
    detail:
      "Dropped from 92 kg to the low 70s. Friends and colleagues started asking for tips.",
  },
  {
    title: "Current - 68 kg and growing stronger",
    detail:
      "Building strength, keeping discipline, and inspiring others with a lean, muscular physique and higher stamina.",
  },
  {
    title: "Future - TheFitBhaskar vision",
    detail:
      "Document the journey, share natural fitness knowledge, and help people across India balance office, gym, and self-development.",
  },
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(18,100%,55%,0.12)_0%,_transparent_55%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <SectionHeading
              title="From 92 kg to 68 kg"
              subtitle="Building strength, discipline, and self-belief one day at a time"
            />

            <div className="bg-card p-8 rounded-2xl border border-border space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am Bhaskar, an accounts manager by profession and a fitness enthusiast by passion. Born in
                Gopalganj, Bihar and now in Kankarbagh, Patna, I turned my life around through fitness - one early
                morning and one workout at a time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For a long time, I lived like many others: busy with work, no proper diet, very little movement, and
                no clear focus on health. On 24 June 2024, I decided to change my life forever. I stepped into the gym
                with zero knowledge about diet, workouts, consistency, or time management, but with one decision - no
                excuses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today I am at 68 kg with better strength, higher stamina, and unshakable confidence. This journey is
                not just physical; it rebuilt my mindset, discipline, and lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickInfo.map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-card border border-border">
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-medium text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionHeading
              title="My Fitness Journey"
              subtitle="From discomfort at 92 kg to a disciplined lifestyle at 68 kg"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="font-display text-2xl mb-3">Before transformation</h3>
                <p className="text-muted-foreground">
                  Bhaskar at 92 kg - low energy, low confidence, and stuck in an unhealthy routine. Busy work days,
                  no proper diet, and very little movement kept progress out of reach.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="font-display text-2xl mb-3">After transformation</h3>
                <p className="text-muted-foreground">
                  Bhaskar at 68 kg - stronger, leaner, more disciplined, and mentally sharper. Fitness rebuilt my
                  mindset through consistency, clean eating, and daily effort.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {timeline.map((entry) => (
                <div key={entry.title} className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-display text-xl mb-2">{entry.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{entry.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why I created this site */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 space-y-6">
            <SectionHeading
              title="Why I created TheFitBhaskar.in"
              subtitle="This website is not commercial - it is about honest documentation and helping others"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground italic">
              I believe fitness is not about shortcuts. It is about discipline, dedication, and natural growth. Healthy
              khao, workout karo, fit raho.
            </p>
          </div>
        </div>
      </section>

      {/* Daily routine */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <SectionHeading title="My Daily Routine" subtitle="Structure keeps me consistent and focused" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {routineSections.map((block) => (
                <div key={block.title} className="p-6 rounded-xl bg-background border border-border space-y-3">
                  <h3 className="font-display text-xl">{block.title}</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fitness values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 space-y-6">
            <SectionHeading title="My Fitness Values" subtitle="Personal rules that keep me grounded" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((rule) => (
                <div key={rule} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-foreground">{rule}</span>
                </div>
              ))}
            </div>
            <div className="bg-background border border-dashed border-border rounded-xl p-6">
              <h3 className="font-display text-2xl mb-2">Long-term goal</h3>
              <p className="text-muted-foreground">
                I want to help people see that fitness is achievable for everyone - students, job holders, entrepreneurs,
                parents, anyone. Through this site, YouTube videos, blogs, diet guides, and workout tips, my mission is to
                spread fitness across India and prove that if I can do it, you can do it too.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;



