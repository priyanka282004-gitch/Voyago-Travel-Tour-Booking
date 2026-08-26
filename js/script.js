/* ==========================================================================
   VOYAGO — Travel & Tour Booking Platform
   Vanilla JavaScript Controller (Frontend Portfolio Demo)
   ========================================================================== */

/**
 * --------------------------------------------------------------------------
 * Centralized Single Source of Truth for Destination Data
 * --------------------------------------------------------------------------
 */
const DESTINATIONS_DATA = [
  {
    id: 'madurai',
    name: 'Madurai',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu cultural',
    description: 'Historic temple city of Tamil Nadu featuring the majestic Meenakshi Amman Temple towers and bazaars.',
    price: '₹16,999',
    badge: 'Heritage',
    image: 'images/Madurai.avif',
    alt: 'Madurai Meenakshi Amman Temple'
  },
  {
    id: 'kanyakumari',
    name: 'Kanyakumari',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu coastal',
    description: 'Southernmost tip of mainland India, famed for the Vivekananda Rock Memorial and tri-sea sunrise.',
    price: '₹15,500',
    badge: 'Coastal Landmark',
    image: 'images/Kanyakumari.webp',
    alt: 'Kanyakumari Vivekananda Rock Memorial'
  },
  {
    id: 'thanjavur',
    name: 'Thanjavur',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu cultural',
    description: 'Chola dynasty capital boasting the UNESCO World Heritage Brihadeeswarar Great Living Chola Temple.',
    price: '₹15,999',
    badge: 'UNESCO Heritage',
    image: 'images/Thanjavur.webp',
    alt: 'Thanjavur Brihadeeswarar Temple'
  },
  {
    id: 'ooty',
    name: 'Ooty (Udhagamandalam)',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu mountain',
    description: 'Queen of Hill Stations featuring rolling Nilgiri tea gardens, Ooty Lake boating, and heritage toy train.',
    price: '₹18,500',
    badge: 'Hill Station',
    image: 'images/Ooty.jpg',
    alt: 'Ooty Nilgiri Hills tea plantations'
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu mountain',
    description: 'Princess of Hill Stations featuring star-shaped Kodaikanal Lake, Coaker\'s Walk, and dense pine forests.',
    price: '₹19,000',
    badge: 'Nature Retreat',
    image: 'images/Kodaikanal.jpg',
    alt: 'Kodaikanal lake and pine forest'
  },
  {
    id: 'rameshwaram',
    name: 'Rameshwaram',
    location: 'Tamil Nadu, India',
    category: 'tamil-nadu cultural',
    description: 'Island town connected by the iconic Pamban Sea Bridge, famed for Ramanathaswamy Temple corridors.',
    price: '₹17,500',
    badge: 'Coastal Pilgrimage',
    image: 'images/Rameshwaram.jpg',
    alt: 'Rameshwaram Ramanathaswamy Temple'
  },
  {
    id: 'delhi',
    name: 'Delhi & Agra',
    location: 'North India',
    category: 'cultural heritage',
    description: 'Explore India\'s historic capital and experience the magnificent Taj Mahal in nearby Agra, combining Mughal heritage, iconic landmarks and vibrant North Indian culture.',
    price: '₹22,999',
    badge: 'Heritage & Wonders',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    alt: 'Taj Mahal in Agra, India'
  },
  {
    id: 'munnar',
    name: 'Munnar',
    location: 'Kerala, India',
    category: 'kerala mountain',
    description: 'Lush green tea plantations, misty mountain valleys, Anamudi Peak, and rare Neelakurinji blooms.',
    price: '₹21,000',
    badge: 'Tea Plantations',
    image: 'images/Munnar.webp',
    alt: 'Munnar tea plantations in Kerala'
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    location: 'Kerala, India',
    category: 'kerala mountain',
    description: 'Mist-clad mountains, ancient Edakkal Caves, spice plantations, and cascading Western Ghats waterfalls.',
    price: '₹19,500',
    badge: 'Western Ghats',
    image: 'images/Wayanad.jpg',
    alt: 'Wayanad Western Ghats landscape'
  },
  {
    id: 'alappuzha',
    name: 'Alappuzha (Alleppey)',
    location: 'Kerala, India',
    category: 'kerala beach',
    description: 'Venice of the East famous for traditional luxury houseboat cruises along palm-fringed backwaters.',
    price: '₹24,000',
    badge: 'Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    alt: 'Alleppey Kerala backwaters houseboat'
  },
  {
    id: 'kovalam',
    name: 'Kovalam',
    location: 'Kerala, India',
    category: 'kerala beach',
    description: 'Iconic red-striped lighthouse beach, crescent bay, and oceanfront Ayurvedic wellness spas.',
    price: '₹22,500',
    badge: 'Beach Resort',
    image: 'images/Kovalam.jpg',
    alt: 'Kovalam Lighthouse Beach Kerala'
  },
  {
    id: 'varkala',
    name: 'Varkala',
    location: 'Kerala, India',
    category: 'kerala beach',
    description: 'Dramatic red sandstone cliffs overlooking the Arabian Sea, golden sands, and yoga centers.',
    price: '₹20,500',
    badge: 'Cliff Beach',
    image: 'images/Varkala.avif',
    alt: 'Red sandstone cliff overlooking Arabian Sea in Varkala'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    location: 'Rajasthan, India',
    category: 'cultural',
    description: 'The Pink City featuring grand Amber Fort, Hawa Mahal, royal palaces, and vibrant bazaars.',
    price: '₹22,000',
    badge: 'Heritage',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    alt: 'Jaipur Hawa Mahal'
  },
  {
    id: 'goa',
    name: 'Goa Coast',
    location: 'Goa, India',
    category: 'beach',
    description: 'Sun-kissed palm beaches, Portuguese heritage churches, water sports, and beach shacks.',
    price: '₹25,000',
    badge: 'Coastal',
    image: 'images/Goa.avif',
    alt: 'Tropical palm beach in Goa'
  },
  {
    id: 'manali',
    name: 'Manali Valley',
    location: 'Himachal Pradesh, India',
    category: 'mountain',
    description: 'High-altitude Himalayan valley, pine scented breezes, rivers, and winter skiing slopes.',
    price: '₹18,999',
    badge: 'Himalayas',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    alt: 'Manali Himalayas snow peaks'
  },
  {
    id: 'bali',
    name: 'Bali Island',
    location: 'Bali, Indonesia',
    category: 'beach cultural',
    description: 'Tropical beaches, iconic terraced rice paddies, and sacred spiritual temples.',
    price: '₹34,999',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    alt: 'Bali rice terraces and temple'
  },
  {
    id: 'paris',
    name: 'Paris',
    location: 'Paris, France',
    category: 'cultural',
    description: 'The City of Light known for romance, world-class art, fashion, and Eiffel Tower views.',
    price: '₹68,500',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    alt: 'Eiffel Tower Paris skyline'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    location: 'Dubai, UAE',
    category: 'luxury',
    description: 'Ultramodern architecture, desert safari adventures, and opulent resort stays.',
    price: '₹54,999',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    alt: 'Dubai Burj Khalifa skyline'
  },
  {
    id: 'maldives',
    name: 'Maldives Islands',
    location: 'Maldives',
    category: 'beach luxury',
    description: 'Pristine coral reefs, crystal turquoise lagoons, and private overwater bungalow retreats.',
    price: '₹72,000',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    alt: 'Maldives overwater bungalows'
  }
];

/**
 * --------------------------------------------------------------------------
 * Centralized Single Source of Truth for Tour Packages Data
 * --------------------------------------------------------------------------
 */
const TOURS_DATA = [
  {
    id: 'madurai-munnar',
    title: 'Madurai Temple & Munnar Tea Estate Retreat',
    location: 'Tamil Nadu & Kerala, India',
    categories: ['south-india', 'cultural', 'mountain', 'gastronomy', 'wildlife'],
    categoryBadge: 'South India',
    tag: 'Temple & Tea',
    durationDays: 4,
    durationText: '4 Days / 3 Nights',
    priceNumeric: 18500,
    priceFormatted: '₹18,500',
    image: 'images/Madurai.avif',
    imageAlt: 'Madurai Meenakshi Temple Architecture Tour',
    highlights: [
      'Madurai Meenakshi Temple Architecture Tour',
      'Munnar Tea Garden Walk & Factory Tasting',
      'Western Ghats Scenic Resort Stay'
    ],
    overview: 'Experience the perfect blend of rich Dravidian heritage and mountain tranquility. Begin your journey in the historic temple city of Madurai with a guided heritage tour of Meenakshi Amman Temple, then ascend into the mist-covered Western Ghats tea plantations of Munnar.',
    gallery: [
      'images/Madurai.avif',
      'images/Munnar.webp',
      'images/Rameshwaram.jpg'
    ],
    quickInfo: {
      groupSize: 'Small Group (Max 12)',
      language: 'English / Tamil / Malayalam',
      meals: 'Daily Breakfast + 2 Dinners',
      transport: 'Private AC SUV / Tempo Traveller'
    },
    itinerary: [
      { day: 1, title: 'Arrival in Madurai & Meenakshi Temple Evening Ceremony', desc: 'Arrive at Madurai Junction or Airport. Check in to your hotel and visit the magnificent Meenakshi Amman Temple during the evening night ceremony.' },
      { day: 2, title: 'Madurai Heritage Walk & Scenic Drive to Munnar', desc: 'Explore Thirumalai Nayakkar Palace and traditional spice markets. Drive through scenic Western Ghats winding roads towards Munnar.' },
      { day: 3, title: 'Munnar Tea Estate Tour & Eravikulam National Park', desc: 'Guided morning walk through lush tea gardens, visit a historic tea processing museum, and spot Nilgiri Tahr at Eravikulam National Park.' },
      { day: 4, title: 'Mattupetty Dam & Departure', desc: 'Visit Mattupetty Dam and Echo Point before your transfer back to Madurai or Kochi for your onward journey.' }
    ],
    inclusions: [
      '3 Nights accommodation in premium heritage & hill resorts',
      'Daily breakfast and 2 specialty local dinners',
      'Private AC vehicle for all transfers & sightseeing',
      'All entry permits, temple entry fees & guided tour charges'
    ],
    exclusions: [
      'Train or airfare to/from Madurai',
      'Personal expenses, tips & laundry services',
      'Travel insurance'
    ]
  },
  {
    id: 'munnar-alleppey',
    title: 'Munnar Tea Hills & Alleppey Houseboat Experience',
    location: 'Kerala, India',
    categories: ['south-india', 'mountain', 'beach', 'wildlife', 'gastronomy'],
    categoryBadge: 'South India',
    tag: 'Backwaters',
    durationDays: 5,
    durationText: '5 Days / 4 Nights',
    priceNumeric: 24000,
    priceFormatted: '₹24,000',
    image: 'images/Munnar.webp',
    imageAlt: 'Tea plantations in Munnar, Kerala',
    highlights: [
      'Munnar Tea Garden & Waterfall Tour',
      'Overnight Deluxe Houseboat Cruise',
      'Spice Plantation Walk & Cooking Demo'
    ],
    overview: 'Discover God\'s Own Country across misty hill stations and world-famous backwaters. Tour the emerald tea estates of Munnar, explore spice plantations in Thekkady, and relax on a private overnight houseboat cruise through Alleppey\'s palm-fringed channels.',
    gallery: [
      'images/Munnar.webp',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'images/Kovalam.jpg'
    ],
    quickInfo: {
      groupSize: 'Private / Custom Group',
      language: 'English / Malayalam / Hindi',
      meals: 'Daily Breakfast + Houseboat All Meals',
      transport: 'Private AC Sedan / SUV'
    },
    itinerary: [
      { day: 1, title: 'Arrival in Kochi & Transfer to Munnar', desc: 'Pickup from Kochi Airport or Railway Station. Scenic drive to Munnar passing Cheeyappara and Valara waterfalls.' },
      { day: 2, title: 'Munnar Sightseeing & Tea Garden Walk', desc: 'Visit Tea Museum, Blossom Hydel Park, Mattupetty Lake, and Photo Point surrounded by mist-covered hills.' },
      { day: 3, title: 'Scenic Drive to Alleppey & Houseboat Boarding', desc: 'Drive to Alleppey backwaters. Board your private traditional Kettuvallam houseboat by noon and cruise past paddy fields.' },
      { day: 4, title: 'Alleppey Backwaters & Beach Walk', desc: 'Disembark after breakfast. Visit Alleppey Beach and lighthouse, followed by a tranquil evening village canal walk.' },
      { day: 5, title: 'Kochi Heritage Sightseeing & Departure', desc: 'Visit Fort Kochi Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue before transfer to Kochi Airport.' }
    ],
    inclusions: [
      '3 Nights Hill Resort Stay in Munnar + 1 Night Private Houseboat Cruise',
      'All meals on Houseboat (Lunch, Dinner, Breakfast) + Daily Resort Breakfasts',
      'Private AC vehicle for entire trip with experienced driver'
    ],
    exclusions: [
      'Airfare or railway tickets',
      'Camera fees at sightseeing locations',
      'Personal expenses & room service'
    ]
  },
  {
    id: 'bali-bliss',
    title: 'Bali Tropical Bliss & Cultural Heritage',
    location: 'Bali, Indonesia',
    categories: ['beach', 'cultural', 'luxury', 'gastronomy', 'wellness'],
    categoryBadge: 'International',
    tag: 'Top Rated',
    durationDays: 5,
    durationText: '5 Days / 4 Nights',
    priceNumeric: 34999,
    priceFormatted: '₹34,999',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Tegallalang rice terraces and temple in Bali',
    highlights: [
      'Ubud Sacred Monkey Forest & Terraces',
      'Private Beachfront Resort Stay',
      'Sunset Catamaran Cruise & Tanah Lot'
    ],
    overview: 'Immerse yourself in the enchanting culture and breathtaking tropical landscapes of Bali. This carefully designed 5-day tour covers sacred monkey forests, emerald rice terraces, sea temples, and an unforgettable speedboat day excursion to Nusa Penida island.',
    gallery: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    ],
    quickInfo: {
      groupSize: 'Small Group (Max 12)',
      language: 'English / Balinese',
      meals: 'Daily Breakfast + 2 Dinners',
      transport: 'AC Van & Speedboat'
    },
    itinerary: [
      { day: 1, title: 'Arrival in Bali & Jimbaran Sunset Welcome Dinner', desc: 'Arrive at Ngurah Rai International Airport (DPS) where your driver greets you. Transfer to your boutique hotel in Seminyak. In the evening, enjoy a fresh seafood candle-light welcome dinner right on the sands of Jimbaran Bay.' },
      { day: 2, title: 'Sacred Ubud Monkey Forest & Tegallalang Rice Terraces', desc: 'After breakfast, embark on a full-day tour of Ubud. Walk through the lush Sacred Monkey Forest Sanctuary, marvel at the cascading Tegallalang Rice Terraces, try the famous Bali Jungle Swing, and taste authentic Luwak coffee at a traditional plantation.' },
      { day: 3, title: 'Nusa Penida Island Speedboat Day Trip & Snorkeling', desc: 'Board an early morning fast boat to Nusa Penida island. Visit iconic natural landmarks including Kelingking T-Rex Beach, Angel’s Billabong, and Broken Beach. Swim in the crystal-clear waters of Crystal Bay with colorful coral reefs and marine life.' },
      { day: 4, title: 'Tanah Lot Temple Sunset & Balinese Spa Massage', desc: 'Spend a relaxing morning at your leisure or relaxing by the hotel pool. In the afternoon, enjoy a signature Balinese aromatherapy spa treatment followed by a trip to Tanah Lot Temple to watch one of the world\'s most spectacular ocean sunsets.' },
      { day: 5, title: 'Souvenir Art Market & Departure Airport Transfer', desc: 'Enjoy your final breakfast at the resort. Visit the local Kuta Art Market for handmade crafts, wooden souvenirs, and local spices before your driver transfers you back to the airport for your return flight home.' }
    ],
    inclusions: [
      '4 Nights accommodation in 4-Star Resort',
      'Daily buffet breakfast & 2 specialty dinners',
      'Airport pickup & drop by private AC vehicle',
      'Nusa Penida fast boat return tickets',
      'Sightseeing entry tickets & guide'
    ],
    exclusions: [
      'International airfare / flights',
      'Indonesia Visa on Arrival fee ($35 USD)',
      'Personal expenses & laundry services',
      'Travel insurance'
    ]
  },
  {
    id: 'himalayan-adventure',
    title: 'Himalayan Alpine Adventure & Valleys',
    location: 'Himachal, India',
    categories: ['mountain', 'adrenaline'],
    categoryBadge: 'Adventure',
    tag: 'Mountain',
    durationDays: 7,
    durationText: '7 Days / 6 Nights',
    priceNumeric: 28500,
    priceFormatted: '₹28,500',
    image: 'images/Mountain Escapes.jpeg',
    imageAlt: 'Snow-capped Himalayan mountains in Manali',
    highlights: [
      'Solang Valley Guided Trekking',
      'Luxury Camping & Bonfire Nights',
      'All Transfers & Local Guide Included'
    ],
    overview: 'Experience the high-altitude grandeur of the Indian Himalayas. Journey from Shimla\'s colonial ridges to Manali\'s pine valleys, Solang adventure park, Atal Tunnel, and serene mountain villages.',
    gallery: [
      'images/Mountain Escapes.jpeg',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80'
    ],
    quickInfo: {
      groupSize: 'Group Tour (Max 15)',
      language: 'English / Hindi',
      meals: 'Daily Breakfast & Dinner',
      transport: 'Volvo Bus & Private AC Taxi'
    },
    itinerary: [
      { day: 1, title: 'Overnight Journey from Delhi to Shimla', desc: 'Board your luxury AC Volvo bus from Delhi in the evening for an overnight journey to Shimla.' },
      { day: 2, title: 'Shimla Arrival & Mall Road Exploration', desc: 'Check in to your hill resort. Visit Jakhoo Temple, Christ Church, and enjoy evening strolls along Mall Road.' },
      { day: 3, title: 'Kufri Snow Point Excursion & Scenic Drive to Manali', desc: 'Visit Kufri adventure park and apple orchards, followed by a scenic mountain drive along Beas river to Manali.' },
      { day: 4, title: 'Manali Local Sightseeing & Hadimba Temple', desc: 'Explore Hadimba Devi Temple, Vashisht Hot Springs, Jogini Waterfalls, and Old Manali cafes.' },
      { day: 5, title: 'Solang Valley & Atal Tunnel Adventure Day', desc: 'Full day adventure at Solang Valley including paragliding, snow sports, and drive through Atal Tunnel to Sissu.' },
      { day: 6, title: 'Naggar Castle & Heritage Village Walk', desc: 'Visit historical Naggar Castle, Tripura Sundari Temple, and local Himachali handicraft markets.' },
      { day: 7, title: 'Shopping & Evening Bus Transfer back to Delhi', desc: 'Free time for local souvenirs in Manali market. Board evening Volvo bus for return trip to Delhi.' }
    ],
    inclusions: [
      '5 Nights hotel stay in Shimla & Manali',
      'Daily breakfast & dinner at resorts',
      'Delhi - Shimla - Manali - Delhi Volvo tickets',
      'Private vehicle for local sightseeing & Atal Tunnel'
    ],
    exclusions: [
      'Adventure activity charges (paragliding, skiing)',
      'Rohtang Pass permit fee if applicable',
      'Personal expenses & room service'
    ]
  },
  {
    id: 'dubai-luxury',
    title: 'Dubai Desert Luxury & Skyscraper Experience',
    location: 'Dubai, UAE',
    categories: ['luxury', 'cultural', 'wellness', 'gastronomy'],
    categoryBadge: 'Premium',
    tag: 'Luxury',
    durationDays: 6,
    durationText: '6 Days / 5 Nights',
    priceNumeric: 54999,
    priceFormatted: '₹54,999',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Burj Khalifa and luxury skyline in Dubai',
    highlights: [
      'Burj Khalifa 124th Floor Entry',
      'VIP Desert Safari & Dune Bashing',
      'Marina Yacht Sunset Dinner'
    ],
    overview: 'Experience the ultimate luxury getaway in the metropolis of Dubai. From the world\'s tallest skyscraper to VIP red dune desert safaris and Marina yacht cruises.',
    gallery: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80'
    ],
    quickInfo: {
      groupSize: 'Small Group / Private',
      language: 'English / Arabic',
      meals: 'Daily Breakfast + 2 Dinners',
      transport: 'Luxury AC Vehicle'
    },
    itinerary: [
      { day: 1, title: 'Arrival in Dubai & Marina Dhow Cruise Dinner', desc: 'Private airport transfer to your 5-star hotel. Evening luxury Dhow dinner cruise along Dubai Marina.' },
      { day: 2, title: 'Half-Day Dubai City Tour & Burj Khalifa At The Top', desc: 'Guided tour of Dubai Frame, Jumeirah Mosque, Burj Al Arab photo stop, and entry to Burj Khalifa 124th floor.' },
      { day: 3, title: 'Desert Safari with Dune Bashing & BBQ Dinner', desc: 'Afternoon 4x4 Land Cruiser desert safari, sandboarding, camel rides, and Arabic tanoura show with BBQ dinner.' },
      { day: 4, title: 'Abu Dhabi Day Tour & Sheikh Zayed Grand Mosque', desc: 'Excursion to Abu Dhabi visiting Sheikh Zayed Grand Mosque, Corniche, and Louvre Abu Dhabi museum.' },
      { day: 5, title: 'Dubai Mall & Palm Jumeirah Monorail Experience', desc: 'Visit Dubai Aquarium & Underwater Zoo, Palm Jumeirah Atlantis, and evening Dubai Fountain show.' },
      { day: 6, title: 'Gold Souk Shopping & Departure Transfer', desc: 'Explore historic Deira Gold & Spice Souks before private luxury transfer to Dubai International Airport.' }
    ],
    inclusions: [
      '5 Nights stay in 5-Star Hotel in Downtown Dubai',
      'Daily buffet breakfast & 2 luxury dinner experiences',
      'Burj Khalifa 124th floor non-prime time tickets',
      'Desert Safari & Dhow Cruise included'
    ],
    exclusions: [
      'International flights & UAE Tourist Visa',
      'Tourism Dirham tax payable directly at hotel',
      'Personal shopping & discretionary tips'
    ]
  },
  {
    id: 'swiss-alps',
    title: 'Swiss Alps Scenic Glacier Train & Lake Cruise',
    location: 'Switzerland',
    categories: ['mountain', 'luxury', 'cultural', 'gastronomy', 'adrenaline'],
    categoryBadge: 'Popular',
    tag: 'Top Rated',
    durationDays: 8,
    durationText: '8 Days / 7 Nights',
    priceNumeric: 115000,
    priceFormatted: '₹1,15,000',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Swiss Alps Peaks',
    highlights: [
      'Bernina Express Scenic Train Ride',
      'Jungfraujoch Top of Europe Excursion',
      'Lake Geneva Steamboat Tour'
    ],
    overview: 'Embark on a fairytale journey through Switzerland. Ride panoramic mountain trains past snow-covered peaks, visit alpine villages, and cruise pristine lakes.',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80'
    ],
    quickInfo: {
      groupSize: 'Small Group (Max 10)',
      language: 'English / German / French',
      meals: 'Daily Breakfast',
      transport: 'Swiss Travel Pass (First Class Train)'
    },
    itinerary: [
      { day: 1, title: 'Arrival in Zurich & Old Town Walk', desc: 'Arrive at Zurich Airport. Check in to hotel and stroll along Bahnhofstrasse and Lake Zurich shore.' },
      { day: 2, title: 'Lucerne & Mount Titlis Cable Car Excursion', desc: 'Train to Lucerne, Chapel Bridge tour, and revolving Rotair cable car up Mount Titlis snow glacier.' },
      { day: 3, title: 'Interlaken & Grindelwald First Walk', desc: 'Transfer to Interlaken surrounded by Eiger, Mönch and Jungfrau mountains. Explore Grindelwald Cliff Walk.' },
      { day: 4, title: 'Jungfraujoch Top of Europe Day Trip', desc: 'Eiger Express cogwheel train to Jungfraujoch (3,454m). Visit Ice Palace and Sphinx Observatory.' },
      { day: 5, title: 'GoldenPass Panoramic Express to Montreux', desc: 'Scenic train journey to Montreux on Lake Geneva. Visit Chillon Castle on the water.' },
      { day: 6, title: 'Zermatt & Matterhorn Viewpoint', desc: 'Travel to car-free alpine village of Zermatt. Gornergrat Railway trip for iconic Matterhorn views.' },
      { day: 7, title: 'Glacier Express Scenic Train to St. Moritz', desc: 'Full-day ride on the world\'s slowest express train crossing 291 bridges and 91 tunnels.' },
      { day: 8, title: 'Return to Zurich & Airport Departure', desc: 'Morning chocolate tasting tour in Zurich before transfer to Zurich Airport for departure.' }
    ],
    inclusions: [
      '7 Nights stay in 4-Star Alpine Hotels',
      'Daily buffet breakfast',
      '8-Day Consecutive First Class Swiss Travel Pass',
      'Jungfraujoch & Titlis excursion tickets'
    ],
    exclusions: [
      'International flights & Schengen Visa fees',
      'Lunches & dinners',
      'Travel insurance'
    ]
  }
];

// Global Filter State
let currentSelectedCategory = 'all';
let currentSearchText = '';

document.addEventListener('DOMContentLoaded', () => {
  // 0. Single Source of Truth Dynamic Cards Renderers
  renderAllDestinations();
  renderAllTours();

  // 1. Dynamic Details Page Loaders
  initDestinationDetailsPage();
  initTourDetailsPage();

  // 2. Sticky Glassmorphism Navbar Scroll Controller
  initNavbarScroll();
  
  // 3. Active Navigation Link Highlighting
  setActiveNavLink();
  
  // 4. Floating Search Form Handler (Home Page)
  initHeroSearchForm();

  // 5. Live Search Input & URL Query Filter for Destinations Page
  initLiveDestinationSearch();
  
  // 6. Category & Tour Filter Systems
  initFilterSystem();
  initTourFilters();

  // 7. Contact Form Validation & Success Modal
  initContactForm();

  // 8. Booking Form Validation & Success Modal
  initBookingForm();

  // 9. Newsletter Form Listener
  initNewsletterForm();
});

/**
 * Renders all Destination Cards across index.html and destinations.html
 * from the master DESTINATIONS_DATA array (Single Source of Truth)
 */
function renderAllDestinations() {
  const catalogGrid = document.getElementById('destinationsGrid');
  const spotlightGrid = document.getElementById('spotlightGrid');

  if (catalogGrid) {
    catalogGrid.innerHTML = `
      <div id="noResultsMessage" class="col-12 text-center py-5 d-none">
        <div class="p-5 bg-white rounded-4 border shadow-sm max-w-600 mx-auto">
          <i class="bi bi-search fs-1 text-muted d-block mb-3"></i>
          <h4 class="font-serif mb-2">No destinations found</h4>
          <p class="text-muted fs-6 mb-0">We couldn't find any destinations matching your search or category filter. Try searching for "Thanjavur", "Madurai", "Munnar", "Kanyakumari", "Ooty", "Goa", or "Bali".</p>
        </div>
      </div>
    `;

    DESTINATIONS_DATA.forEach(dest => {
      const cardCol = document.createElement('div');
      cardCol.className = 'col-lg-4 col-md-6 filterable-item';
      cardCol.setAttribute('data-category', dest.category);

      const fallbackUrl = dest.fallbackImage || dest.image;

      cardCol.innerHTML = `
        <div class="destination-card">
          <div class="destination-img-wrapper">
            <img src="${dest.image}" alt="${dest.alt}" onerror="this.onerror=null; this.src='${fallbackUrl}';">
            <span class="badge-location"><i class="bi bi-geo-alt-fill"></i> ${dest.location.split(',')[0]}</span>
            <span class="badge-rating"><i class="bi bi-star-fill"></i> ${dest.badge}</span>
          </div>
          <div class="destination-card-body">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            <div class="destination-card-footer">
              <div class="price-tag">
                <span class="label">Sample Package</span>
                <span class="amount">${dest.price}</span>
              </div>
              <a href="destination-details.html?name=${encodeURIComponent(dest.id)}" class="btn btn-sm btn-vy-primary">Explore Destination</a>
            </div>
          </div>
        </div>
      `;
      catalogGrid.appendChild(cardCol);
    });
  }

  if (spotlightGrid) {
    spotlightGrid.innerHTML = '';
    const spotlightIds = ['madurai', 'munnar', 'thanjavur', 'kanyakumari'];
    const spotlightItems = DESTINATIONS_DATA.filter(d => spotlightIds.includes(d.id));

    spotlightItems.forEach(dest => {
      const cardCol = document.createElement('div');
      cardCol.className = 'col-lg-3 col-md-6 filterable-item';
      cardCol.setAttribute('data-category', dest.category);

      const fallbackUrl = dest.fallbackImage || dest.image;

      cardCol.innerHTML = `
        <div class="destination-card">
          <div class="destination-img-wrapper">
            <img src="${dest.image}" alt="${dest.alt}" onerror="this.onerror=null; this.src='${fallbackUrl}';">
            <span class="badge-location"><i class="bi bi-geo-alt-fill"></i> ${dest.location.split(',')[0]}</span>
            <span class="badge-rating"><i class="bi bi-star-fill text-warning"></i> ${dest.badge}</span>
          </div>
          <div class="destination-card-body">
            <h3>${dest.name}</h3>
            <p>${dest.description}</p>
            <div class="destination-card-footer">
              <div class="price-tag">
                <span class="label">Sample Package</span>
                <span class="amount">${dest.price}</span>
              </div>
              <a href="destination-details.html?name=${encodeURIComponent(dest.id)}" class="btn btn-sm btn-vy-primary">Explore</a>
            </div>
          </div>
        </div>
      `;
      spotlightGrid.appendChild(cardCol);
    });
  }
}

/**
 * Dynamic Destination Details Page Loader (destination-details.html)
 */
function initDestinationDetailsPage() {
  const destTitleEl = document.getElementById('destTitle');
  if (!destTitleEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const destParam = (urlParams.get('name') || urlParams.get('dest') || 'delhi').toLowerCase().trim();

  const destData = DESTINATIONS_DATA.find(d => d.id === destParam || d.name.toLowerCase().includes(destParam)) || DESTINATIONS_DATA.find(d => d.id === 'delhi');

  if (destData) {
    destTitleEl.textContent = destData.name;

    const breadcrumbEl = document.getElementById('breadcrumbDestName');
    if (breadcrumbEl) breadcrumbEl.textContent = `${destData.name}, ${destData.location}`;

    const badgeEl = document.getElementById('destRegionBadge');
    if (badgeEl) badgeEl.innerHTML = `<i class="bi bi-geo-alt-fill me-1"></i> ${destData.location}`;

    const priceEl = document.getElementById('destPrice');
    if (priceEl) priceEl.textContent = destData.price;

    const mainImgEl = document.getElementById('destMainImg');
    if (mainImgEl) {
      mainImgEl.src = destData.image;
      mainImgEl.alt = destData.alt;
    }

    const descLeadEl = document.getElementById('destDescLead');
    if (descLeadEl) descLeadEl.textContent = destData.description;
  }
}

/**
 * Handles Navbar Background & Shadow Transition on Scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-voyago');
  if (!navbar) return;

  if (navbar.classList.contains('navbar-solid')) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);
}

/**
 * Highlights Active Navigation Link based on current page URL
 */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * Floating Search Panel Form Handler (Home Page)
 * Validates search input and redirects to destinations.html?search=<encoded-search-term>
 */
function initHeroSearchForm() {
  const searchForm = document.getElementById('heroSearchForm');
  if (!searchForm) return;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const destinationInput = document.getElementById('searchDestination');
    const destination = destinationInput ? destinationInput.value.trim() : '';

    if (!destination) {
      searchForm.classList.add('was-validated');
      if (destinationInput) destinationInput.focus();
      return;
    }

    searchForm.classList.remove('was-validated');
    window.location.href = `destinations.html?search=${encodeURIComponent(destination)}`;
  });
}

/**
 * Applies Combined Filtering (Category Chips + Live Search Input)
 * Filters all .filterable-item elements across destinations.html
 */
function applyCombinedFilters() {
  const filterableItems = document.querySelectorAll('.filterable-item');
  const noResultsMsg = document.getElementById('noResultsMessage');
  
  let visibleCount = 0;
  const term = currentSearchText.toLowerCase().trim();

  filterableItems.forEach(item => {
    const cardCategoryAttr = item.getAttribute('data-category') || '';
    const categories = cardCategoryAttr.toLowerCase().split(' ');

    const title = item.querySelector('h3')?.textContent.toLowerCase() || '';
    const desc = item.querySelector('p')?.textContent.toLowerCase() || '';
    const location = item.querySelector('.badge-location')?.textContent.toLowerCase() || '';

    // Category matching check
    const selectedCat = currentSelectedCategory.toLowerCase().trim();
    const categoryMatches = (
      selectedCat === 'all' ||
      categories.includes(selectedCat) ||
      cardCategoryAttr.toLowerCase().includes(selectedCat) ||
      (selectedCat === 'south-india' && (cardCategoryAttr.toLowerCase().includes('tamil-nadu') || cardCategoryAttr.toLowerCase().includes('kerala')))
    );

    // Search text matching check (against name AND description AND location AND keywords)
    const searchMatches = !term || (
      title.includes(term) ||
      desc.includes(term) ||
      location.includes(term) ||
      categories.some(c => c.includes(term)) ||
      (term.includes('taj') && title.includes('delhi')) ||
      (term.includes('agra') && title.includes('delhi'))
    );

    if (categoryMatches && searchMatches) {
      item.style.display = 'block';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });

  if (noResultsMsg) {
    if (visibleCount === 0) {
      noResultsMsg.classList.remove('d-none');
    } else {
      noResultsMsg.classList.add('d-none');
    }
  }
}

/**
 * Live Text Search Filter for Destinations Page (input & keyup events)
 */
function initLiveDestinationSearch() {
  const searchInput = document.getElementById('destinationSearchInput');
  if (!searchInput) return;

  // Read URL parameters for "search" on load
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get('search');

  if (searchParam) {
    searchInput.value = searchParam;
    currentSearchText = searchParam;
  }

  const handleSearchInput = (e) => {
    currentSearchText = e.target.value;
    applyCombinedFilters();
  };

  searchInput.addEventListener('input', handleSearchInput);
  searchInput.addEventListener('keyup', handleSearchInput);

  if (searchParam) {
    applyCombinedFilters();
  }
}

/**
 * Category Filter Buttons Handler (All, Tamil Nadu, Kerala, Beach, Mountain, Cultural, Luxury)
 */
function initFilterSystem() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  // Read URL query parameter on page load
  const urlParams = new URLSearchParams(window.location.search);
  const presetCategory = urlParams.get('category') || urlParams.get('filter');
  if (presetCategory) {
    currentSelectedCategory = presetCategory;
  }

  // Sync button active styles
  filterBtns.forEach(btn => {
    const filterValue = btn.getAttribute('data-filter');
    if (filterValue === currentSelectedCategory) {
      btn.classList.add('active', 'btn-vy-primary');
      btn.classList.remove('btn-vy-outline-dark');
    } else {
      btn.classList.remove('active', 'btn-vy-primary');
      btn.classList.add('btn-vy-outline-dark');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const clickedCategory = btn.getAttribute('data-filter');
      currentSelectedCategory = clickedCategory;

      // Update button active styles
      filterBtns.forEach(b => {
        if (b.getAttribute('data-filter') === clickedCategory) {
          b.classList.add('active', 'btn-vy-primary');
          b.classList.remove('btn-vy-outline-dark');
        } else {
          b.classList.remove('active', 'btn-vy-primary');
          b.classList.add('btn-vy-outline-dark');
        }
      });

      // Update URL query parameter
      const url = new URL(window.location);
      if (clickedCategory === 'all') {
        url.searchParams.delete('category');
        url.searchParams.delete('filter');
      } else {
        url.searchParams.set('category', clickedCategory);
      }
      window.history.pushState({}, '', url);

      // Re-filter cards
      applyCombinedFilters();
    });
  });

  applyCombinedFilters();
}

/**
 * Contact Form Validation & Success Modal Handler
 */
function initContactForm() {
  const contactForm = document.getElementById('voyagoContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      e.stopPropagation();
      contactForm.classList.add('was-validated');
      return;
    }

    const modalEl = document.getElementById('contactSuccessModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }

    contactForm.reset();
    contactForm.classList.remove('was-validated');
  });
}

/**
 * Booking Form Handler & Success Modal Preview
 */
function initBookingForm() {
  const bookingForm = document.getElementById('voyagoBookingForm');
  if (!bookingForm) return;

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!bookingForm.checkValidity()) {
      e.stopPropagation();
      bookingForm.classList.add('was-validated');
      return;
    }

    const fullName = document.getElementById('bookingName')?.value.trim() || 'Traveler';
    const destination = document.getElementById('bookingDestination')?.value || 'Destination';
    const tourPackage = document.getElementById('bookingPackage')?.value || 'Standard Package';
    const travelDate = document.getElementById('bookingDate')?.value || 'Selected Date';
    const travelers = document.getElementById('bookingTravelers')?.value || '1';

    const modalName = document.getElementById('modalTravelerName');
    const modalSummary = document.getElementById('modalTourSummary');
    
    if (modalName) modalName.textContent = fullName;
    if (modalSummary) {
      modalSummary.textContent = `${tourPackage} (${destination}) for ${travelers} guest(s) on ${travelDate}.`;
    }

    const modalEl = document.getElementById('bookingSuccessModal');
    if (modalEl && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }

    bookingForm.reset();
    bookingForm.classList.remove('was-validated');
  });
}

/**
 * Newsletter Form Handler
 */
function initNewsletterForm() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');

      if (!emailInput || !emailInput.value) return;

      const originalBtnText = btn ? btn.innerHTML : 'Subscribe';
      if (btn) {
        btn.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>Subscribed!';
        btn.classList.replace('btn-vy-accent', 'btn-success');
      }

      emailInput.value = '';

      setTimeout(() => {
        if (btn) {
          btn.innerHTML = originalBtnText;
          btn.classList.replace('btn-success', 'btn-vy-accent');
        }
      }, 3000);
    });
  });
}

/**
 * Renders Tour Cards on tours.html from TOURS_DATA array
 */
function renderAllTours(toursList = TOURS_DATA) {
  const toursGrid = document.getElementById('toursGrid');
  if (!toursGrid) return;

  toursGrid.innerHTML = '';

  if (toursList.length === 0) {
    toursGrid.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="p-5 bg-white rounded-4 border shadow-sm max-w-600 mx-auto">
          <i class="bi bi-search fs-1 text-muted d-block mb-3"></i>
          <h4 class="font-serif mb-2">No tour packages found</h4>
          <p class="text-muted fs-6 mb-0">No packages match your selected filter criteria. Try adjusting your duration, category checkboxes, or budget slider.</p>
        </div>
      </div>
    `;
    return;
  }

  toursList.forEach(tour => {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-6';

    const highlightsHtml = tour.highlights.map(h => `<li><i class="bi bi-check2-circle"></i> ${h}</li>`).join('');

    cardCol.innerHTML = `
      <div class="tour-card">
        <div class="tour-img-wrapper">
          <img src="${tour.image}" alt="${tour.imageAlt}" onerror="this.onerror=null; this.src='images/Munnar.webp';">
          <span class="tour-badge-offer">${tour.categoryBadge}</span>
          <span class="tour-badge-duration"><i class="bi bi-clock"></i> ${tour.durationText}</span>
        </div>
        <div class="tour-card-body">
          <div class="tour-meta">
            <span><i class="bi bi-geo-alt text-success"></i> ${tour.location}</span>
            <span><i class="bi bi-star-fill text-warning"></i> ${tour.tag}</span>
          </div>
          <h3 class="tour-title">${tour.title}</h3>
          <ul class="tour-highlights-list">
            ${highlightsHtml}
          </ul>
          <div class="destination-card-footer">
            <div class="price-tag">
              <span class="label">Sample Price</span>
              <span class="amount">${tour.priceFormatted}</span>
            </div>
            <a href="tour-details.html?id=${encodeURIComponent(tour.id)}" class="btn btn-sm btn-vy-primary">View Details</a>
          </div>
        </div>
      </div>
    `;

    toursGrid.appendChild(cardCol);
  });
}

/**
 * Dynamic Tour Details Page Loader (tour-details.html)
 */
function initTourDetailsPage() {
  const tourTitleEl = document.getElementById('tourTitle');
  if (!tourTitleEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const tourParam = (urlParams.get('id') || urlParams.get('tour') || urlParams.get('package') || 'bali-bliss').toLowerCase().trim();

  const tourData = TOURS_DATA.find(t => t.id === tourParam || t.id.includes(tourParam) || t.title.toLowerCase().includes(tourParam)) || TOURS_DATA.find(t => t.id === 'bali-bliss');

  if (tourData) {
    document.title = `${tourData.title} — VOYAGO`;

    const breadcrumbEl = document.getElementById('breadcrumbTourTitle');
    if (breadcrumbEl) breadcrumbEl.textContent = tourData.title;

    tourTitleEl.textContent = tourData.title;

    const badgeEl = document.getElementById('tourDurationBadge');
    if (badgeEl) badgeEl.innerHTML = `<i class="bi bi-clock me-1"></i> ${tourData.durationText}`;

    const metaEl = document.getElementById('tourMeta');
    if (metaEl) metaEl.innerHTML = `<i class="bi bi-geo-alt-fill text-success me-1"></i> ${tourData.location} &nbsp;|&nbsp; <i class="bi bi-star-fill text-warning me-1"></i> ${tourData.tag}`;

    const priceMainEl = document.getElementById('tourPriceMain');
    if (priceMainEl) priceMainEl.textContent = tourData.priceFormatted;

    const priceSidebarEl = document.getElementById('tourPriceSidebar');
    if (priceSidebarEl) priceSidebarEl.textContent = tourData.priceFormatted;

    const mainImgEl = document.getElementById('tourMainImg');
    if (mainImgEl) {
      mainImgEl.src = tourData.gallery[0] || tourData.image;
      mainImgEl.alt = tourData.title;
    }

    const thumb1El = document.getElementById('tourThumbImg1');
    if (thumb1El) {
      thumb1El.src = tourData.gallery[1] || tourData.image;
      thumb1El.alt = `${tourData.title} view 1`;
    }

    const thumb2El = document.getElementById('tourThumbImg2');
    if (thumb2El) {
      thumb2El.src = tourData.gallery[2] || tourData.image;
      thumb2El.alt = `${tourData.title} view 2`;
    }

    const groupEl = document.getElementById('tourGroupSize');
    if (groupEl) groupEl.textContent = tourData.quickInfo.groupSize;

    const langEl = document.getElementById('tourLanguage');
    if (langEl) langEl.textContent = tourData.quickInfo.language;

    const mealsEl = document.getElementById('tourMeals');
    if (mealsEl) mealsEl.textContent = tourData.quickInfo.meals;

    const transEl = document.getElementById('tourTransport');
    if (transEl) transEl.textContent = tourData.quickInfo.transport;

    const overviewEl = document.getElementById('tourOverview');
    if (overviewEl) overviewEl.textContent = tourData.overview;

    const accordionContainer = document.getElementById('tourItineraryAccordion');
    if (accordionContainer && tourData.itinerary) {
      accordionContainer.innerHTML = tourData.itinerary.map((item, index) => {
        const isFirst = index === 0;
        const collapseId = `collapseItem${index + 1}`;
        const headingId = `headingItem${index + 1}`;

        return `
          <div class="accordion-item border rounded-3 mb-3">
            <h2 class="accordion-header" id="${headingId}">
              <button class="accordion-button ${isFirst ? '' : 'collapsed'} fw-bold fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? 'true' : 'false'}" aria-controls="${collapseId}">
                <span class="badge bg-success me-3">Day ${item.day}</span> ${item.title}
              </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#tourItineraryAccordion">
              <div class="accordion-body text-muted fs-6">
                ${item.desc}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    const incListEl = document.getElementById('tourInclusions');
    if (incListEl && tourData.inclusions) {
      incListEl.innerHTML = tourData.inclusions.map(inc => `<li class="mb-2"><i class="bi bi-check2 text-success me-2 fw-bold"></i> ${inc}</li>`).join('');
    }

    const excListEl = document.getElementById('tourExclusions');
    if (excListEl && tourData.exclusions) {
      excListEl.innerHTML = tourData.exclusions.map(exc => `<li class="mb-2"><i class="bi bi-x text-danger me-2 fw-bold"></i> ${exc}</li>`).join('');
    }

    const pkgInputEl = document.getElementById('tourPackageInput');
    if (pkgInputEl) pkgInputEl.value = tourData.title;
  }
}

/**
 * Filter System for Tours Page (tours.html)
 */
function initTourFilters() {
  const toursGrid = document.getElementById('toursGrid');
  if (!toursGrid) return;

  const catAll = document.getElementById('catAll');
  const catSouthIndia = document.getElementById('catSouthIndia');
  const catBeach = document.getElementById('catBeach');
  const catMountain = document.getElementById('catMountain');
  const catCultural = document.getElementById('catCultural');
  const catLuxury = document.getElementById('catLuxury');

  const categoryBoxes = [catSouthIndia, catBeach, catMountain, catCultural, catLuxury].filter(Boolean);

  const durShort = document.getElementById('durShort');
  const durMed = document.getElementById('durMed');
  const durLong = document.getElementById('durLong');

  const durationBoxes = [durShort, durMed, durLong].filter(Boolean);

  const priceRange = document.getElementById('priceRange');
  const maxPriceDisplay = document.getElementById('maxPriceDisplay');
  const btnApply = document.getElementById('btnApplyTourFilters');

  // 0. Read URL Query Parameter for pre-filtering (e.g. tours.html?category=gastronomy)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = (urlParams.get('category') || urlParams.get('filter') || '').toLowerCase().trim();

  if (catParam && catParam !== 'all') {
    if (catAll) catAll.checked = false;

    if (catParam === 'gastronomy' || catParam === 'cultural') {
      if (catCultural) catCultural.checked = true;
    } else if (catParam === 'wildlife' || catParam === 'nature' || catParam === 'south-india') {
      if (catSouthIndia) catSouthIndia.checked = true;
    } else if (catParam === 'adrenaline' || catParam === 'mountain') {
      if (catMountain) catMountain.checked = true;
    } else if (catParam === 'wellness' || catParam === 'rejuvenation' || catParam === 'luxury') {
      if (catLuxury) catLuxury.checked = true;
    } else if (catParam === 'beach') {
      if (catBeach) catBeach.checked = true;
    }
  }

  // 1. "All Categories" checkbox logic
  if (catAll) {
    catAll.addEventListener('change', () => {
      if (catAll.checked) {
        categoryBoxes.forEach(box => box.checked = false);
      }
      applyTourFilters();
    });
  }

  categoryBoxes.forEach(box => {
    box.addEventListener('change', () => {
      if (box.checked && catAll) {
        catAll.checked = false;
      }
      const anyChecked = categoryBoxes.some(b => b.checked);
      if (!anyChecked && catAll) {
        catAll.checked = true;
      }
      applyTourFilters();
    });
  });

  durationBoxes.forEach(box => {
    box.addEventListener('change', () => {
      applyTourFilters();
    });
  });

  // 2. Budget range slider live text format
  if (priceRange) {
    const updatePriceLabel = () => {
      const val = Number(priceRange.value);
      if (maxPriceDisplay) {
        if (val >= 100000) {
          maxPriceDisplay.textContent = `Up to ₹${(val / 100000).toFixed(1).replace('.0', '')}L`;
        } else {
          maxPriceDisplay.textContent = `Up to ₹${(val / 1000).toFixed(0)}k`;
        }
      }
    };

    updatePriceLabel();

    priceRange.addEventListener('input', () => {
      updatePriceLabel();
      applyTourFilters();
    });
    priceRange.addEventListener('change', () => {
      updatePriceLabel();
      applyTourFilters();
    });
  }

  // 3. Apply Filters Button Click Handler
  if (btnApply) {
    btnApply.addEventListener('click', (e) => {
      e.preventDefault();
      applyTourFilters();
    });
  }

  function applyTourFilters() {
    // Determine selected categories
    let selectedCats = [];
    if (catAll && catAll.checked) {
      selectedCats = [];
    } else {
      if (catSouthIndia && catSouthIndia.checked) selectedCats.push('south-india', 'wildlife');
      if (catBeach && catBeach.checked) selectedCats.push('beach');
      if (catMountain && catMountain.checked) selectedCats.push('mountain', 'adrenaline');
      if (catCultural && catCultural.checked) selectedCats.push('cultural', 'gastronomy');
      if (catLuxury && catLuxury.checked) selectedCats.push('luxury', 'wellness');
    }

    // Determine selected durations
    let selectedDurs = [];
    if (durShort && durShort.checked) selectedDurs.push('short');
    if (durMed && durMed.checked) selectedDurs.push('med');
    if (durLong && durLong.checked) selectedDurs.push('long');

    // Determine max price
    const maxPrice = priceRange ? Number(priceRange.value) : 150000;

    const filtered = TOURS_DATA.filter(tour => {
      // Category Match
      const catMatch = selectedCats.length === 0 || tour.categories.some(c => selectedCats.includes(c));

      // Duration Match
      const durMatch = selectedDurs.length === 0 || selectedDurs.some(d => {
        if (d === 'short') return tour.durationDays >= 3 && tour.durationDays <= 5;
        if (d === 'med') return tour.durationDays >= 6 && tour.durationDays <= 8;
        if (d === 'long') return tour.durationDays >= 9;
        return true;
      });

      // Price Match
      const priceMatch = tour.priceNumeric <= maxPrice;

      return catMatch && durMatch && priceMatch;
    });

    renderAllTours(filtered);
  }

  // Initial execution to honor URL query params on load
  applyTourFilters();
}

