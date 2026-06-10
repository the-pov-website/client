
import identityImg from "../images/identity_conference.jpg";
import teaPartyImg from "../images/tea-party.jpg";


export const siteConfig = {
  name: "P.O.V",
  tagline: "Empowering communities since 2015",
  description: "We work with underserved communities to provide education, healthcare, and sustainable livelihoods for a better tomorrow.",
  email: "info@hoperise.org",
  phone: "+1 (555) 000-1234",
  address: "123 Hope Street, Calgary, AB",
};

export const stats = [
  { number: "12,000+", label: "Lives impacted" },
  { number: "48", label: "Communities served" },
  { number: "$2.4M", label: "Funds raised" },
];

export const team = [
  { initials: "AM", name: "Amara Mensah", role: "Executive Director" },
  { initials: "LK", name: "Lila Kebede", role: "Programs Lead" },
  { initials: "JO", name: "James Osei", role: "Finance Director" },
  { initials: "SR", name: "Sara Rahim", role: "Communications" },
];

export const blogs = [
   {
    slug: "building-scho",
    title: "Building Schools in Kenya",
    excerpt: "Helping children gain access to education.",
    date: "May 10, 2026",
    tag: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",

    content: `
For many children in rural Kenya, access to education remains a challenge.

Over the past year, HopeRise partnered with local communities to build three new schools that now serve hundreds of students.

The project included classrooms, learning materials, teacher training, and community support initiatives.

Parents who once had to send their children long distances to attend school can now access education within their own communities.

This initiative demonstrates how sustainable investment in education creates opportunities that last for generations.
    `,
  },
   {
    slug: "building-school",
    title: "Building Schools in Kenya",
    excerpt: "Helping children gain access to education.",
    date: "May 10, 2026",
    tag: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",

    content: `
For many children in rural Kenya, access to education remains a challenge.

Over the past year, HopeRise partnered with local communities to build three new schools that now serve hundreds of students.

The project included classrooms, learning materials, teacher training, and community support initiatives.

Parents who once had to send their children long distances to attend school can now access education within their own communities.

This initiative demonstrates how sustainable investment in education creates opportunities that last for generations.
    `,
  },
  
   {
    slug: "building-schools",
    title: "Building Schools in Kenya",
    excerpt: "Helping children gain access to education.",
    date: "May 10, 2026",
    tag: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",

    content: `
For many children in rural Kenya, access to education remains a challenge.

Over the past year, HopeRise partnered with local communities to build three new schools that now serve hundreds of students.

The project included classrooms, learning materials, teacher training, and community support initiatives.

Parents who once had to send their children long distances to attend school can now access education within their own communities.

This initiative demonstrates how sustainable investment in education creates opportunities that last for generations.
    `,
  },
   {
    slug: "building-schools-in",
    title: "Building Schools in Kenya",
    excerpt: "Helping children gain access to education.",
    date: "May 10, 2026",
    tag: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",

    content: `
For many children in rural Kenya, access to education remains a challenge.

Over the past year, HopeRise partnered with local communities to build three new schools that now serve hundreds of students.

The project included classrooms, learning materials, teacher training, and community support initiatives.

Parents who once had to send their children long distances to attend school can now access education within their own communities.

This initiative demonstrates how sustainable investment in education creates opportunities that last for generations.
    `,
  },
];

export const tiers = [
  {
    amount: "$25",
    label: "Supporter",
    desc: "Provides school supplies for one child for a year",
    featured: false,
    link: "https://buy.stripe.com/YOUR_LINK_1",
  },
  {
    amount: "$100",
    label: "Champion",
    desc: "Funds a full month of healthcare for a family",
    featured: true,
    link: "https://buy.stripe.com/YOUR_LINK_2",
  },
  {
    amount: "$500",
    label: "Partner",
    desc: "Sponsors a community training workshop",
    featured: false,
    link: "https://buy.stripe.com/YOUR_LINK_3",
  },
];
export const programs = {
  "identity-conference": {
    title: "Identity Conference",
    image:identityImg,
    subtitle: "Becoming Starts Here",
    tagline: "POV's Flagship Annual Conference | Youth & Young Professionals",

    intro: `
Identity Conference is POV's premier annual gathering, held each fall, designed to help young people gain clarity about who they are and who they are becoming.

In a world filled with pressure, expectations, and constant noise, many people define themselves by their achievements, circumstances, or experiences. Identity Conference creates space to pause, reflect, and build a stronger foundation for personal growth.

This is where clarity meets capacity.
`,

    purpose: `
The Identity Conference helps participants separate who they are from what they do, what they have, and what they have experienced.

Through guided reflection, meaningful conversations, and practical learning experiences, participants develop the clarity and confidence needed to move forward with greater ownership, direction, and purpose.
`,

    gains: [
      "Greater identity clarity and self-awareness",
      "A stronger sense of purpose and direction",
      "Increased emotional resilience",
      "Greater confidence in decision-making",
      "Stronger personal ownership and accountability",
    ],

    experience: [
      "High-impact keynote presentations",
      "Guided Chapters reflection sessions",
      "Identity mapping workshops",
      "Panel discussions with experienced leaders",
      "Structured networking opportunities",
      "Peer connection and community building",
      "Post-conference reflection resources and tools",
    ],

    audience: [
      "Youth and young adults seeking greater clarity and direction",
      "Students navigating educational and career decisions",
      "Emerging professionals exploring purpose and leadership",
      "Individuals experiencing transition, uncertainty, or personal growth",
    ],

    format: {
      when: "Annually in the Fall (September)",
      type: "In-person conference with future hybrid participation opportunities",
      audience: "Youth and Young Adults",
    },

    contact: "hello@thepov.ca",
  },

  "tea-party": {
    title: "POV Tea Party",
    image:teaPartyImg,
    subtitle: "Safe Spaces. Strong Voices.",
    tagline: "Intimate Experience | Curated Women's Gathering",

    intro: `
The POV Tea Party is an intimate annual experience designed for women seeking space to pause, reflect, and reconnect with themselves.

Held each spring, this gathering brings women together in a supportive environment where meaningful conversations, reflection, and community foster personal growth and renewed clarity.

This is where softness meets structure.
`,

    purpose: `
The POV Tea Party creates a safe and reflective space where women can step away from life's pressures, realign with their values, and strengthen their sense of identity and purpose.

Using the POV Chapters reflection framework, participants are guided through conversations and experiences that encourage self-awareness, healing, and growth.
`,

    gains: [
      "Renewed clarity and self-awareness",
      "Time for personal reflection and reset",
      "Greater emotional well-being",
      "A stronger sense of identity",
      "Meaningful community and connection",
      "Increased confidence and personal ownership",
    ],

    experience: [
      "Curated and intimate gathering environment",
      "Guided Chapters journal reflections",
      "Facilitated reflection circles",
      "Identity and life-season conversations",
      "Quiet moments for personal reflection",
      "Professional photography and memory capture",
    ],

    audience: [
      "Women navigating personal or professional transitions",
      "Women seeking greater clarity and direction",
      "Women experiencing pressure, burnout, or uncertainty",
      "Women looking for authentic community and connection",
    ],

    format: {
      when: "Annually in Spring (March)",
      type: "In-person gathering",
      audience: "Women",
    },

    beyond: `
Participants become part of an ongoing community focused on growth, reflection, and leadership. Through follow-up resources, peer accountability, monthly check-ins, and digital community spaces, women are encouraged to continue their journey long after the gathering ends.
`,

    contact: "hello@thepov.ca",
  },
};