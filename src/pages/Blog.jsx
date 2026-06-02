import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function load() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("published", true)
    console.log("posts:", data)
    console.log("error:", error)
    setPosts(data || []);
    setLoading(false);
  }
  load();
}, []);

  if (loading) return <div className="max-w-5xl mx-auto px-6 py-16 text-gray-400">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="font-serif text-3xl font-bold mb-1">Blog</h2>
      <p className="text-sm text-gray-400 mb-8">Stories, updates, and news from our programs</p>
      <div className="grid gap-4">
        {posts.length === 0 && <p className="text-gray-400 text-sm">No posts yet.</p>}
        {posts.map(b => (
           <BlogCard key={b.id} blog={{
    date: new Date(b.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    title: b.title,
    excerpt: b.excerpt,
    tag: "News",
    slug: b.slug, // add this
  }} />
        ))}
      </div>
    </div>
  );
}