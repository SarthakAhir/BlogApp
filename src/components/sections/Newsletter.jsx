import { Button, Container, Input } from "../index";

function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center text-white">

          <h2 className="text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Subscribe to receive the latest articles and updates from BlogApp.
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />

            <Button variant="secondary">
              Subscribe
            </Button>
          </form>

        </div>
      </Container>
    </section>
  );
}

export default Newsletter;