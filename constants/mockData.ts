// Service Categories
export const CATEGORIES = [
  {
    id: '1',
    name: 'Home Cleaning',
    icon: 'spray',
    color: '#3B82F6',
    image: 'https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg'
  },
  {
    id: '2',
    name: 'Plumbing',
    icon: 'wrench',
    color: '#10B981',
    image: 'https://images.pexels.com/photos/6447773/pexels-photo-6447773.jpeg'
  },
  {
    id: '3',
    name: 'Electrician',
    icon: 'zap',
    color: '#F59E0B',
    image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg'
  },
  {
    id: '4',
    name: 'Carpenter',
    icon: 'hammer',
    color: '#8B5CF6',
    image: 'https://images.pexels.com/photos/6422765/pexels-photo-6422765.jpeg'
  },
  {
    id: '5',
    name: 'Salon',
    icon: 'scissors',
    color: '#EC4899',
    image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg'
  },
  {
    id: '6',
    name: 'AC Repair',
    icon: 'fan',
    color: '#22C55E',
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg'
  },
];

// Popular Services
export const POPULAR_SERVICES = [
  {
    id: '1',
    name: 'Deep Home Cleaning',
    categoryId: '1',
    price: 999,
    duration: '4 hours',
    image: 'https://images.pexels.com/photos/4107112/pexels-photo-4107112.jpeg',
    rating: 4.8,
    reviewCount: 320,
  },
  {
    id: '2',
    name: 'Bathroom Repair',
    categoryId: '2',
    price: 499,
    duration: '2 hours',
    image: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg',
    rating: 4.6,
    reviewCount: 185,
  },
  {
    id: '3',
    name: 'Fan Installation',
    categoryId: '3',
    price: 399,
    duration: '1 hour',
    image: 'https://images.pexels.com/photos/6368759/pexels-photo-6368759.jpeg',
    rating: 4.7,
    reviewCount: 192,
  },
  {
    id: '4',
    name: 'Furniture Repair',
    categoryId: '4',
    price: 599,
    duration: '2 hours',
    image: 'https://images.pexels.com/photos/6969926/pexels-photo-6969926.jpeg',
    rating: 4.5,
    reviewCount: 178,
  },
];

// Recommended Service Providers
export const RECOMMENDED_PROVIDERS = [
  {
    id: '1',
    name: 'Priya Sharma',
    occupation: 'House Cleaner',
    categoryId: '1',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    rating: 4.9,
    reviewCount: 232,
    verified: true,
    hourlyRate: 249,
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    occupation: 'Plumber',
    categoryId: '2',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    rating: 4.7,
    reviewCount: 198,
    verified: true,
    hourlyRate: 299,
  },
  {
    id: '3',
    name: 'Amit Patel',
    occupation: 'Electrician',
    categoryId: '3',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    rating: 4.8,
    reviewCount: 214,
    verified: true,
    hourlyRate: 349,
  },
];

// Bookings for Customer
export const BOOKINGS = [
  {
    id: '1',
    serviceId: '1',
    serviceName: 'Deep Home Cleaning',
    providerId: '1',
    providerName: 'Priya Sharma',
    providerImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    date: '2024-02-25',
    time: '10:00 AM',
    duration: '4 hours',
    status: 'upcoming',
    price: 999,
    address: '123 Park Street, Koramangala, Bangalore',
  },
  {
    id: '2',
    serviceId: '2',
    serviceName: 'Bathroom Repair',
    providerId: '2',
    providerName: 'Rajesh Kumar',
    providerImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    date: '2024-02-20',
    time: '2:00 PM',
    duration: '2 hours',
    status: 'completed',
    price: 499,
    address: '456 MG Road, Indiranagar, Bangalore',
  },
  {
    id: '3',
    serviceId: '3',
    serviceName: 'Fan Installation',
    providerId: '3',
    providerName: 'Amit Patel',
    providerImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    date: '2024-02-15',
    time: '11:00 AM',
    duration: '1 hour',
    status: 'cancelled',
    price: 399,
    address: '789 HSR Layout, Bangalore',
  },
];

// Bookings for Provider
export const PROVIDER_BOOKINGS = [
  {
    id: '1',
    serviceId: '1',
    serviceName: 'Deep Home Cleaning',
    customerId: '1',
    customerName: 'Ananya Singh',
    customerImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    date: '2024-02-25',
    time: '10:00 AM',
    duration: '4 hours',
    status: 'upcoming',
    price: 999,
    address: '123 Park Street, Koramangala, Bangalore',
  },
  {
    id: '2',
    serviceId: '1',
    serviceName: 'Deep Home Cleaning',
    customerId: '2',
    customerName: 'Neha Gupta',
    customerImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    date: '2024-02-26',
    time: '2:00 PM',
    duration: '4 hours',
    status: 'upcoming',
    price: 999,
    address: '456 MG Road, Indiranagar, Bangalore',
  },
  {
    id: '3',
    serviceId: '1',
    serviceName: 'Deep Home Cleaning',
    customerId: '3',
    customerName: 'Rahul Verma',
    customerImage: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg',
    date: '2024-02-20',
    time: '11:00 AM',
    duration: '4 hours',
    status: 'completed',
    price: 999,
    address: '789 HSR Layout, Bangalore',
  },
];

// Provider Stats
export const PROVIDER_STATS = {
  earnings: 25000,
  completedJobs: 24,
  rating: 4.9,
};

// Messages
export const MESSAGES = [
  {
    id: '1',
    senderId: '1',
    senderName: 'Ananya Singh',
    senderImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    lastMessage: 'Hi, I wanted to confirm our appointment tomorrow.',
    timestamp: '10:30 AM',
    unread: true,
  },
  {
    id: '2',
    senderId: '2',
    senderName: 'Neha Gupta',
    senderImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    lastMessage: 'Thank you for the great service!',
    timestamp: 'Yesterday',
    unread: false,
  },
  {
    id: '3',
    senderId: '3',
    senderName: 'Rahul Verma',
    senderImage: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg',
    lastMessage: 'Do you have availability next week?',
    timestamp: 'Feb 20',
    unread: false,
  },
];