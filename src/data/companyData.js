export const COMPANY_DETAILS = {
  name: "Makhaan Maa Mahakali India Private Limited",
  brandName: "Makhaan Mithila",
  tagline: "Sacred Nourishment. Divine Strength.",
  established: 2019,
  gstin: "10AASCM7783K1ZU",
  category: "Food Manufacturing / Makhana Manufacturer & Supplier",
  phone: "+91 9431848641",
  phone2: "+91 7762083006",
  rawPhone: "919431848641",
  address: "Madhubani, Bihar – 847211 / 847212",
  hours: {
    weekday: "Monday – Saturday: 9:00 AM – 9:00 PM",
    sunday: "Sunday: 9:00 AM – 6:00 PM"
  },
  logo: "/logo.png",
  images: {
    hero: "/hero-makhana.jpg",
    farming: "/mithila-farming.jpg",
    bulkSack: "/client-bulk-sack.jpg",
    retailPouch1: "/client-retail-pouch-1.jpg",
    retailPouch2: "/client-retail-pouch-2.jpg",
    warehouse: "/client-warehouse-stock.jpg",
    signboard: "/client-signboard-gstin.png"
  },
  description: "Makhaan Maa Mahakali India Private Limited (Brand: Makhaan Mithila, GSTIN: 10AASCM7783K1ZU) is a leading premium Makhana manufacturer, processor, and wholesale bulk supplier based out of Madhubani, Bihar. Deeply rooted in Mithila's rich agricultural heritage, we specialize in direct pond harvesting, meticulous hand-sorting, sun-drying, hygienic popping, and moisture-proof packaging for B2B and consumer markets."
};

export const PRODUCTS = [
  {
    id: "jumbo-6-soot",
    name: "Hand-Picked Jumbo Makhana (6+ Soot / Premium Grade)",
    category: "Premium Grade",
    grade: "6+ Soot (20mm+)",
    description: "Extra large, hand-sorted white popped lotus seeds. Inspected by hand directly inside yellow bulk sacks in Madhubani for zero bitterness and maximum fluffiness.",
    image: "/client-bulk-sack.jpg",
    features: [
      "Extra Large Size (6+ Soot / >20mm)",
      "Uniform Bright White Color",
      "Hand-Sorted & Triple Graded",
      "Moisture Level < 7%"
    ],
    b2bPackaging: "10kg / 25kg Yellow Moisture-Proof Sacks",
    popular: true
  },
  {
    id: "gour-bae-retail-pouch",
    name: "Gour.Bae Premium Packaged Makhana (250g Zipper Pouch)",
    category: "Retail Packaging",
    grade: "250g Consumer Pack",
    description: "Authentic company retail packaging (Gour.Bae 250g Premium Pack) featuring a fresh-lock zipper and transparent product window. Ideal for retail stores and superstores.",
    image: "/client-retail-pouch-1.jpg",
    features: [
      "Authentic Client 250g Zipper Pouch",
      "Green-Dot Veg Certified",
      "Extended Freshness Shelf-Life",
      "Retail Stand-Up Display"
    ],
    b2bPackaging: "Master Carton (24x 250g Pouches)",
    popular: true
  },
  {
    id: "gour-bae-close-up",
    name: "Gour.Bae Premium Packaged Makhana (Handheld Close-up)",
    category: "Retail Packaging",
    grade: "250g Retail Ready",
    description: "Close-up view of the original client retail packaging pouch showing popped lotus seed quality and seal integrity.",
    image: "/client-retail-pouch-2.jpg",
    features: [
      "Authentic Sealed Retail Pack",
      "Crisp High-Density Popped Seeds",
      "Ready for Supermarket Distribution",
      "Barcode & FSSAI Compliant"
    ],
    b2bPackaging: "Customized Retail Master Box",
    popular: false
  },
  {
    id: "standard-5-soot",
    name: "Grade A Phool Makhana (5 Soot / Wholesale Grade)",
    category: "Wholesale Standard",
    grade: "5 Soot (16mm - 19mm)",
    description: "High-density, uniformly popped fox nuts stored in factory warehouse bulk stacks ready for immediate freight dispatch across India.",
    image: "/client-warehouse-stock.jpg",
    features: [
      "Standard Wholesale Size (5 Soot)",
      "High Popping Ratio & Crunch",
      "Cleaned & De-shelled",
      "Warehouse Bulk Stacks Ready"
    ],
    b2bPackaging: "15kg / 25kg Woven Bags & Cartons",
    popular: false
  },
  {
    id: "raw-makhana-seeds",
    name: "Raw Seed Makhana (Guriyya / Processing Grade)",
    category: "Raw Material",
    grade: "Harvest Seeds",
    description: "Direct pond harvested, washed, sun-dried, and sorted raw lotus seeds ready for high-temperature popping and commercial processing facilities.",
    image: "/mithila-farming.jpg",
    features: [
      "Direct Harvest from Madhubani Ponds",
      "Sun-Dried & Cleaned",
      "High Popping Yield Rate",
      "Direct B2B Supply"
    ],
    b2bPackaging: "50kg Heavy-Duty Jute & HDPE Bags",
    popular: false
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Pond Sourcing in Madhubani",
    desc: "Lotus seeds (Euryale ferox) are harvested directly from the pristine natural ponds of Madhubani, Mithila region."
  },
  {
    step: "02",
    title: "Sun-Drying & Roasting",
    desc: "Harvested seeds undergo natural sun-drying followed by traditional wood-fired pan roasting for precise moisture control."
  },
  {
    step: "03",
    title: "Manual Popping & Hand Inspection",
    desc: "Seeds are popped using wooden mallets, hand-inspected in bulk sacks, and graded into 4+, 5+, and 6+ Soot sizes."
  },
  {
    step: "04",
    title: "Warehouse Inventory & Dispatch",
    desc: "Graded Makhana is stacked in factory warehouse inventory and dispatched with GSTIN verified invoices across India."
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Wholesale Food Distributor, Delhi NCR",
    comment: "Makhaan Maa Mahakali provides top-quality 6-Soot jumbo Makhana in bulk yellow sacks. GST billing and dispatch from Madhubani is prompt.",
    rating: 5
  },
  {
    id: 2,
    name: "Ankit Kumar",
    role: "Snack Brand Owner, Patna",
    comment: "Direct sourcing from Madhubani has brought huge trust for our raw material supply. Huge warehouse stock available whenever needed.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya V.",
    role: "Bulk Buyer, Mumbai",
    comment: "Very professional communication and instant responses on WhatsApp. The 250g retail pouches and bulk bags arrived in perfect condition.",
    rating: 5
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Gour.Bae 250g Retail Pouch Pack",
    category: "Packaging",
    src: "/client-retail-pouch-1.jpg",
    alt: "Authentic 250g Gour.Bae Makhana retail pouch packaging with window"
  },
  {
    id: 2,
    title: "Hand Quality Inspection of Popped Makhana",
    category: "Processing",
    src: "/client-bulk-sack.jpg",
    alt: "Hand inspecting fresh white popped Makhana in yellow bulk sack"
  },
  {
    id: 3,
    title: "Factory Warehouse Bulk Inventory Stack",
    category: "Warehouse",
    src: "/client-warehouse-stock.jpg",
    alt: "Warehouse stack of packaged Makhana bags ready for dispatch"
  },
  {
    id: 4,
    title: "Official Factory Signboard with GSTIN",
    category: "Facility",
    src: "/client-signboard-gstin.png",
    alt: "Official Makhaan Maa Mahakali India Pvt Ltd Signboard showing GSTIN 10AASCM7783K1ZU"
  },
  {
    id: 5,
    title: "Fresh Popped Jumbo Makhana Bowl",
    category: "Products",
    src: "/hero-makhana.jpg",
    alt: "Hand sorted high grade white popped Makhana bowl"
  },
  {
    id: 6,
    title: "Mithila Lotus Pond Harvesting",
    category: "Origin & Farm",
    src: "/mithila-farming.jpg",
    alt: "Traditional Lotus pond cultivation in Madhubani Bihar"
  }
];
