export type PriceLevel = number;

export interface Restaurant {
  id: string;
  name: string;
  photos: string[];
  categories: string[];
  rating: number;
  price: number;
  isOpen: boolean;
  openHours: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
}

export interface Review {
  id: string;
  restaurantId: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface RestaurantFilters {
  search?: string;       // server-side: cuisine/category text
  openNow?: boolean;     // client-side
  prices?: number[]; // client-side (array of selected filter IDs)
}
