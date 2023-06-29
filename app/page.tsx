import AllPosts from "./components/AllPosts";
import RecentPosts from "./components/RecentPosts";

export const metadata = {
  title: "Doğan Blog",
  description: "Teknolojiye dair içerikler",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-6 space-y-3">
      <hr className="border-gray-400" />
      <p className="text-9xl font-semibold p-3 text-center">THE BLOG</p>
      <hr className="border-gray-400" />
      <RecentPosts />
      <AllPosts />
    </main>
  );
}
