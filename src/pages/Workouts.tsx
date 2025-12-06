import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { ChevronRight, Dumbbell, Timer, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const muscleGroups = [
  {
    name: "Chest",
    icon: "💪",
    description: "Build a powerful chest with compound and isolation movements",
    exercises: [
      { name: "Barbell Bench Press", sets: "4", reps: "8-12", tips: "Keep shoulder blades retracted, arch your back slightly, and drive through your feet." },
      { name: "Incline Dumbbell Press", sets: "3", reps: "10-12", tips: "30-degree incline targets upper chest. Control the negative." },
      { name: "Cable Flyes", sets: "3", reps: "12-15", tips: "Squeeze at the center, maintain slight bend in elbows." },
      { name: "Push-Ups", sets: "3", reps: "15-20", tips: "Great finisher. Vary hand width for different emphasis." },
      { name: "Dips (Chest Focused)", sets: "3", reps: "10-12", tips: "Lean forward to target chest. Go deep." },
    ],
  },
  {
    name: "Back",
    icon: "🔙",
    description: "Develop a wide, thick back for that V-taper aesthetic",
    exercises: [
      { name: "Pull-Ups / Lat Pulldown", sets: "4", reps: "8-12", tips: "Focus on pulling with elbows, not hands. Full stretch at bottom." },
      { name: "Barbell Rows", sets: "4", reps: "8-10", tips: "Keep back parallel to ground, squeeze shoulder blades." },
      { name: "Seated Cable Rows", sets: "3", reps: "10-12", tips: "Pull to lower chest, pause at contraction." },
      { name: "Face Pulls", sets: "3", reps: "15-20", tips: "External rotation at the top. Great for rear delts." },
      { name: "Deadlifts", sets: "3", reps: "5-8", tips: "Compound king. Keep core tight, drive through heels." },
    ],
  },
  {
    name: "Shoulders",
    icon: "🎯",
    description: "Sculpt boulder shoulders with balanced development",
    exercises: [
      { name: "Overhead Press", sets: "4", reps: "8-10", tips: "Strict form, core engaged. Full lockout at top." },
      { name: "Lateral Raises", sets: "4", reps: "12-15", tips: "Slight bend in elbows, control the weight down." },
      { name: "Front Raises", sets: "3", reps: "12-15", tips: "Alternate arms for better focus. Don't swing." },
      { name: "Reverse Pec Deck", sets: "3", reps: "15", tips: "Target rear delts. Squeeze at the back." },
      { name: "Shrugs", sets: "3", reps: "12-15", tips: "Hold at top for 2 seconds. Heavy weight is fine." },
    ],
  },
  {
    name: "Arms",
    icon: "💪",
    description: "Build impressive biceps and triceps",
    exercises: [
      { name: "Barbell Curls", sets: "3", reps: "10-12", tips: "No swinging. Squeeze at the top." },
      { name: "Hammer Curls", sets: "3", reps: "10-12", tips: "Targets brachialis for arm thickness." },
      { name: "Tricep Pushdowns", sets: "3", reps: "12-15", tips: "Lock elbows at sides, full extension." },
      { name: "Skull Crushers", sets: "3", reps: "10-12", tips: "Lower to forehead, control the weight." },
      { name: "Close-Grip Bench Press", sets: "3", reps: "8-10", tips: "Hands shoulder-width, elbows tucked." },
    ],
  },
  {
    name: "Legs",
    icon: "🦵",
    description: "Never skip leg day - build powerful legs",
    exercises: [
      { name: "Barbell Squats", sets: "4", reps: "8-10", tips: "Depth is key. Break parallel, drive through heels." },
      { name: "Romanian Deadlifts", sets: "3", reps: "10-12", tips: "Feel the hamstring stretch, slight knee bend." },
      { name: "Leg Press", sets: "4", reps: "12-15", tips: "Don't lock knees. Full range of motion." },
      { name: "Leg Curls", sets: "3", reps: "12-15", tips: "Squeeze at contraction. Control the negative." },
      { name: "Calf Raises", sets: "4", reps: "15-20", tips: "Full stretch, pause at top. High volume works best." },
    ],
  },
  {
    name: "Core",
    icon: "🎖️",
    description: "Strengthen your foundation with core exercises",
    exercises: [
      { name: "Planks", sets: "3", reps: "60 sec", tips: "Keep body straight, engage glutes." },
      { name: "Hanging Leg Raises", sets: "3", reps: "12-15", tips: "Control the swing, curl pelvis up." },
      { name: "Cable Crunches", sets: "3", reps: "15-20", tips: "Crunch down, not back. Feel the abs." },
      { name: "Russian Twists", sets: "3", reps: "20 each", tips: "Rotate from the core, not just arms." },
      { name: "Ab Rollouts", sets: "3", reps: "10-12", tips: "Start slow, don't hyperextend lower back." },
    ],
  },
];

const Workouts = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  
  const activeMuscle = muscleGroups.find(m => m.name === selectedMuscle);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Workout Library"
            subtitle="Click on a muscle group to see targeted exercises with detailed instructions"
          />

          {/* Muscle Group Selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
            {muscleGroups.map((muscle) => (
              <button
                key={muscle.name}
                onClick={() => setSelectedMuscle(selectedMuscle === muscle.name ? null : muscle.name)}
                className={cn(
                  "p-6 rounded-xl border transition-all duration-300 text-center",
                  selectedMuscle === muscle.name
                    ? "bg-primary/20 border-primary shadow-[0_0_20px_hsl(18,100%,55%/0.3)]"
                    : "bg-card border-border hover:border-primary/50"
                )}
              >
                <span className="text-4xl block mb-2">{muscle.icon}</span>
                <span className="font-display text-lg">{muscle.name}</span>
              </button>
            ))}
          </div>

          {/* Exercise Details */}
          {activeMuscle ? (
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{activeMuscle.icon}</span>
                  <div>
                    <h3 className="font-display text-3xl">{activeMuscle.name} Exercises</h3>
                    <p className="text-muted-foreground">{activeMuscle.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeMuscle.exercises.map((exercise, index) => (
                    <div
                      key={exercise.name}
                      className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-display text-lg">
                            {index + 1}
                          </div>
                          <h4 className="font-semibold text-lg">{exercise.name}</h4>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Dumbbell className="w-4 h-4" />
                            <span>{exercise.sets} sets</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Timer className="w-4 h-4" />
                            <span>{exercise.reps} reps</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                        <Flame className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p>{exercise.tips}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <ChevronRight className="w-5 h-5 text-primary animate-pulse" />
                <span>Select a muscle group above to view exercises</span>
              </div>
            </div>
          )}

          {/* Workout Tips */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="font-display text-2xl mb-6 text-center">
              General <span className="text-gradient">Tips</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Always warm up for 5-10 minutes before lifting",
                "Progressive overload is key to muscle growth",
                "Rest 60-90 seconds between sets for hypertrophy",
                "Focus on mind-muscle connection, not ego lifting",
                "Get 7-8 hours of sleep for optimal recovery",
                "Stay hydrated - aim for 3+ liters daily",
              ].map((tip, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                  <span className="text-primary font-display text-lg">{index + 1}.</span>
                  <span className="text-muted-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Workouts;
