import hero from "@/assets/hero.jpg";
import vehicle from "@/assets/vehicle.jpg";
import workshop from "@/assets/workshop.jpg";
import reception from "@/assets/reception.jpg";
import metal from "@/assets/metal.jpg";
import billboard from "@/assets/billboard.jpg";
import windowImg from "@/assets/window.jpg";
import cafe from "@/assets/cafe.jpg";
import retail from "@/assets/retail.jpg";
import clinic from "@/assets/clinic.jpg";
import office from "@/assets/office.jpg";
import gym from "@/assets/gym.jpg";
import type { StaticImageData } from "next/image";

const asset = (img: string | StaticImageData) => (typeof img === "string" ? img : img.src);

export const images = {
  hero: asset(hero),
  vehicle: asset(vehicle),
  workshop: asset(workshop),
  reception: asset(reception),
  retail: asset(retail),
  clinic: asset(clinic),
  office: asset(office),
  gym: asset(gym),
  workspace: "/workspace.jpg",
  studio: "/studio.jpg",
};

export const site = {
  name: "The Freshy Designs",
  tagline: "Design Solutions For Any Media.",
  blurb: "Turn your vans, utes, and trucks into mobile brand ambassadors with premium cast vinyl wraps and decals.",
  city: "Australia",
  phone: "+61 483908001",
  email: "info@thefreshydesigns.com.au",
  address: "Australia",
  hours: "Monday to Friday 10am - 8:30pm",
  emailNote: "Write to our corporate mail",
  socials: { instagram: "#", facebook: "#", linkedin: "#" },
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/categories", label: "Categories" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

/** Brand logos for the home trusted-by marquee (`public/brands`). */
export const trustedBrands = [
  { name: "Woolworths", logo: "/brands/woolworths.png" },
  { name: "Coles", logo: "/brands/coles.png" },
  { name: "Aldi", logo: "/brands/aldi.png" },
  { name: "IGA", logo: "/brands/iga.png" },
  { name: "Bunnings", logo: "/brands/bunnings.png" },
  { name: "Kmart", logo: "/brands/kmart.svg" },
  { name: "Officeworks", logo: "/brands/officeworks.svg" },
  { name: "Chemist Warehouse", logo: "/brands/chemist-warehouse.png" },
  { name: "Harvey Norman", logo: "/brands/harvey-norman.svg" },
  { name: "Australia Post", logo: "/brands/australia-post.svg" },
  { name: "Telstra", logo: "/brands/telstra.svg" },
  { name: "Qantas", logo: "/brands/qantas.svg" },
] as const;

export type Filter = "Building Signs" | "Outdoor & Retail" | "Indoor & Reception" | "Vehicle Wraps";
export const filters: ("All" | Filter)[] = ["All", "Building Signs", "Outdoor & Retail", "Indoor & Reception", "Vehicle Wraps"];

export const products: { slug: string; title: string; desc: string; image: string; group: Filter; tags: [string, string] }[] = [
  { slug: "illuminated", title: "Illuminated Signs", desc: "LED halo-lit and front-lit channel letters that keep your brand visible after dark.", image: asset(hero), group: "Building Signs", tags: ["LED Lit", "Storefront"] },
  { slug: "metal", title: "Metal Signs", desc: "Brushed aluminium, brass and stainless steel plaques built to last decades.", image: asset(metal), group: "Building Signs", tags: ["Aluminium", "Brass & Steel"] },
  { slug: "billboard", title: "Billboard Signs", desc: "Large-format, heavy-duty outdoor billboards engineered for maximum reach.", image: asset(billboard), group: "Outdoor & Retail", tags: ["Large Format", "Outdoor"] },
  { slug: "reception", title: "Reception Signs", desc: "3D acrylic logos and lobby wall lettering that make a first impression count.", image: asset(reception), group: "Indoor & Reception", tags: ["3D Acrylic", "Lobby Wall"] },
  { slug: "window", title: "Window Graphics & Frosting", desc: "Frosted vinyl, perforated mesh and promotional window graphics.", image: asset(windowImg), group: "Indoor & Reception", tags: ["Frosted", "Perforated"] },
  { slug: "vehicle", title: "Vehicle Wraps & Decals", desc: "Premium cast vinyl wraps and decals that turn every trip into advertising.", image: asset(vehicle), group: "Vehicle Wraps", tags: ["Cast Vinyl", "Fleet"] },
  { slug: "cafe", title: "Cafe & Restaurant Signs", desc: "A-frames, menu boards, custom neon and awnings for hospitality venues.", image: asset(cafe), group: "Outdoor & Retail", tags: ["A-Frames", "Neon"] },
];

export const industriesSection = {
  eyebrow: "Industries",
  title: "Signs we make for every kind of business",
  titleAccent: "every kind of business",
  desc: "From shopfronts to fleets — signage designed, built and installed for how each business works.",
} as const;

export const visionSection = {
  eyebrow: "Our Vision",
  titleLine1: "For every brand to have a clear presence",
  titleAccent: "Where design, build, and install",
  titleEnd: "work as one.",
  desc: "The Freshy Designs unifies concept, in-house production and on-site installation so your signage looks right, lasts longer, and gets noticed faster.",
  cta: { label: "Book a Free Consultation", href: "/quote" },
  people: [
    { src: "/people/Frame-1.webp", alt: "Team member" },
    { src: "/people/Frame-2.webp", alt: "Team member" },
    { src: "/people/Frame-3.webp", alt: "Team member" },
    { src: "/people/Frame-4.webp", alt: "Team member" },
    { src: "/people/Frame-5.webp", alt: "Team member" },
  ],
} as const;

export const studioSection = {
  eyebrow: "Our Studio",
  titleLine1: "Designed where the work",
  titleAccent: "actually happens.",
  desc: "From first sketch to production-ready artwork, our team shapes every mark so it reads clean on the wall, the window, and the road.",
  primaryCta: { label: "Meet the studio", href: "/about" },
  secondaryCta: { label: "Request a quote", href: "/quote" },
} as const;

export const industries: {
  slug: string;
  title: string;
  sub: string;
  desc: string;
  image: string;
  art?: string;
  icon: "store" | "coffee" | "health" | "office" | "gym" | "fleet";
  featured?: boolean;
}[] = [
  { slug: "retail", title: "Retail & Storefronts", sub: "Shopfronts that stop traffic", desc: "Awnings, window graphics and illuminated fascia signs that turn foot traffic through the door.", image: asset(retail), art: "/assets/retail.png", icon: "store", featured: true },
  { slug: "hospitality", title: "Cafes & Restaurants", sub: "Set the mood before the menu", desc: "Custom neon, A-frames and menu boards that carry your vibe from the street to the table.", image: asset(cafe), art: "/assets/cafe.png", icon: "coffee" },
  { slug: "health", title: "Clinics & Health", sub: "Calm, clear wayfinding", desc: "Reception logos, frosted glass and room signage that feel professional and easy to read.", image: asset(clinic), art: "/assets/health.png", icon: "health" },
  { slug: "fitness", title: "Gyms & Studios", sub: "Signage with energy", desc: "LED neon feature walls and large-format graphics that photograph well and keep members motivated.", image: asset(gym), art: "/assets/gym.png", icon: "gym" },
  { slug: "corporate", title: "Offices & Commercial", sub: "Make the building yours", desc: "Bronze plaques, lobby walls and floor directories built and certified to council standards.", image: asset(office), icon: "office" },
  { slug: "fleet", title: "Fleets & Trades", sub: "Advertising on wheels", desc: "Full and partial wraps for vans, utes and truck fleets, engineered to survive the outdoors.", image: asset(vehicle), icon: "fleet" },
];

export const projects: { title: string; client: string; category: Filter; image: string; year: string; location: string }[] = [
  { title: "Halo-lit channel letters", client: "Northside Auto", category: "Building Signs", image: asset(hero), year: "2025", location: "Australia" },
  { title: "Brushed bronze entry plaque", client: "Harbour Point Estates", category: "Building Signs", image: asset(metal), year: "2025", location: "Australia" },
  { title: "Grand-format roadside billboard", client: "Coastline Property", category: "Outdoor & Retail", image: asset(billboard), year: "2024", location: "Australia" },
  { title: "3D acrylic lobby logo", client: "Lakeview Medical", category: "Indoor & Reception", image: asset(reception), year: "2025", location: "Australia" },
  { title: "Frosted privacy glazing", client: "Studio Nine Salon", category: "Indoor & Reception", image: asset(windowImg), year: "2024", location: "Australia" },
  { title: "Full fleet wrap - 6 vans", client: "Bright Sparks Electrical", category: "Vehicle Wraps", image: asset(vehicle), year: "2025", location: "Australia" },
  { title: "Neon feature wall & awning", client: "Ember Coffee House", category: "Outdoor & Retail", image: asset(cafe), year: "2024", location: "Australia" },
  { title: "Boutique fascia & window pack", client: "Marlow & Co.", category: "Outdoor & Retail", image: asset(retail), year: "2025", location: "Australia" },
  { title: "Clinic wayfinding package", client: "Dr. Nguyen Dental", category: "Indoor & Reception", image: asset(clinic), year: "2024", location: "Australia" },
  { title: "Commercial lobby directory", client: "Meridian Group", category: "Building Signs", image: asset(office), year: "2025", location: "Australia" },
  { title: "LED gym brand wall", client: "Iron Yard Fitness", category: "Indoor & Reception", image: asset(gym), year: "2025", location: "Australia" },
  { title: "Production run - in-house", client: "The Freshy Designs", category: "Building Signs", image: asset(workshop), year: "2025", location: "Australia" },
];

export const services: {
  slug: string; title: string; desc: string; image: string; intro: string;
  includes: string[]; steps: string[];
}[] = [
  {
    slug: "design-branding", title: "Design & Branding", desc: "Logos, identity systems and brand guidelines ready for every surface.",
    image: asset(workshop),
    intro: "Every sign we make starts as a brand decision. We design the mark, then prove it works at 3 metres and at 3 centimetres before anything goes into production.",
    includes: ["Logo and wordmark design", "Colour, material and finish palettes", "Sign schedules for multi-site rollouts", "Print-ready artwork and source files", "Brand guidelines for future signage"],
    steps: ["Brand discovery call", "Three directions presented", "Refinement and sign scheduling", "Artwork handover"],
  },
  {
    slug: "web-development", title: "Web Development", desc: "Fast, modern websites that match the quality of your physical branding.",
    image: asset(office),
    intro: "Your website is the sign people click. We build fast, mobile-first sites that carry the same identity as your storefront and rank when people search for you.",
    includes: ["Custom design matched to your signage", "Mobile-first responsive build", "Booking, quote and enquiry forms", "Local SEO and Google Business setup", "Hosting, updates and monthly reports"],
    steps: ["Site planning and wireframes", "Design in your brand system", "Build and content load", "Launch, index and monitor"],
  },
  {
    slug: "digital-marketing", title: "Digital Marketing", desc: "Campaigns that bring customers to the storefront your signage lights up.",
    image: asset(billboard),
    intro: "Signage builds recognition; campaigns convert it. We run search and social advertising that repeats the same offer people saw on your shopfront.",
    includes: ["Google and Meta ad management", "Landing pages built for conversion", "Offer and creative consistency checks", "Monthly reporting with next actions", "Review and reputation strategy"],
    steps: ["Goal and offer workshop", "Campaign build and creative", "Launch and pacing", "Weekly optimisation"],
  },
  {
    slug: "it-technology", title: "IT & Technology Services", desc: "Practical tech support and setup for growing local businesses.",
    image: asset(clinic),
    intro: "The unglamorous side of running a business, handled. We set up and maintain the systems your team relies on so the storefront never stops trading.",
    includes: ["WiFi, cabling and network setup", "POS and reception system installs", "Email, domain and account setup", "Backups and security reviews", "On-site and remote support"],
    steps: ["Site audit", "Scoped proposal", "Install and configure", "Ongoing support plan"],
  },
];

export const faqs = [
  { q: "How long does a typical signage project take?", a: "Most projects take 2–4 weeks from approved design to installation. Simple window graphics can be faster; large illuminated or council-approved signs may take longer." },
  { q: "Do I need a council permit for my sign?", a: "Many external and illuminated signs require approval. We assess your site and handle the council permit application on your behalf." },
  { q: "What warranty do you offer?", a: "All signs are covered by our full workmanship warranty, and LED components carry manufacturer warranties. Ask us for the specifics for your project." },
  { q: "Do you install the signs yourselves?", a: "Yes. Our insured, in-house installers handle everything from vehicle wraps to rooftop building signs." },
  { q: "Can you make custom sizes and shapes?", a: "Absolutely. With in-house CNC routers and laser cutters, we produce signage to any size, shape or material spec." },
  { q: "Do you offer maintenance?", a: "We offer ongoing maintenance including LED replacement, cleaning and repairs to keep your signage looking new." },
];

export const process = [
  { title: "Graphic Design & 3D Mockups", points: ["Brand consultation", "Scale rendering on your site", "Unlimited revisions"] },
  { title: "Precision Manufacturing", points: ["CNC and laser cutting", "Weather testing", "Premium LED components"] },
  { title: "Expert Installation & Permits", points: ["Insured installers", "Council permit support", "Ongoing maintenance"] },
];

export type InsightCategory = "Signage" | "Branding" | "Retail" | "Vehicle Wraps" | "Guides";
export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  readTime: string;
  image: string;
  body: string[];
  takeaways: string[];
};

export const insights: Insight[] = [
  {
    slug: "choose-illuminated-storefront-sign",
    title: "How to choose the right illuminated sign for your storefront",
    excerpt: "Channel letters, lightboxes and halo-lit signs all behave differently after dark. Start with your façade, viewing distance and brand personality.",
    category: "Signage", date: "November 12, 2026", readTime: "6 min read", image: asset(hero),
    body: [
      "The best illuminated sign is not automatically the brightest one. It is the one that stays legible from the distance your customers first see it, suits the architecture and feels like a natural extension of your brand.",
      "Front-lit channel letters give individual letters a clear, bright face and work well for bold retail identities. Halo-lit letters push light back onto the wall instead, creating a softer outline that suits premium and architectural settings. A lightbox can be practical when you need a larger illuminated area or a detailed full-colour graphic.",
      "Before choosing, photograph your façade in daylight and after sunset. Note the mounting surface, nearby light sources, obstructions and the direction people approach from. These details affect letter depth, illumination and placement just as much as the logo itself.",
      "A scaled mock-up lets you compare options on your actual shopfront before production. It is also the right time to confirm access, electrical requirements and whether your local council needs to approve the sign.",
    ],
    takeaways: ["Choose illumination by viewing conditions, not brightness alone.", "Mock up the sign on your real façade.", "Check power access and permit requirements early."],
  },
  {
    slug: "vehicle-wraps-vs-painted-branding",
    title: "Vehicle wraps vs. painted branding: what lasts longer?",
    excerpt: "The right choice depends on your artwork, budget, vehicle plans and how often you expect to update your branding.",
    category: "Vehicle Wraps", date: "November 6, 2026", readTime: "5 min read", image: asset(vehicle),
    body: [
      "Paint and vinyl can both put a brand on a vehicle, but they solve different problems. Paint suits simple, permanent markings. A quality vinyl wrap supports photographic colour, complex gradients and full-panel designs without committing the vehicle to a permanent painted finish.",
      "Lifespan depends on film quality, preparation, exposure and care. Horizontal surfaces that bake in the sun usually age faster than vertical panels. Regular gentle washing and sheltered parking help either finish look better for longer.",
      "Wraps also offer flexibility when a lease ends or a campaign changes. Individual panels can often be replaced, while the original paint remains protected underneath when the film is installed and removed correctly.",
      "Compare quotes on more than the initial figure. Ask what material is included, how the vehicle will be prepared, which areas are covered and what aftercare is recommended.",
    ],
    takeaways: ["Vinyl handles detailed and changeable artwork well.", "Sun exposure and aftercare affect service life.", "Compare materials and preparation, not just price."],
  },
  {
    slug: "practical-guide-council-sign-permits",
    title: "A practical guide to council sign permits",
    excerpt: "A little preparation before fabrication can prevent redesigns, delays and a sign that cannot legally be installed.",
    category: "Guides", date: "October 30, 2026", readTime: "7 min read", image: asset(billboard),
    body: [
      "Permit requirements vary by location, sign type and property. External dimensions, illumination, height, heritage controls and proximity to roads can all influence whether approval is needed.",
      "Start with accurate site information: the property address, façade dimensions, photos, proposed sign size and mounting position. A scaled drawing should show the sign in context rather than as an isolated logo.",
      "Allow time for the approval path before booking installation. If the design needs to change, it is far easier to adjust a drawing than remake fabricated letters or panels.",
      "Your signage provider can help prepare the technical information, but the property owner or landlord may also need to consent. Clarify those responsibilities at the quote stage so the project keeps moving.",
    ],
    takeaways: ["Rules depend on the property and the sign.", "Prepare measured drawings and clear site photos.", "Confirm landlord and council steps before production."],
  },
  {
    slug: "reception-signs-first-impressions",
    title: "Why reception signs shape first impressions",
    excerpt: "A reception sign does more than fill a wall - it gives visitors an immediate sense of your standards, personality and attention to detail.",
    category: "Branding", date: "October 24, 2026", readTime: "4 min read", image: asset(reception),
    body: [
      "Reception is where a digital impression becomes a physical one. Visitors have often seen your website or spoken to your team before they arrive; the space should confirm that they are in the right place.",
      "Scale matters more than decoration. A sign that is too small can feel apologetic, while one that crowds the wall makes the whole room harder to read. Measure the wall, ceiling lines and typical viewing distance before choosing letter sizes.",
      "Material should support the brand rather than compete with it. Acrylic can feel crisp and contemporary, metal adds weight and permanence, and illumination can create separation from the wall when used with restraint.",
      "Check the wall finish and lighting before installation. Strong downlights, textured surfaces and nearby reflections all change how dimensional lettering appears.",
    ],
    takeaways: ["Size the sign to the room and viewing distance.", "Use materials that reinforce the brand.", "Assess lighting and wall finishes before installation."],
  },
  {
    slug: "window-frosting-privacy-natural-light",
    title: "Window frosting: privacy without losing natural light",
    excerpt: "Frosted film can screen meeting rooms, organise glazing and carry branding while keeping a space bright and open.",
    category: "Retail", date: "October 18, 2026", readTime: "5 min read", image: asset(windowImg),
    body: [
      "Frosted window film obscures detail while still allowing diffused light through. That makes it useful for clinics, offices, treatment rooms and street-facing spaces where solid coverings would feel too closed in.",
      "Coverage can be full, partial or patterned. A continuous band at eye level may provide enough privacy without frosting the entire pane. Cut lettering and logos can add identification, while graduated designs can make a large glazed wall feel lighter.",
      "Think about privacy from both sides and at different times of day. Interior lighting after dark can change visibility, so test the proposed coverage against the real way the room is used.",
      "Clean, sound glass and careful installation are essential. Ask about edge finishing, cleaning and whether the film is suitable for the particular glass and exposure.",
    ],
    takeaways: ["Full frosting is not always necessary.", "Check privacy during the day and after dark.", "Plan branding and coverage as one composition."],
  },
  {
    slug: "premium-metal-sign-details",
    title: "Five details that make a metal sign feel premium",
    excerpt: "Finish, edge quality, fixing method, spacing and lighting do more for a metal sign than simply choosing an expensive material.",
    category: "Signage", date: "October 12, 2026", readTime: "5 min read", image: asset(metal),
    body: [
      "Premium metal signage is usually quiet rather than flashy. The impression comes from precise fabrication and the way the sign sits in its surroundings.",
      "Start with the finish. Brushing, polishing and patinas reflect light differently and can make the same metal feel contemporary, traditional or industrial. Edge quality is equally important because close-up visitors notice every uneven corner.",
      "Concealed fixings and stand-offs create depth without visual clutter. The gap behind a letter changes its shadow, so it should be chosen for the wall surface and lighting rather than treated as a standard spacer.",
      "Finally, give the composition room. Generous spacing around the sign and consistent alignment with architectural lines make even a modest plaque feel considered.",
    ],
    takeaways: ["Select a finish for the setting and lighting.", "Keep fixings discreet and edges precise.", "Use shadow, spacing and alignment deliberately."],
  },
  {
    slug: "cafe-signage-worth-photographing",
    title: "Designing cafe signage people want to photograph",
    excerpt: "A memorable cafe sign gives people a reason to pause, share and recognise the venue again - without turning the shopfront into visual noise.",
    category: "Branding", date: "October 6, 2026", readTime: "4 min read", image: asset(cafe),
    body: [
      "Photogenic signage starts with a clear idea, not a trend. A short phrase, distinctive letterform or unexpected material can give people something to remember while still belonging to the wider brand.",
      "Consider where a person would naturally stand to take the photo. The sign needs enough clear space around it, comfortable viewing height and lighting that flatters both the lettering and the person in front of it.",
      "Neon-style features work best as one focal point among quieter surfaces. Outside, an A-frame or window decal can repeat the same voice and lead people from the footpath to the feature wall.",
      "Practical details still matter: keep menus readable, entrances unobstructed and electrical components safely installed. The most shared sign is useless if customers cannot find the door.",
    ],
    takeaways: ["Build the idea around the venue's personality.", "Plan the photo viewpoint and lighting.", "Keep the wider customer journey clear."],
  },
  {
    slug: "prepare-signage-site-measure",
    title: "What to prepare before your signage site measure",
    excerpt: "A few photos, measurements and decisions made early will make your site measure faster and your quote far more accurate.",
    category: "Guides", date: "September 29, 2026", readTime: "6 min read", image: asset(workshop),
    body: [
      "A site measure is where a concept meets the physical building. The more clearly the installer can understand access, surfaces and services, the fewer assumptions need to be built into your quote.",
      "Gather straight-on and angled photos of the location, approximate dimensions and any existing artwork. Include wider photos that show approaches, neighbouring signs and obstacles rather than cropping tightly to the wall.",
      "Make sure someone can provide access to the relevant areas and answer questions about power, landlord requirements and preferred installation times. If the sign is high or difficult to reach, mention that before the visit.",
      "Bring examples of finishes you like, but stay open to changes once the site is assessed. A material that looks perfect on a sample board may behave differently in direct sun, shadow or night-time lighting.",
    ],
    takeaways: ["Supply wide and close-up site photos.", "Arrange access and a decision-maker for the visit.", "Flag height, power and landlord requirements early."],
  },
];
