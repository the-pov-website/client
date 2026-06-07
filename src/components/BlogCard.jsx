import { useNavigate } from "react-router-dom";

export default function BlogCard({ blog, onClick }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => blog.slug ? navigate(`/blog/${blog.slug}`) : onClick?.()}
      className="border border-gray-100 rounded-xl p-6 hover:border-amber-300 cursor-pointer"
    >
      <div className="text-xs text-gray-400 mb-1">{blog.date}</div>
      <div className="font-serif text-xl font-bold mb-2">{blog.title}</div>
      <div className="text-sm text-gray-500">{blog.excerpt}</div>
      <span className="inline-block bg-amber-50 text-amber-800 text-xs px-3 py-1 rounded-full mt-3">
        {blog.tag}
      </span>
    </div>
  );
}