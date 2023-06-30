import Post from "./Post";
const w = 300;
const h = 200;

async function getAllPosts() {
  const posts = await fetch("https://dummyjson.com/products?limit=9");
  return posts.json();
}

const AllPosts = async () => {
  const posts = (await getAllPosts()).products;

  return (
    <div className="flex flex-col mx-6">
      <h2 className="text-2xl font-medium mb-3">All Blog Posts</h2>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {posts &&
          posts.map((p: { title: string; description: string }, i: number) => (
            <Post
              key={i}
              imgWidth={w}
              imgHeight={h}
              index={i}
              title={p.title}
              description={p.description}
            />
          ))}
      </div>
    </div>
  );
};

export default AllPosts;
