import type { Restaurant, RestaurantFilters } from "@/domain/types";

export function applyClientFilters(
  list: Restaurant[],
  { openNow, prices }: Pick<RestaurantFilters, "openNow" | "prices">,
): Restaurant[] {
  return list.filter((r) => {
    if (openNow && !r.isOpen) return false;
    if (prices && prices.length > 0) {
      const match = prices.some(level => {
        if (level === 1) return r.price < 75000;
        if (level === 2) return r.price >= 75000 && r.price < 200000;
        if (level === 3) return r.price >= 200000;
        return false;
      });
      if (!match) return false;
    }
    return true;
  });
}
