"use client";
import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  labels: { decrease: string; increase: string; quantity: string };
  name: string;
  size?: "sm" | "md";
}

export default function QuantityStepper({ value, onChange, labels, name, size = "md" }: QuantityStepperProps) {
  const btn = size === "sm" ? "w-8 h-8" : "w-10 h-10";
  return (
    <div className="inline-flex items-center rounded-full border border-gray-300 bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        disabled={value <= 0}
        aria-label={`${labels.decrease}: ${name}`}
        className={`${btn} flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors`}
      >
        <Minus size={16} />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={0}
        max={999}
        value={value}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        aria-label={`${labels.quantity}: ${name}`}
        className="w-12 text-center font-semibold text-gray-900 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label={`${labels.increase}: ${name}`}
        className={`${btn} flex items-center justify-center rounded-full text-brand hover:bg-brand/10 transition-colors`}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
