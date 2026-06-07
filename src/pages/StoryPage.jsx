import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function StoryPage() {
  const { id } = useParams();

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  async function loadStory() {
    const { data, error } = await supabase
      .from("stories")
      .select("*")
      .eq("id", id)
      .eq("published", true)
      .maybeSingle();

    if (error) {
      console.log(error);
    }

    setStory(data || null);
    setLoading(false);
  }

  loadStory();
}, [id]);
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-gray-400">
        Loading...
      </div>
    );
  }

  if (!story) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-gray-400">
        Story not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {story.image_url && (
        <img
          src={story.image_url}
          alt={story.title}
          className="w-full h-[450px] object-cover rounded-3xl mb-10"
        />
      )}

      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-2">
          {story.author}
        </p>

        <h1 className="text-5xl font-serif font-bold mb-4">
          {story.title}
        </h1>

        {story.summary && (
          <p className="text-xl text-gray-500 italic">
            {story.summary}
          </p>
        )}
      </div>

      <article className="prose prose-lg max-w-none">
        <p className="whitespace-pre-wrap leading-relaxed text-gray-700">
          {story.content}
        </p>
      </article>

    </div>
  );
}