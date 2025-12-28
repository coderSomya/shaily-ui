import React from "react";
import { cn } from "@/lib/utils";

interface PaisleyDividerProps {
  className?: string;
  variant?: "simple" | "ornate" | "dots";
}

export const PaisleyDivider: React.FC<PaisleyDividerProps> = ({
  className,
  variant = "simple",
}) => {
  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-2 py-8", className)}>
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "bg-primary transition-all duration-300",
              i === 3 ? "w-3 h-3 rotate-45" : "w-1.5 h-1.5"
            )}
            style={{
              opacity: 1 - Math.abs(i - 3) * 0.2,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "ornate") {
    return (
      <div className={cn("relative py-8", className)}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Center diamond */}
          <div className="w-4 h-4 border-2 border-primary rotate-45" />
        </div>
        <div className="flex items-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-primary/50" />
          <div className="w-16" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-primary/50" />
        </div>
        {/* Side dots */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-8">
          <div className="w-1.5 h-1.5 bg-primary/50" />
          <div className="w-8" />
          <div className="w-1.5 h-1.5 bg-primary/50" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4 py-6", className)}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
      <div className="w-2 h-2 bg-primary rotate-45" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
    </div>
  );
};

