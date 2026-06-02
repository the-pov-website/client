import { useParams } from "react-router-dom";

const stories = [
  {
    name: "amina",
    title: "Amina",
    story:
      "Through our education programs, Amina became the first in her family to attend university.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    fullStory:
      "Amina grew up in a rural village with limited access to education. Through HopeRise scholarships and mentorship programs, she not only completed school but earned a university degree in engineering...",
  },
  {
    name: "daniel",
    title: "Daniel",
    story:
      "Access to healthcare services helped Daniel recover and return to school.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    fullStory:
      "Daniel suffered from a severe illness that kept him out of school for months. With medical support from our healthcare initiative, he recovered fully and returned to continue his studies...",
  },
  {
    name: "maria",
    title: "Maria",
    story:
      "Community support programs helped Maria launch her small business.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    fullStory:
      "Maria used to struggle financially, but after joining our community empowerment program, she received training and a small grant that helped her start a successful bakery...",
  },
];

export default function StoryPage() {
  const { name } = useParams();

  const story = stories.find((s) => s.name === name);

  if (!story) {
    return <div className="p-10">Story not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <img
        src={story.image}
        className="w-full h-[400px] object-cover rounded-2xl mb-8"
      />

      <h1 className="text-4xl font-serif font-bold mb-4">
        {story.title}
      </h1>

      <p className="text-gray-500 italic mb-6">
        {story.story}
      </p>

      <div className="text-gray-700 leading-relaxed">
        {story.fullStory}
      </div>
    </div>
  );
}