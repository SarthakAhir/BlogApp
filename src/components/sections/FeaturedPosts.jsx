import { Link } from "react-router-dom";
import { PostCard, Button, Container } from "../index";

function FeaturedPosts({ posts }) {
  if (!posts.length) return null;

  const featuredPosts = posts.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              Featured Articles
            </h2>

            <p className="mt-2 text-slate-500">
              Hand-picked stories from our latest collection.
            </p>
          </div>

          <Link to="/all-posts">
            <Button variant="outline">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedPosts;