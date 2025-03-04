
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
