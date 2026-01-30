export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'pastry' | 'savory' | 'drink';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
