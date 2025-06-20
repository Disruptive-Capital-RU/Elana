import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatPercent(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100);
}

export function getRiskLevel(score: number): {
  level: "low" | "moderate" | "high";
  color: string;
  emoji: string;
} {
  if (score <= 0.3) {
    return { level: "low", color: "text-green-600", emoji: "🟢" };
  } else if (score <= 0.7) {
    return { level: "moderate", color: "text-yellow-600", emoji: "🟡" };
  } else {
    return { level: "high", color: "text-red-600", emoji: "🔴" };
  }
}
