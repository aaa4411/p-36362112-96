import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getKeyframes() {
  return {
    "accordion-down": {
      from: { height: "0", opacity: "0" },
      to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
      to: { height: "0", opacity: "0" },
    },
    "slide-in-bottom": {
      from: { transform: "translateY(100%)" },
      to: { transform: "translateY(0)" },
    },
    "slide-out-bottom": {
      from: { transform: "translateY(0)" },
      to: { transform: "translateY(100%)" },
    },
  };
}

export function getAnimations() {
  return {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    "slide-in-bottom": "slide-in-bottom 0.3s ease-out",
    "slide-out-bottom": "slide-out-bottom 0.3s ease-out",
  };
}

export function generateChartColors(count: number) {
  const baseColors = [
    "#3B82F6", // blue
    "#10B981", // green
    "#F59E0B", // amber
    "#EF4444", // red
    "#8B5CF6", // purple
    "#EC4899", // pink
    "#06B6D4", // cyan
    "#F97316", // orange
  ];
  
  // If we have fewer departments than colors, just return the needed colors
  if (count <= baseColors.length) {
    return baseColors.slice(0, count);
  }
  
  // Otherwise, generate additional colors by adjusting lightness
  const result = [...baseColors];
  const neededExtraColors = count - baseColors.length;
  
  for (let i = 0; i < neededExtraColors; i++) {
    // Cycle through base colors with different lightness
    const baseColorIndex = i % baseColors.length;
    // This is a simple way to generate a different shade - in a real app you'd use a proper color manipulation library
    result.push(baseColors[baseColorIndex] + "99"); // Adding hex opacity to create a lighter shade
  }
  
  return result;
}
