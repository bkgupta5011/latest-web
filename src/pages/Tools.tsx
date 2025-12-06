import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Calculator, Heart, Scale, Activity } from "lucide-react";

const tools = [
  {
    icon: Scale,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index to understand where you stand",
    embedUrl: "https://script.google.com/macros/s/AKfycbxg8P0I380IXY9c6lLCDFKra14l7vShj6FLlgaepWvIxnOMgguD8Xy_TI8RKmse21XgoA/exec?tool=bmi",
  },
  {
    icon: Heart,
    title: "Health Assessment",
    description: "Get a comprehensive overview of your health metrics",
    embedUrl: "https://script.google.com/macros/s/AKfycbxg8P0I380IXY9c6lLCDFKra14l7vShj6FLlgaepWvIxnOMgguD8Xy_TI8RKmse21XgoA/exec?tool=health",
  },
];

const bmiCategories = [
  { range: "Below 18.5", category: "Underweight", color: "text-blue-400", description: "You may need to gain weight. Consult a doctor." },
  { range: "18.5 - 24.9", category: "Normal", color: "text-green-400", description: "Healthy weight range. Maintain it!" },
  { range: "25.0 - 29.9", category: "Overweight", color: "text-amber-400", description: "Consider losing weight through diet and exercise." },
  { range: "30.0 and above", category: "Obese", color: "text-red-400", description: "High risk for health issues. Seek medical advice." },
];

const tips = [
  "BMI is a general indicator and doesn't account for muscle mass",
  "Athletes may have high BMI due to muscle, not fat",
  "Waist circumference is also an important health metric",
  "Combine BMI with body fat percentage for better accuracy",
  "Regular health check-ups are essential regardless of BMI",
  "Focus on how you feel and perform, not just numbers",
];

const Tools = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="BMI & Health Tools"
            subtitle="Track your health metrics with these calculators"
          />

          {/* Tool Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <tool.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg border border-border overflow-hidden">
                  <iframe
                    src={tool.embedUrl}
                    className="w-full h-[400px]"
                    title={tool.title}
                    frameBorder="0"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* BMI Categories */}
          <h3 className="font-display text-3xl text-center mb-8">
            BMI <span className="text-gradient">Categories</span>
          </h3>
          
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {bmiCategories.map((item, index) => (
                <div
                  key={item.category}
                  className={`p-4 flex flex-col md:flex-row md:items-center gap-4 ${
                    index !== bmiCategories.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="w-32 flex-shrink-0">
                    <span className="font-mono text-sm">{item.range}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-display text-lg ${item.color}`}>{item.category}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Notes */}
          <h3 className="font-display text-3xl text-center mb-8">
            Important <span className="text-gradient">Notes</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <Activity className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-amber-400 mb-2">Disclaimer</h4>
              <p className="text-sm text-muted-foreground">
                These tools provide general health estimates and should not replace professional medical advice. 
                Always consult with healthcare professionals for accurate health assessments and personalized 
                recommendations. Results may vary based on individual factors not captured by these calculators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
