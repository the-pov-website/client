import { siteConfig, stats, blogs } from "../data/content";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import { useNavigate,Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import ProgramDetail from "./ProgramDetail";
import identityImg from "../images/identity_conference.jpg";
import teaPartyImg from "../images/tea-party.jpg";
import m1 from "../images/moments-1.jpg";
import m2 from "../images/moments-2.jpg";
import m3 from "../images/moments-3.jpg";
import m4 from "../images/moments-4.jpg";
import { Scale,Heart,Globe,ShieldCheck,Brain,Users,Ticket,Handshake,Megaphone,Gift } from "lucide-react";
import homebg from "../images/home-bg.jpg"
export default function Home() {
  const programs = [
  {
    id: "identity-conference",
    title: "Identity Conference",
    description:
      "A transformative event designed to help young people gain identity clarity, purpose, and direction.",
  },
  {
    id: "pov-tea-party",
    title: "POV Tea Party",
    description:
      "A reflective gathering that creates space for connection, conversation, and personal growth.",
  },
];
const values = [
  {
    title: "Equity",
    description: "We champion fairness, representation, and equal opportunity.",
    icon: Scale,
  },
  {
    title: "Well-being",
    description: "We prioritize mental, emotional, and social wellness.",
    icon: Heart,
  },
  {
    title: "Community",
    description: "We foster connection, collaboration, and mutual support.",
    icon: Globe,
  },
  {
    title: "Integrity",
    description: "We act with transparency, accountability, and honesty.",
    icon: ShieldCheck,
  },
];

     const navigate = useNavigate()
      const [posts, setPosts] = useState([]);
const [stories, setStories] = useState([]);
const [loadingStories, setLoadingStories] = useState(true);

         useEffect(() => {
  async function loadStories() {
    const { data, error } = await supabase
      .from("stories")
      .select("*")
      .eq("published", true)
      .order("created_at", { ascending: false });

    console.log(data);
    console.log(error);

    setStories(data || []);
    setLoadingStories(false);
  }

  loadStories();
}, []);
      const nav = (p) => navigate(p === 'home' ? '/' : `/${p}`)
/* 
  const stories = [
    {
      name: "Amina",
      story:
        "Through our education programs, Amina became the first in her family to attend university.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Daniel",
      story:
        "Access to healthcare services helped Daniel recover and return to school.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Maria",
      story:
        "Community support programs helped Maria launch her small business.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ]; */

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={homebg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl text-white">
          {/* <span className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
            {siteConfig.tagline}
          </span> */}

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
               POV <br/>
        Purpose. Ownership. Voice.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
           POV is a federally incorporated Canadian nonprofit organization focused on youth identity.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
              
          <Link
            to="/donate"
            className="bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-lg font-medium"
          >Donate Now</Link>
           
              
            

            <button
              onClick={() => nav("about")}
              className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}{/* 
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map(({ number, label }) => (
            <div
              key={label}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-amber-600">
                {number}
              </div>

              <div className="text-gray-500 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* MISSION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold mb-6">
    Who We Are
  </h2>

  <div className="space-y-6 text-lg text-gray-600">
    <p>
      POV is a federally incorporated Canadian nonprofit organization
      focused on youth identity.
    </p>

    <p>
      1 in 3 Canadian youth report persistent feelings of hopelessness.
      Too many feel unseen in conversations about purpose, leadership,
      and their place in the world.
    </p>

    <p>
      We help young people discover their purpose, take ownership of
      their growth, and find their voice with clarity and confidence.
    </p>

    <p>
      While many systems focus on outcomes, we focus on identity.
      We believe that before direction comes self-awareness,
      and before achievement comes understanding who you are.
    </p>
  </div>
</section>
  {/* VISION + MISSION*/}
  <section className="bg-gray-50 py-20">
  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Our Vision
      </h2>

      <p>
        A world where every young person thrives in purpose,
        embraces their full potential,
        and contributes meaningfully to society.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Our Mission
      </h2>

      <p>
        To empower youth and young adults through clarity
        and confidence to become a self-aware generation.
      </p>
    </div>

  </div>
</section>

{/* VALUES */}
<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">
      Our Core Values
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((v) => (
        <div
          key={v.title}
          className="bg-white border rounded-2xl p-6 hover:shadow-sm transition"
        >
          <v.icon className="w-7 h-7 text-amber-600 mb-3" />

          <h3 className="text-xl font-semibold mb-2">
            {v.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {v.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* OUR APPROACH */}
<section className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold mb-8">
    Our Approach
  </h2>

  <ul className="space-y-4 text-lg">
    <li>• Identity exploration</li>
    <li>• Storytelling and self-expression</li>
    <li>• Real-world skill development</li>
    <li>• Community and mentorship</li>
  </ul>
</section>

{/* MOMENTS THAT MATTER */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-3">
    Moments That Matter
  </h2>

  <p className="text-gray-500 text-center mb-10">
    Real moments from our programs and community gatherings.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    {[
     m1,m2,m3,m4

      
    ].map((img, i) => (
      <div
        key={i}
        className="overflow-hidden rounded-2xl group aspect-square"
      >
        <img
          src={img}
          alt={`moment-${i}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    ))}

  </div>
</section>

{/* WHO WE SERVE */}

<section className="bg-gray-50 py-20">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-6">
      Who We Serve
    </h2>

    <p className="text-lg text-gray-600 leading-relaxed">
      We serve youth and young adults (15–30) who are seeking
      clarity, purpose, and personal growth.

      Our programs support those navigating life’s transitions,
      exploring their identity, and building a stronger sense
      of self, ownership, and voice.

      We create spaces where individuals can discover their
      purpose and move forward with confidence.
    </p>
  </div>
</section>
  
  {/* PROGRAMS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-12">
    Our Programs
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Identity Conference */}
    <Link
      to="/programs/identity-conference"
      className="group border rounded-3xl overflow-hidden hover:shadow-xl transition bg-white"
    >
      <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
  <img
    src={identityImg}
    className="w-full h-full object-cover"
  />
</div>

      <div className="p-8">
        <Brain className="w-8 h-8 text-amber-600 mb-4" />

        <h3 className="text-2xl font-bold mb-3">
          Identity Conference
        </h3>

        <p className="text-gray-600">
          A transformative event helping youth gain identity clarity, purpose, and direction.
        </p>
      </div>
    </Link>

    {/* Tea Party */}
    <Link
      to="/programs/tea-party"
      className="group border rounded-3xl overflow-hidden hover:shadow-xl transition bg-white"
    >
      <div className="w-full aspect-[16/9] overflow-hidden rounded-2xl">
  <img
    src={teaPartyImg}
    className="w-full h-full object-cover"
  />
</div>

      <div className="p-8">
        <Users className="w-8 h-8 text-amber-600 mb-4" />

        <h3 className="text-2xl font-bold mb-3">
          POV Tea Party
        </h3>

        <p className="text-gray-600">
          A reflective gathering focused on connection, conversation, and personal growth.
        </p>
      </div>
    </Link>

  </div>
</section>

      {/* IMPACT STORIES */}{/* 
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="font-serif text-4xl font-bold text-center mb-12">
    Lives We've Changed
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {stories.map((story) => (
      <Link
        key={story.id}
        to={`/stories/${story.id}`}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition block"
      >
        <img
          src={story.image_url}
          alt={story.title}
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <h3 className="font-bold mb-3">{story.title}</h3>

          <p className="text-gray-500 line-clamp-3">
            {story.summary}
          </p>

          <span className="text-amber-600 text-sm font-medium mt-3 inline-block">
            Read full story →
          </span>
        </div>
      </Link>
    ))}
  </div>
</section> */}

      {/* GALLERY */}{/* 
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">
          In Action
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <img
              key={i}
              src={`https://picsum.photos/600/600?random=${i}`}
              alt=""
              className="rounded-xl h-56 w-full object-cover"
            />
          ))}
        </div>
      </section>
 */}
     
        {/* BLOGS */}{/* 
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="font-serif text-4xl font-bold mb-2">
    Latest From Our Blog
  </h2>
  <p className="text-gray-400 mb-8">
    Stories, updates, and news from the field.
  </p>
  <div className="grid gap-4">
    {posts.slice(0, 5).map((b) => (
      <BlogCard
        key={b.id}
        blog={{
          date: new Date(b.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
          title: b.title,
          excerpt: b.excerpt,
          tag: "News",
          slug: b.slug,
        }}
      />
    ))}
  </div>
</section> */}

      {/* FEATURED CAMPAIGN */}

      {/* <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-amber-600 text-white rounded-3xl p-10">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Help Build 3 New Schools
          </h2>

          <p className="mb-6">
            Together we can provide access to education for hundreds of children.
          </p>

          <div className="w-full bg-white/20 rounded-full h-4 mb-4">
            <div className="bg-white h-4 rounded-full w-[72%]" />
          </div>

          <p>$72,000 raised of $100,000 goal</p>
        </div>
      </section> */}

      {/* NEWSLETTER */}
       <section className="max-w-5xl mx-auto px-6 py-20">
        <Newsletter />
      </section>
       

      {/* GET INVOLVED*/}
    
<section className="py-24 bg-amber-600 text-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold mb-6">
      Get Involved
    </h2>

    <p className="text-amber-100 mb-10 text-lg">
      Join us in helping young people discover purpose, ownership, and voice.
    </p>

    <div className="grid md:grid-cols-2 gap-4 text-left mb-10">

      <div className="bg-white/10 p-6 rounded-xl flex gap-3 items-start">
        <Ticket />
        <span>Attend programs & events</span>
      </div>

      <div className="bg-white/10 p-6 rounded-xl flex gap-3 items-start">
        <Handshake />
        <span>Partner with organizations</span>
      </div>

      <div className="bg-white/10 p-6 rounded-xl flex gap-3 items-start">
        <Megaphone />
        <span>Volunteer with our team</span>
      </div>

      <div className="bg-white/10 p-6 rounded-xl flex gap-3 items-start">
        <Gift />
        <span>Support through donations</span>
      </div>

    </div>

    <Link
      to="/get-involved"
      className="bg-white text-amber-700 px-8 py-4 rounded-xl font-medium"
    >
      Join the Movement
    </Link>

  </div>
</section>

{/* CONTACT CTA */}
<section className="bg-black text-white py-20">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-4">
      Have questions or want to connect?
    </h2>

    <p className="mb-8">
      We would love to hear from you.
    </p>

    <Link
      to="/contact"
      className="bg-white text-black px-8 py-4 rounded-xl"
    >
      Contact Us
    </Link>

  </div>
</section>
    </div>
  );
}