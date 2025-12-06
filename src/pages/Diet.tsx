import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Apple, Flame, AlertTriangle, CheckCircle, Info } from "lucide-react";

const foods = [
  {
    name: "Chicken Breast",
    category: "Protein",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    benefits: ["High protein", "Low fat", "Versatile", "Muscle building"],
    risks: ["Dry if overcooked", "Buy organic when possible"],
  },
  {
    name: "Brown Rice",
    category: "Carbs",
    calories: 216,
    protein: 5,
    carbs: 45,
    fat: 1.8,
    benefits: ["Complex carbs", "Fiber rich", "Sustained energy", "Minerals"],
    risks: ["High GI if overeaten", "Wash before cooking"],
  },
  {
    name: "Eggs",
    category: "Protein",
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    benefits: ["Complete protein", "Affordable", "Choline source", "Versatile"],
    risks: ["Cholesterol sensitive individuals", "Cook properly"],
  },
  {
    name: "Oats",
    category: "Carbs",
    calories: 389,
    protein: 16.9,
    carbs: 66,
    fat: 6.9,
    benefits: ["Slow digesting", "High fiber", "Heart healthy", "Budget friendly"],
    risks: ["Gluten cross-contamination", "Watch added sugars"],
  },
  {
    name: "Greek Yogurt",
    category: "Protein",
    calories: 100,
    protein: 17,
    carbs: 6,
    fat: 0.7,
    benefits: ["Probiotics", "High protein", "Calcium rich", "Versatile"],
    risks: ["Lactose intolerance", "Choose plain over flavored"],
  },
  {
    name: "Sweet Potato",
    category: "Carbs",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    benefits: ["Complex carbs", "Vitamin A", "Fiber", "Antioxidants"],
    risks: ["High in carbs", "Balance with protein"],
  },
  {
    name: "Salmon",
    category: "Protein",
    calories: 208,
    protein: 20,
    carbs: 0,
    fat: 13,
    benefits: ["Omega-3s", "Heart healthy", "Brain function", "High protein"],
    risks: ["Mercury content", "Choose wild-caught"],
  },
  {
    name: "Broccoli",
    category: "Vegetables",
    calories: 34,
    protein: 2.8,
    carbs: 7,
    fat: 0.4,
    benefits: ["Fiber rich", "Vitamins C & K", "Low calorie", "Antioxidants"],
    risks: ["Gas in some people", "Don't overcook"],
  },
];

const sampleDiets = [
  {
    name: "Cutting Diet",
    description: "For fat loss while maintaining muscle",
    meals: [
      { meal: "Breakfast", food: "Egg whites + oats + berries", calories: 350 },
      { meal: "Snack", food: "Greek yogurt + almonds", calories: 200 },
      { meal: "Lunch", food: "Grilled chicken + brown rice + veggies", calories: 450 },
      { meal: "Pre-workout", food: "Banana + whey protein", calories: 250 },
      { meal: "Dinner", food: "Salmon + sweet potato + broccoli", calories: 500 },
    ],
    totalCalories: 1750,
  },
  {
    name: "Bulking Diet",
    description: "For muscle gain with controlled surplus",
    meals: [
      { meal: "Breakfast", food: "Whole eggs + oats + peanut butter", calories: 600 },
      { meal: "Snack", food: "Protein shake + banana + nuts", calories: 400 },
      { meal: "Lunch", food: "Chicken breast + rice + avocado", calories: 650 },
      { meal: "Pre-workout", food: "Rice cakes + whey + honey", calories: 350 },
      { meal: "Dinner", food: "Steak + potato + vegetables", calories: 700 },
      { meal: "Before bed", food: "Casein protein + cottage cheese", calories: 300 },
    ],
    totalCalories: 3000,
  },
];

const Diet = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Nutrition Guide"
            subtitle="Understanding food is the foundation of any successful fitness journey"
          />

          {/* Macro Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { name: "Protein", icon: "🥩", desc: "4 cal/gram • Build & repair muscle", color: "from-red-500 to-orange-500" },
              { name: "Carbohydrates", icon: "🍚", desc: "4 cal/gram • Primary energy source", color: "from-amber-500 to-yellow-500" },
              { name: "Fats", icon: "🥑", desc: "9 cal/gram • Hormone production", color: "from-green-500 to-emerald-500" },
            ].map((macro) => (
              <div key={macro.name} className="bg-card p-6 rounded-xl border border-border text-center">
                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${macro.color} flex items-center justify-center mb-4`}>
                  <span className="text-3xl">{macro.icon}</span>
                </div>
                <h3 className="font-display text-2xl mb-2">{macro.name}</h3>
                <p className="text-muted-foreground text-sm">{macro.desc}</p>
              </div>
            ))}
          </div>

          {/* Food Database */}
          <h3 className="font-display text-3xl text-center mb-8">
            Food <span className="text-gradient">Database</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {foods.map((food) => (
              <div key={food.name} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-colors">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Apple className="w-6 h-6 text-primary" />
                      <h4 className="font-display text-xl">{food.name}</h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      {food.category}
                    </span>
                  </div>

                  {/* Nutrition Info */}
                  <div className="grid grid-cols-4 gap-4 mb-4 p-4 bg-background rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div className="font-semibold">{food.calories}</div>
                      <div className="text-xs text-muted-foreground">kcal/100g</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">Protein</div>
                      <div className="font-semibold text-red-400">{food.protein}g</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">Carbs</div>
                      <div className="font-semibold text-amber-400">{food.carbs}g</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">Fat</div>
                      <div className="font-semibold text-green-400">{food.fat}g</div>
                    </div>
                  </div>

                  {/* Benefits & Risks */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-green-400 mb-2">
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium">Benefits</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {food.benefits.map((benefit) => (
                          <span key={benefit} className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm text-amber-400 mb-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="font-medium">Watch Out</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {food.risks.map((risk) => (
                          <span key={risk} className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded">
                            {risk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sample Diets */}
          <h3 className="font-display text-3xl text-center mb-8">
            Sample <span className="text-gradient">Meal Plans</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sampleDiets.map((diet) => (
              <div key={diet.name} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h4 className="font-display text-2xl mb-2">{diet.name}</h4>
                  <p className="text-muted-foreground text-sm">{diet.description}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {diet.meals.map((meal) => (
                      <div key={meal.meal} className="flex items-center justify-between p-3 bg-background rounded-lg">
                        <div>
                          <span className="text-primary font-medium text-sm">{meal.meal}</span>
                          <p className="text-sm text-muted-foreground">{meal.food}</p>
                        </div>
                        <span className="text-sm font-semibold">{meal.calories} kcal</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                    <span className="text-muted-foreground">Daily Total</span>
                    <span className="font-display text-2xl text-primary">{diet.totalCalories} kcal</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="flex items-start gap-4 p-6 bg-primary/10 rounded-xl border border-primary/20">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-2">Important Note</h4>
                <p className="text-sm text-muted-foreground">
                  These are sample meal plans and general guidelines. Your specific caloric needs depend on your 
                  age, weight, height, activity level, and goals. Use the BMI & Tools section to calculate 
                  your requirements, or consult a nutritionist for personalized advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Diet;
