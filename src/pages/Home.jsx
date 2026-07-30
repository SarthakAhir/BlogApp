import { useState, useEffect } from "react";
import { Container, PostCard, Button } from "../components";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <>
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
          <Container>
            <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">

              <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
                Write.
                <br />
                Share.
                <br />
                Inspire.
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-blue-100">
                Publish your ideas, discover amazing stories, and connect with
                readers from around the world.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/signup">
                  <Button variant="gradient">
                    Get Started
                  </Button>
                </Link>

                <Link to="/login">
                  <Button
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white hover:text-slate-900"
                  >
                    Login
                  </Button>
                </Link>
              </div>

            </div>
          </Container>
        </section>

        {/* Empty State */}
        <section className="py-24">
          <Container>

            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">

              <h2 className="text-3xl font-bold text-slate-800">
                No Posts Yet
              </h2>

              <p className="mt-4 text-slate-500">
                Be the first person to publish an article on InkFlow.
              </p>

            </div>

          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <Container>

          <div className="flex min-h-[65vh] flex-col items-center justify-center text-center">

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
              Discover Amazing Stories
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-blue-100">
              Read articles written by creators from around the world.
            </p>

          </div>

        </Container>
      </section>

      {/* Posts */}
      <section className="bg-slate-50 py-16">
        <Container>

          <div className="mb-10">

            <h2 className="text-4xl font-bold text-slate-800">
              Latest Articles
            </h2>

            <p className="mt-2 text-slate-500">
              Fresh content from our community.
            </p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>

        </Container>
      </section>
    </>
  );
}

export default Home;