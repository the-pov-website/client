import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      setPost(data);
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) return <div className="max-w-3xl mx-auto px-6 py-16 text-gray-400">Loading...</div>;
  if (!post) return <div className="max-w-3xl mx-auto px-6 py-16 text-gray-400">Post not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <button onClick={() => navigate("/blog")} className="text-sm text-gray-400 hover:text-black mb-8 block">
        ← Back to blog
      </button>
      {post.image_url && (
        <img src={post.image_url} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-8" />
      )}
      <div className="text-xs text-gray-400 mb-3">
        {new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </div>
      <h1 className="font-serif text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-lg mb-8 border-b pb-8">{post.excerpt}</p>
      <div className="prose text-gray-700 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  );
}