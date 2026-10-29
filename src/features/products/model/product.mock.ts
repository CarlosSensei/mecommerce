import { Product } from './product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Nova Headphones',
    price: 299,
    image: 'headphone.jpg',
    description: 'Immersive wireless sound.',
    details:
      'Engineered for creators and audiophiles, Nova Headphones deliver immersive spatial audio, advanced noise cancellation and exceptional comfort for all-day listening.',
    features: [
      'Active noise cancellation',
      '40-hour battery life',
      'Spatial audio technology'
    ],
    bgColor: '#00E5FF'
  },
  {
    id: 2,
    name: 'Nova Keyboard',
    price: 199,
    image: 'keyboard.jpg',
    description: 'Precision typing experience.',
    details:
      'Designed for professionals and gamers, Nova Keyboard combines premium mechanical switches with customizable lighting and ultra-responsive performance.',
    features: [
      'Mechanical switches',
      'RGB backlighting',
      'Low-latency response'
    ],
    bgColor: '#7C3AED'
  },
  {
    id: 3,
    name: 'Nova Display',
    price: 899,
    image: 'monitor.jpg',
    description: 'Ultra-wide creative workspace.',
    details:
      'An ultra-wide display crafted for creators and multitaskers, offering vibrant colors, exceptional clarity and seamless productivity.',
    features: [
      'Ultra-wide 5K resolution',
      'Color accurate panel',
      'USB-C connectivity'
    ],
    bgColor: '#22C55E'
  },
  {
    id: 4,
    name: 'Nova Watch',
    price: 399,
    image: 'watch.jpg',
    description: 'Track everything.',
    details:
      'Nova Watch blends elegant design with advanced health tracking, fitness monitoring and smart connectivity in a lightweight form factor.',
    features: [
      'Heart-rate monitoring',
      '7-day battery life',
      'Water resistant'
    ],
    bgColor: '#F97316'
  },
  {
    id: 5,
    name: 'Nova Speaker',
    price: 249,
    image: 'speaker.jpg',
    description: 'Premium room-filling sound.',
    details:
      'Experience powerful audio with deep bass and crystal-clear highs. Nova Speaker is built to transform any room into an immersive listening environment.',
    features: [
      '360° sound projection',
      'Wireless multi-room support',
      '20-hour playback'
    ],
    bgColor: '#EC4899'
  },
  {
    id: 6,
    name: 'Nova VR',
    price: 999,
    image: 'vr.jpg',
    description: 'Experience new realities.',
    details:
      'Nova VR delivers breathtaking immersion with ultra-high resolution displays, precise tracking and next-generation interactive experiences.',
    features: [
      '4K per eye resolution',
      'Inside-out tracking',
      'Ultra-low latency'
    ],
    bgColor: '#FFD60A'
  }
];