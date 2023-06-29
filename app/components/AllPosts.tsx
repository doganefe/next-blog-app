import Post from "./Post";
const w = 300;
const h = 200;
const AllPosts = () => {
  return (
    <div className="flex flex-col mx-6">
      <h2 className="text-2xl font-medium mb-3">All Blog Posts</h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {[5, 6, 7, 8, 9, 10].map((p) => (
          <Post imgWidth={w} imgHeight={h} index={p} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
