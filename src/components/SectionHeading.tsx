import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = true, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
        {title.split(" ").map((word, i) => (
          <span key={i}>
            {i === title.split(" ").length - 1 ? (
              <span className="text-gradient">{word}</span>
            ) : (
              <span>{word} </span>
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
