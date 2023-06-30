import Post from "./Post";
const w = 300;
const h = 200;

const blogElements = [
  {
    width: 700,
    height: 200,
    classes: "flex-col md:row-span-2",
  },
  {
    width: 300,
    height: 200,
    classes: "",
  },
  {
    width: 700,
    height: 200,
    classes: "",
  },
  {
    width: 700,
    height: 200,
    classes: "md:col-span-2 md:items-center",
  },
];

async function getRecentPosts() {
  const posts = await fetch("https://dummyjson.com/products?limit=4");
  return posts.json();
}

const RecentPosts = async () => {
  const posts = (await getRecentPosts()).products;
  return (
    <div className="flex flex-col mx-6">
      <h2 className="text-2xl font-medium mb-3">Recent Blog Posts</h2>
      {posts && (
        <div className="grid gap-3">
          {blogElements.map((post, index) => (
            <Post
              classes={post.classes}
              imgWidth={post.width}
              imgHeight={post.height}
              index={index}
              title={posts[index].title}
              description={posts[index].description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
