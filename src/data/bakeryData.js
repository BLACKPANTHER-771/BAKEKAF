/**
 * Centralized Bakery Data Configuration
 * All business details, menu items, images, pricing, and contact links are configured here.
 * To adapt this website for any real café/bakery client, simply update this file.
 */

export const bakeryData = {
  business: {
    name: "Maison Crème",
    tagline: "Baked slowly. Loved deeply.",
    subtagline: "Artisan Bakery & Boutique Café",
    description: "A neighbourhood sanctuary where traditional French pastry artistry meets slow-fermented sourdough and ethically sourced specialty coffee.",
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: "919876543210", // International format without '+' or spaces for wa.me API
    email: "bonjour@maisoncreme.com",
    address: {
      line1: "42, Lavender Lane, Heritage Quarter",
      line2: "Indiranagar, 12th Main Road",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560038",
      landmark: "Opposite The Rain Tree Courtyard",
      full: "42, Lavender Lane, Heritage Quarter, Indiranagar, Bangalore, Karnataka 560038"
    },
    instagram: "https://instagram.com/maisoncreme.bakery",
    instagramHandle: "@maisoncreme.bakery",
    facebook: "https://facebook.com/maisoncremebakery",
    googleMapsUrl: "https://maps.google.com/?q=Indiranagar+Bangalore",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985552399222!2d77.63842147573886!3d12.972777987342673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70c5b36bb%3A0x6b772093554e2079!2s12th%20Main%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709456789012!5m2!1sen!2sin",
    foundedYear: "2018",
    rating: "4.9",
    totalReviews: "520+",
    currency: "₹",
    paymentLink: "" // Razorpay payment link placeholder for public demo (configure with client link on deployment)
  },

  hours: [
    { day: "Tuesday – Friday", time: "8:00 AM – 10:00 PM", status: "Open" },
    { day: "Saturday – Sunday", time: "7:30 AM – 10:30 PM", status: "Open" },
    { day: "Monday", time: "Closed (Baking R&D Day)", status: "Closed" }
  ],

  trustPoints: [
    {
      icon: "Clock",
      title: "Fresh Daily Batches",
      description: "Baked at 5:00 AM & 2:00 PM everyday with zero day-old stock."
    },
    {
      icon: "Award",
      title: "100% Pure Butter",
      description: "Imported French Normandy AOP butter & Belgian single-origin chocolate."
    },
    {
      icon: "Heart",
      title: "Eggless Delicacies Available",
      description: "Dedicated separate eggless baking station & plant-based treats."
    },
    {
      icon: "Sparkles",
      title: "Custom Celebration Cakes",
      description: "Handcrafted 24-48h prior with bespoke flavour & floral designs."
    }
  ],

  aboutStory: {
    heading: "Where Slow Living Meets Pure Culinary Craftsmanship",
    lead: "Born from an obsession with golden caramelized crusts, 72-hour sourdough levain, and velvety micro-foam coffee.",
    paragraphs: [
      "In 2018, Master Pastry Chef Julien Laurent and hospitality architect Tara Sen converted a quiet 1930s colonial bungalow in Indiranagar into Maison Crème. Our mission was humble: bring the slow, uncompromising soul of European boulangeries to our vibrant neighbourhood.",
      "Every croissant undergoes a meticulous 3-day lamination process with cultured butter. Every sourdough loaf breathes through organic stoneground flour and natural wild yeast starters nurtured since our inception.",
      "We believe a café should be a warm third place — a haven where conversations linger, morning light floods sunlit tables, and every bite carries the honest warmth of human dedication."
    ],
    chefName: "Chef Julien Laurent",
    chefRole: "Co-Founder & Head Pâtissier",
    chefQuote: "“True baking cannot be rushed. Great pastry is simply butter, time, patience, and boundless respect for the craft.”",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
  },

  stats: [
    { number: "72", label: "Hours Sourdough Fermentation" },
    { number: "100%", label: "Pure Normandy Butter" },
    { number: "12,000+", label: "Celebration Cakes Handcrafted" },
    { number: "4.9★", label: "Google Neighbourhood Rating" }
  ],

  bestSellers: [
    {
      id: "bs-1",
      name: "Pistachio Rose Chiffon Cake",
      category: "Cakes",
      price: 1450,
      badge: "Signature Classic",
      tagline: "Light sponge with Sicilian pistachio praline & fresh Damascus rose petals",
      description: "Feather-light Japanese chiffon sponge layered with roasted Sicilian pistachio cream, infused with organic organic rose water, and topped with Persian pistachios and delicate edible dried rosebuds.",
      image: "/images/pistachio-rose-cake.jpg",
      isEggless: true,
      rating: 4.9,
      servings: "6-8 Portions (500g)",
      leadTime: "Order 4h in advance"
    },
    {
      id: "bs-2",
      name: "Belgian Dark Truffle Entremet",
      category: "Cakes",
      price: 1650,
      badge: "Chef's Special",
      tagline: "70% Valrhona dark chocolate mousse with hazelnut crunch base",
      description: "Intense 70% dark Belgian cocoa mousse encasing a core of slow-roasted hazelnut praline feuilletine and dark chocolate biscuit, finished in an immaculate mirror glaze.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      isEggless: true,
      rating: 5.0,
      servings: "6-8 Portions (500g)",
      leadTime: "Order 6h in advance"
    },
    {
      id: "bs-3",
      name: "Heritage Almond Croissant",
      category: "Pastries",
      price: 240,
      badge: "Morning Favorite",
      tagline: "Twice-baked butter croissant filled with rich almond frangipane",
      description: "Our signature 72-layer flaky croissant soaked in aromatic vanilla bean syrup, stuffed generously with almond frangipane cream, and toasted with sliced toasted almonds.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      isEggless: false,
      rating: 4.9,
      servings: "Individual portion",
      leadTime: "Available Fresh Daily"
    },
    {
      id: "bs-4",
      name: "Sea Salt Caramel Macaron Box",
      category: "Desserts",
      price: 680,
      badge: "Bestselling Gift",
      tagline: "Box of 6 Parisian macarons with Maldon fleur de sel caramel",
      description: "Delicate crisp almond meringue shells filled with rich, slow-simmered caramel infused with Brittany sea salt butter. Melts instantly on the tongue.",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",
      isEggless: false,
      rating: 4.8,
      servings: "Box of 6",
      leadTime: "Ready to pick up"
    }
  ],

  menuCategories: [
    "All Delicacies",
    "Artisan Cakes",
    "Viennoiserie & Pastries",
    "Specialty Coffee",
    "Sourdough & Breads",
    "High Tea & Desserts"
  ],

  menuItems: [
    {
      id: "m-1",
      name: "Pistachio Rose Chiffon Cake",
      category: "Artisan Cakes",
      price: 1450,
      isEggless: true,
      description: "Airy pistachio sponge with rose ganache and crushed Iranian pistachios.",
      image: "/images/pistachio-rose-cake.jpg",
      tags: ["Signature", "Eggless", "Bestseller"],
      prepTime: "Same Day (4h advance)"
    },
    {
      id: "m-2",
      name: "Belgian Dark Truffle Cake",
      category: "Artisan Cakes",
      price: 1650,
      isEggless: true,
      description: "70% single-origin dark chocolate mousse with hazelnut feuilletine crunch.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      tags: ["Eggless", "Premium Cocoa", "Glaze Finish"],
      prepTime: "Same Day (4h advance)"
    },
    {
      id: "m-3",
      name: "Tiramisu Mascarpone Gateau",
      category: "Artisan Cakes",
      price: 1550,
      isEggless: false,
      description: "Espresso-soaked savoiardi biscuits with velvety Italian mascarpone zabaglione.",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
      tags: ["Classic Italian", "Espresso Infused"],
      prepTime: "Order 1 Day Ahead"
    },
    {
      id: "m-4",
      name: "Wild Berry & Vanilla Charlotte",
      category: "Artisan Cakes",
      price: 1750,
      isEggless: true,
      description: "Bavarian vanilla cream ringed with delicate sponge and fresh seasonal berries.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
      tags: ["Seasonal", "Eggless", "Fresh Berries"],
      prepTime: "Order 1 Day Ahead"
    },
    {
      id: "m-5",
      name: "Heritage Butter Croissant",
      category: "Viennoiserie & Pastries",
      price: 180,
      isEggless: false,
      description: "72 distinct laminated layers of French butter baked to crisp golden perfection.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      tags: ["French AOP Butter", "Baked 5 AM Daily"],
      prepTime: "Fresh in-store"
    },
    {
      id: "m-6",
      name: "Twice-Baked Almond Frangipane",
      category: "Viennoiserie & Pastries",
      price: 240,
      isEggless: false,
      description: "Filled with rich roasted almond cream and topped with toasted almond flakes.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      tags: ["Bestseller", "Crunchy & Nutty"],
      prepTime: "Fresh in-store"
    },
    {
      id: "m-7",
      name: "Pain au Chocolat (2x Batons)",
      category: "Viennoiserie & Pastries",
      price: 210,
      isEggless: false,
      description: "Flaky pastry wrapping two generous batons of 64% Valrhona dark chocolate.",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
      tags: ["Dark Chocolate", "Kids & Adults"],
      prepTime: "Fresh in-store"
    },
    {
      id: "m-8",
      name: "Kouign-Amann (Brittany Caramel)",
      category: "Viennoiserie & Pastries",
      price: 220,
      isEggless: false,
      description: "Caramelized folded butter dough with crunchy crystallized sugar crust.",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
      tags: ["Caramelized", "Chef Favorite"],
      prepTime: "Fresh in-store"
    },
    {
      id: "m-9",
      name: "Spanish Cortado & Latte",
      category: "Specialty Coffee",
      price: 220,
      isEggless: true,
      description: "Equal parts double ristretto espresso and warm textured whole milk / oat milk.",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
      tags: ["Araku Estate Beans", "Oat Milk Option"],
      prepTime: "Instant / 5 mins"
    },
    {
      id: "m-10",
      name: "Iced Madagascar Vanilla Latte",
      category: "Specialty Coffee",
      price: 260,
      isEggless: true,
      description: "Cold-extracted espresso over house-infused organic Bourbon vanilla syrup & milk.",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
      tags: ["Real Vanilla Bean", "Cold Brew Base"],
      prepTime: "Instant / 5 mins"
    },
    {
      id: "m-11",
      name: "Country Sourdough Boule (800g)",
      category: "Sourdough & Breads",
      price: 280,
      isEggless: true,
      description: "72-hour cold fermented wild yeast loaf with deep blistered crust and open crumb.",
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
      tags: ["Naturally Fermented", "100% Organic Flours"],
      prepTime: "Fresh batch at 8 AM"
    },
    {
      id: "m-12",
      name: "Olive & Rosemary Focaccia",
      category: "Sourdough & Breads",
      price: 260,
      isEggless: true,
      description: "Extra virgin olive oil drenched airy crumb topped with Kalamata olives & sea salt.",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
      tags: ["EVOO", "Herbal & Crispy"],
      prepTime: "Fresh in-store"
    }
  ],

  offers: [
    {
      id: "off-1",
      code: "WEEKENDSWEET",
      title: "Complimentary Macaron Box",
      description: "Receive a curated box of 4 artisan macarons on all celebration cake pre-orders placed 48 hours in advance.",
      badge: "Weekend Privilege",
      validity: "Valid on all Pre-Orders",
      actionText: "Claim with WhatsApp Pre-Order"
    },
    {
      id: "off-2",
      code: "MORNINGPAIR",
      title: "Breakfast Viennoiserie Pairing",
      description: "Enjoy any classic butter croissant or pain au chocolat with single-estate specialty coffee at ₹349 (Save 20%).",
      badge: "8 AM – 11 AM Daily",
      validity: "Dine-in & Morning Takeaway",
      actionText: "Reserve Table on WhatsApp"
    },
    {
      id: "off-3",
      code: "HIGHBOX",
      title: "Curated High-Tea Hamper Box",
      description: "Custom assortment of 2 savory tarts, 4 mini eclairs, 2 scones with clotted cream & homemade berry jam.",
      badge: "Corporate & Gifting",
      validity: "Bespoke Corporate Packaging",
      actionText: "Inquire Gifting Catalogs"
    }
  ],

  gallery: [
    {
      id: "g-1",
      src: "/images/pistachio-rose-cake.jpg",
      title: "Pistachio Rose Chiffon Cake",
      category: "Cakes",
      badge: "Chef Signature",
      caption: "Pastel pistachio green cream with Damascus rose petals & Iranian nuts."
    },
    {
      id: "g-2",
      src: "/images/cafe-convo-interior.jpg",
      title: "Morning Smiles & Warm Brews",
      category: "Ambiance",
      badge: "Café Convo",
      caption: "Our baristas welcoming regulars with freshly pulled espresso and warm sourdough."
    },
    {
      id: "g-3",
      src: "/images/sticky-notes-feedback.jpg",
      title: "Wall of Sweet Love",
      category: "Stories",
      badge: "Customer Notes",
      caption: "Handwritten feedback & love notes pinned on our neighbourhood gratitude board."
    },
    {
      id: "g-4",
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      title: "Belgian Chocolate Truffle Cake",
      category: "Cakes",
      badge: "70% Valrhona",
      caption: "Moist cocoa sponge layered with velvety Belgian dark chocolate ganache."
    },
    {
      id: "g-5",
      src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      title: "Classic Butter Croissants",
      category: "Pastries",
      badge: "72 Laminated Layers",
      caption: "Pure Normandy churned butter baked fresh three times every day."
    },
    {
      id: "g-6",
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      title: "Specialty Espresso Bar",
      category: "Coffee",
      badge: "Single Origin",
      caption: "Single estate Araku Valley beans freshly ground for each cup."
    },
    {
      id: "g-7",
      src: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
      title: "Country Sourdough Loaf",
      category: "Breads",
      badge: "72h Fermentation",
      caption: "Naturally leavened sourdough with crisp caramelized crust."
    },
    {
      id: "g-8",
      src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
      title: "Salted Caramel Tart",
      category: "Pastries",
      badge: "Maldon Sea Salt",
      caption: "Buttery sable shell filled with gooey caramel and dark chocolate."
    },
    {
      id: "g-9",
      src: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80",
      title: "French Macaron Palette",
      category: "Desserts",
      badge: "Box of 6",
      caption: "Crisp almond shells with pistachio, passionfruit, and raspberry centers."
    },
    {
      id: "g-10",
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      title: "Sunlit Courtyard Seating",
      category: "Ambiance",
      badge: "Boutique Space",
      caption: "Peaceful alfresco seating under heritage rain trees."
    },
    {
      id: "g-11",
      src: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
      title: "Red Velvet Berry Cake",
      category: "Cakes",
      badge: "Cream Cheese",
      caption: "Vibrant velvety sponge with real Madagascar vanilla bean frosting."
    },
    {
      id: "g-12",
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      title: "Master Baker's Hearth",
      category: "Behind the Scenes",
      badge: "Artisan Kitchen",
      caption: "Our team shaping dough by hand in our open glass bakehouse."
    }
  ],

  reviews: [
    {
      id: "rev-1",
      name: "Pooja Hegde",
      role: "Neighbourhood Regular",
      rating: 5,
      date: "3 days ago",
      comment: "The Pistachio Rose Chiffon cake is unlike anything in the city — cloud-like softness with real floral nuance! Maison Crème is our family's default celebration bakery.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-2",
      name: "Arjun Mehta",
      role: "Coffee & Pastry Connoisseur",
      rating: 5,
      date: "1 week ago",
      comment: "Finally, a real French bakery that gets the lamination right! The Almond Croissant has the shatteringly crisp exterior and rich frangipane core of Paris.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-3",
      name: "Sneha & Rohit",
      role: "Wedding Cake Clients",
      rating: 5,
      date: "2 weeks ago",
      comment: "Chef Julien and the team created our 3-tier custom wedding cake via WhatsApp coordination. Not only was it a visual showstopper, guests were queuing for second slices!",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    }
  ]
};

/**
 * Prepares a pre-formatted WhatsApp chat link for a specific menu/bestseller item.
 */
export function createWhatsAppOrderLink(item, customQuantity = 1) {
  const number = bakeryData.business.whatsapp;
  const message = `Hello ${bakeryData.business.name}! 👋\n\nI’d like to place an order for:\n🧁 *${item.name}*\n📦 Quantity: ${customQuantity}\n💰 Price: ${bakeryData.business.currency}${item.price * customQuantity}\n\nPlease confirm availability and payment/pickup details. Thank you!`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Prepares a pre-formatted WhatsApp link for custom bespoke celebration cake consultation.
 */
export function createWhatsAppCustomCakeLink() {
  const number = bakeryData.business.whatsapp;
  const message = `Hello ${bakeryData.business.name}! 🎂\n\nI’m interested in commissioning a *Custom Bespoke Celebration Cake* for an upcoming occasion.\n\nCould you please share your customization catalogue, available flavor combinations, and booking calendar?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Prepares a pre-formatted WhatsApp link for seasonal offers.
 */
export function createWhatsAppOfferLink(offer) {
  const number = bakeryData.business.whatsapp;
  const message = `Hello ${bakeryData.business.name}! ✨\n\nI'd like to avail the *${offer.title}* (Code: *${offer.code}*).\n\n${offer.description}\n\nPlease let me know how to proceed with the reservation/order!`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * General inquiry WhatsApp link generator.
 */
export function createGeneralWhatsAppLink(customQuery = "") {
  const number = bakeryData.business.whatsapp;
  const defaultText = customQuery || `Hello ${bakeryData.business.name}! 👋 I have an inquiry regarding your fresh bakes and café timings.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(defaultText)}`;
}
