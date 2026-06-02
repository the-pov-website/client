import { siteConfig, stats, blogs } from "../data/content";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import { useNavigate,Link } from "react-router-dom";

export default function Home() {
     const navigate = useNavigate()
      const nav = (p) => navigate(p === 'home' ? '/' : `/${p}`)
  const programs = [
    {
      title: "Education",
      description: "Providing learning opportunities for underserved communities.",
      icon: "📚",
    },
    {
      title: "Healthcare",
      description: "Access to quality healthcare and medical support.",
      icon: "🏥",
    },
    {
      title: "Food Security",
      description: "Helping families access nutritious meals.",
      icon: "🍎",
    },
    {
      title: "Community Development",
      description: "Building stronger and more resilient communities.",
      icon: "🌍",
    },
  ];

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
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/1354939778/photo/close-up-of-a-roaring-lion.jpg?s=612x612&w=0&k=20&c=pEPRlwNwzj2vPTXvqA9WxNV7QSSBDe9kPfWxjyqLSgc="
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl text-white">
          <span className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
            {siteConfig.tagline}
          </span>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Making a lasting impact, one life at a time
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {siteConfig.description}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
              
          <Link
            to="/donate"
            className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-medium"
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

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map(({ number, label }) => (
            <div
              key={label}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm"
            >
              <div className="text-4xl font-bold text-emerald-600">
                {number}
              </div>

              <div className="text-gray-500 mt-2">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1469571486292-b53601020f36"
            alt=""
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              We believe everyone deserves access to education, healthcare,
              opportunity, and a better future. Through community-driven
              initiatives, we create sustainable impact where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-4xl font-bold text-center mb-12">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="text-4xl mb-4">{program.icon}</div>

                <h3 className="font-semibold text-lg mb-3">
                  {program.title}
                </h3>

                <p className="text-gray-500">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl font-bold text-center mb-12">
          Lives We've Changed
        </h2>

            <div className="grid md:grid-cols-3 gap-8">
  {stories.map((story) => (
    <Link
      to={`/story/${story.name.toLowerCase()}`}
      key={story.name}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition block"
    >
      <img
        src={story.image}
        alt={story.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="font-bold mb-3">{story.name}</h3>

        <p className="text-gray-500 line-clamp-3">
          {story.story}
        </p>

        <span className="text-emerald-600 text-sm font-medium mt-3 inline-block">
          Read full story →
        </span>
      </div>
    </Link>
  ))}
</div>
      </section>

      {/* GALLERY */}
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

      {/* BLOGS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl font-bold mb-2">
          Latest From Our Blog
        </h2>

        <p className="text-gray-400 mb-8">
          Stories, updates, and news from the field.
        </p>

        <div className="grid gap-4">
          {blogs.slice(0, 5).map((blog) => (
            <BlogCard
  key={blog.slug}
  blog={blog}
/>
          ))}
        </div>
      </section>

      {/* FEATURED CAMPAIGN */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-emerald-600 text-white rounded-3xl p-10">
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
      </section>

      {/* NEWSLETTER */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <Newsletter />
      </section>

      {/* FINAL CTA */}
      <section className="bg-emerald-50 py-24">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="font-serif text-5xl font-bold mb-6">
            Be Part of the Change
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Every contribution helps create opportunities and transform lives.
          </p>

         <Link
            to="/donate"
            className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg font-medium"
          >Donate Now</Link>
           
        </div>
      </section>
    </div>
  );
}