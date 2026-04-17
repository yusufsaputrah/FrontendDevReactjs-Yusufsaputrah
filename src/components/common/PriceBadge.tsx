import { cn } from "@/lib/utils";
import { Banknote } from "lucide-react";

export function PriceBadge({ value, className }: { value: number; className?: string }) {
  const isCheap = value < 75000;
  const isModerate = value >= 75000 && value < 200000;
  const isExpensive = value >= 200000;

  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1 text-[13px] font-semibold tracking-tight",
        isCheap ? "text-green-600 dark:text-green-500" :
        isModerate ? "text-blue-600 dark:text-blue-500" :
        isExpensive ? "text-orange-600 dark:text-orange-500" :
        "text-purple-600 dark:text-purple-500",
        className
      )} 
      aria-label={`Price: Rp ${value.toLocaleString("id-ID")}`}
    >
      <Banknote className="w-4 h-4 opacity-75" />
      Rp {value.toLocaleString("id-ID")}
    </span>
  );
}
