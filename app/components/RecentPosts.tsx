import Post from "./Post";
const w = 300;
const h = 200;
const RecentPosts = () => {
  return (
    <div className="flex flex-col mx-6">
      <h2 className="text-2xl font-medium mb-3">Recent Blog Posts</h2>
      <div className="grid gap-3">
        <Post
          classes="flex-col md:row-span-2"
          imgWidth={700}
          imgHeight={h}
          index={1}
        />
        <Post imgWidth={w} imgHeight={h} index={2} />
        <Post imgWidth={w} imgHeight={h} index={3} />
        <Post
          classes="md:col-span-2 md:items-center"
          imgWidth={w}
          imgHeight={h}
          index={4}
        />
      </div>
    </div>
  );
};

export default RecentPosts;
