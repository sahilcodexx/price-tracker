export interface AuthModelProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface User {
  id: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Product {
  id: string;
  user_id: string;
  url: string;
  name: string;
  current_price: number;
  currency: string;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export interface PriceHistory {
  id: string;
  product_id: string;
  price: number;
  currency: string;
  created_at?: string;
  checked_at?: string;
}

export interface ScrapedProduct {
  productName: string;
  currentPrice: number;
  currencyCode?: string;
  productImageUrl?: string;
}
