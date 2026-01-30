import { MenuItem, Testimonial } from './types';

export const CONTACT_INFO = {
  phone: "96078268",
  email: "pateetfondant@hotmail.com",
  address: "La municipalité, Houmet souk, Djerba, Tunisia",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Pate+et+fondant+Houmet+souk+Djerba"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Croissant au Beurre',
    description: 'Traditional French croissant made with premium butter.',
    price: '2.5 TND',
    category: 'pastry',
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    name: 'Fondant au Chocolat',
    description: 'Rich, molten chocolate cake served with vanilla bean ice cream.',
    price: '8.0 TND',
    category: 'pastry',
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    name: 'Quiche Lorraine',
    description: 'Classic savory tart with cream, bacon, and cheese.',
    price: '6.5 TND',
    category: 'savory',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    name: 'Tunisian Fricassé',
    description: 'Fried sandwich with tuna, potato, olives, and harissa.',
    price: '3.0 TND',
    category: 'savory',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: '5',
    name: 'Café Direct',
    description: 'Strong, aromatic espresso.',
    price: '2.0 TND',
    category: 'drink',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: '6',
    name: 'Thé à la Menthe',
    description: 'Traditional pine nut mint tea.',
    price: '2.5 TND',
    category: 'drink',
    image: 'https://picsum.photos/400/300?random=6'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarra Ben Ali',
    text: "Une expérience inoubliable. Le fondant est à tomber !",
    rating: 5
  },
  {
    id: '2',
    name: 'Jean-Pierre Dubois',
    text: "Excellent service and the best croissants in Houmet Souk.",
    rating: 5
  },
  {
    id: '3',
    name: 'Ahmed K.',
    text: "L'endroit est propre, chic et très accueillant.",
    rating: 4
  }
];
