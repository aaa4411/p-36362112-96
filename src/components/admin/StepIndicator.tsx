
import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type Step = {
  id: number;
  name: string;
  description?: string;
};

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (stepId: number) => void;
  variant?: "default" | "slim" | "vertical";
  className?: string;
}

const StepIndicator = ({
  steps,
  currentStep,
  onStepClick,
  variant = "default",
  className,
}: StepIndicatorProps) => {
  const isVertical = variant === "vertical";
  const isSlim = variant === "slim";

  return (
    <div 
      className={cn(
        "w-full",
        isVertical ? "flex flex-col space-y-2" : "flex items-center",
        className
      )}
    >
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            <div 
              className={cn(
                "flex", 
                isVertical ? "flex-row items-start" : "flex-col items-center"
              )}
            >
              <button
                type="button"
                onClick={() => onStepClick && onStepClick(step.id)}
                disabled={!onStepClick}
                className={cn(
                  "relative flex items-center justify-center rounded-full transition-colors",
                  isSlim ? "h-6 w-6" : "h-10 w-10",
                  isActive ? 
                    "bg-primary text-primary-foreground" : 
                    isCompleted ? 
                      "bg-primary text-primary-foreground" : 
                      "border-2 border-gray-300 bg-white text-gray-500",
                  onStepClick && !isCompleted && !isActive && "cursor-pointer hover:border-gray-400",
                  onStepClick && isCompleted && "cursor-pointer hover:bg-primary/90"
                )}
              >
                {isCompleted ? (
                  <Check className={isSlim ? "h-3 w-3" : "h-5 w-5"} />
                ) : (
                  <span className={cn("text-sm font-medium", isSlim ? "text-xs" : "text-sm")}>
                    {step.id}
                  </span>
                )}
              </button>
              
              {!isSlim && (
                <div 
                  className={cn(
                    "mt-2 text-center", 
                    isVertical && "ml-3 text-left", 
                    isActive ? "text-primary" : "text-gray-500"
                  )}
                >
                  <div className="text-sm font-medium">{step.name}</div>
                  {step.description && (
                    <div className="text-xs text-gray-500">{step.description}</div>
                  )}
                </div>
              )}
            </div>

            {!isLast && (
              <div 
                className={cn(
                  "flex-1",
                  isVertical ? 
                    "ml-3 h-8 border-l-2" : 
                    "h-0.5 w-full", 
                  isCompleted ? "border-primary" : "border-gray-300"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
