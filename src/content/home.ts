// All copy and media for the home page. Edit text here, not in the components.
// Anything marked "TODO: confirm" is a placeholder that needs real Belle Stays details.

import {
  BathIcon,
  BedDoubleIcon,
  CookingPotIcon,
  HeadsetIcon,
  KeyRoundIcon,
  WifiIcon,
} from "lucide-react"

// The company's business office. It is NOT a rental property: never show it as a
// place to stay or link it from booking UI.
const officeAddress = ["2667 NE 205th Avenue", "Fairview, OR 97024"] as const

export const site = {
  name: "Belle Stays",
  description:
    "Belle Stays is a short-term accommodation and hosting company in the Portland, Oregon area. We prepare, host, and look after comfortable, stylish stays for vacations, business trips, and weekend getaways.",
  email: "info@bellestays.net",
  officeAddress,
  officeMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress.join(", "))}`,
}

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stays", href: "#stays" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
] as const

// TODO: confirm social profile links
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com", icon: "/icons/social-instagram.svg" },
  { label: "Facebook", href: "https://www.facebook.com", icon: "/icons/social-facebook.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "/icons/social-linkedin.svg" },
  { label: "X", href: "https://x.com", icon: "/icons/social-x.svg" },
  { label: "YouTube", href: "https://www.youtube.com", icon: "/icons/social-youtube.svg" },
]

export const hero = {
  title: ["Stylish Stays,", "Made to Feel *Like Home*"],
  location: "Portland, Oregon area",
  pitch: "Comfortable, stylish stays for vacations, business trips, and weekend getaways.",
  // Set to a YouTube/Vimeo embed URL to turn the photo card into a video player.
  videoUrl: "",
}

export const stats = {
  statement:
    "Welcoming spaces and attentive service, so every guest feels at home from the moment they arrive.",
  // TODO: confirm these figures
  items: [
    { prefix: "", value: "4.9", unit: "/ 5", label: "Average guest rating" },
    { prefix: "", value: "1,200", unit: "+", label: "Stays hosted" },
    { prefix: "", value: "24", unit: "/ 7", label: "Guest support" },
    { prefix: "from", value: "3", unit: "pm", label: "Self check-in" },
  ],
}

export const host = {
  name: "Belle Stays Guest Team",
  role: "Your hosts",
  // TODO: confirm Instagram link and photo
  instagram: "https://www.instagram.com",
  photo: "/images/intro/agent.jpg",
}

export const intro = {
  eyebrow: "About Belle Stays",
  title: "Welcoming spaces, *attentive service*",
  body: "We host and manage short-term stays around Portland, taking care of cleaning, check-in, and guest support, so you can settle in and enjoy the area like a local.",
}

export type Hotspot = { x: number; y: number; title: string; text: string }

export const rooms: {
  name: string
  image: string
  alt: string
  hotspots: Hotspot[]
}[] = [
  {
    name: "Living Room",
    image: "/images/strip/grid-04.jpg",
    alt: "Bright living room with a large sofa and city views",
    hotspots: [
      { x: 30, y: 62, title: "Room to unwind", text: "Generous seating for movie nights, catching up, or doing nothing at all." },
      { x: 72, y: 30, title: "Natural light", text: "Big windows keep the space bright from morning coffee to sunset." },
    ],
  },
  {
    name: "Bedroom",
    image: "/images/interior/bedroom.jpg",
    alt: "Calm bedroom with a fireplace, a freestanding bath and a view",
    hotspots: [
      { x: 17, y: 36, title: "Cozy evenings", text: "Thoughtful touches that make a short stay feel like a retreat." },
      { x: 60, y: 65, title: "Hotel-quality bedding", text: "Fresh, crisp linens and plush pillows for a great night's sleep." },
    ],
  },
  {
    name: "Bathroom",
    image: "/images/strip/grid-03.jpg",
    alt: "Bright bathroom with a freestanding tub and timber vanity",
    hotspots: [
      { x: 80, y: 62, title: "Fresh towels & toiletries", text: "Everything you need is waiting for you when you arrive." },
    ],
  },
  {
    name: "Kitchen",
    image: "/images/strip/grid-02.jpg",
    alt: "Modern kitchen with a marble island",
    hotspots: [
      { x: 45, y: 58, title: "Fully equipped kitchen", text: "Cookware, utensils, and coffee essentials for meals in." },
    ],
  },
  {
    name: "Terrace",
    image: "/images/amenities/lounge.jpg",
    alt: "Outdoor terrace lounge at sunset",
    hotspots: [
      { x: 42, y: 70, title: "Outdoor space", text: "A spot to slow down with a morning coffee or an evening drink." },
    ],
  },
]

export const included = {
  eyebrow: "Our services",
  title: "Every stay, *thoughtfully* prepared",
  body: "From the moment you book to the moment you check out, we take care of the details so you can relax and enjoy your time away.",
  items: [
    { icon: KeyRoundIcon, label: "Easy self check-in" },
    { icon: BedDoubleIcon, label: "Fresh linens every stay" },
    { icon: HeadsetIcon, label: "Responsive guest support" },
  ],
}

export const features = [
  {
    title: "Fast Wi-Fi",
    text: "Reliable high-speed internet for streaming, video calls, and working on the go.",
    icon: WifiIcon,
  },
  {
    title: "Self check-in",
    text: "Arrive on your schedule with simple, contactless check-in instructions.",
    icon: KeyRoundIcon,
  },
  {
    title: "Fully equipped kitchens",
    text: "Cook a favorite meal or grab breakfast at home with everything you need.",
    icon: CookingPotIcon,
  },
  {
    title: "Fresh linens & toiletries",
    text: "Crisp bedding, soft towels, and bathroom essentials ready for every guest.",
    icon: BathIcon,
  },
]

export const stayTypes = [
  { name: "Studios", option: "Studio", sleeps: "Up to 2 guests", image: "/images/stays/studio.jpg" },
  { name: "Apartments", option: "Apartment", sleeps: "Up to 4 guests", image: "/images/stays/apartment.jpg" },
  { name: "Family Homes", option: "Family home", sleeps: "Up to 6 guests", image: "/images/stays/family-home.jpg" },
]

export type Listing = {
  name: string // shown on the card and sent with the booking request
  detail: string // e.g. "Sleeps 4 · 2 beds · 2 baths"
  price: string // e.g. "From $180 / night" or "Rates on request"
  image: string
}

// Real rental listings go here. While this is empty, the booking section offers
// the stay types above instead.
export const listings: Listing[] = []

export const booking = {
  eyebrow: "Booking & availability",
  title: "Check availability for *your dates*",
  body: "Choose a stay and your dates. We'll confirm availability and rates, usually within a day.",
  formTitle: "Send a booking request",
}

// What the booking section lists: real listings when there are any, stay types until then.
export const bookableStays: Listing[] = listings.length
  ? listings
  : stayTypes.map((type) => ({
      name: type.option,
      detail: type.sleeps,
      price: "Rates on request",
      image: type.image,
    }))

// TODO: confirm which of these your properties offer
export const amenities = [
  { eyebrow: "Unwind", title: "Sunset *Terraces*", image: "/images/amenities/lounge.jpg", icon: "/icons/amenity-lounge.svg" },
  { eyebrow: "Relax", title: "Pool *Days*", image: "/images/amenities/pool.jpg", icon: "/icons/amenity-pool.svg" },
  { eyebrow: "Stay active", title: "Fitness on *Your Schedule*", image: "/images/amenities/fitness.jpg", icon: "/icons/amenity-fitness.svg" },
  { eyebrow: "Step outside", title: "Green Spaces *Nearby*", image: "/images/amenities/gardens.jpg", icon: "/icons/amenity-gardens.svg" },
]

// The office map. Position from OpenStreetMap.
export const office = {
  eyebrow: "Our office",
  title: "Where the Belle Stays *team works*",
  body: "This is our business office, not a place to stay. To find accommodation, see",
  bodyLink: "Booking & availability",
  name: "Belle Stays Office",
  note: "Business office, not a rental",
  position: [45.5423, -122.4516] as [number, number],
}

export const journey = {
  title: "Easy from the first search to the *moment you arrive*",
  steps: [
    {
      step: "Step 01",
      title: "Discover",
      text: "Browse our stays and find the space that fits your trip, whether it's a weekend away or a work week in the city.",
      icon: "/icons/step-discover.svg",
    },
    {
      step: "Step 02",
      title: "Book",
      text: "Send a booking request with your dates and guests, and we'll confirm the details quickly.",
      icon: "/icons/step-reserve.svg",
    },
    {
      step: "Step 03",
      title: "Check In",
      text: "Arrive, let yourself in, and settle in. We're a message away if you need anything.",
      icon: "/icons/step-move-in.svg",
    },
  ],
}

export const cta = {
  title: "Find the perfect stay for your *next trip*",
}

export const strip = [
  { src: "/images/strip/grid-03.jpg", alt: "Bathroom with a freestanding tub" },
  { src: "/images/strip/grid-04.jpg", alt: "Living room with city views" },
  { src: "/images/strip/grid-05.jpg", alt: "Calm, minimal bedroom" },
  { src: "/images/strip/grid-01.jpg", alt: "Open bedroom suite" },
  { src: "/images/strip/grid-02.jpg", alt: "Modern kitchen" },
]

export const footer = {
  about:
    "Belle Stays is a short-term accommodation and hosting company in the Portland, Oregon area. We prepare, host, and look after comfortable, stylish stays for vacations, business trips, and weekend getaways.",
  menu: [
    { label: "Home", href: "#home" },
    { label: "Stays", href: "#stays" },
    { label: "Booking", href: "#booking" },
    { label: "Amenities", href: "#amenities" },
    { label: "Contact", href: "#contact" },
  ],
  officeLabel: "Office address",
  officeNote: "Business office only. Not available to book.",
  copyrightYear: 2026,
  enquiryEyebrow: "Get in touch",
  enquiryTitle:
    "Planning a trip to Portland? Send us a message and we'll help you find the right stay.",
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ],
}

// Choices for the "Stay" field in the booking form
export const stayOptions = [...bookableStays.map((stay) => stay.name), "Not sure yet"]

export const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"]
