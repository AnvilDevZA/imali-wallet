import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createFileRoute("/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 bg-[#e0ae6e] text-black py-6 px-6 mb-16">
        <article>
          <h1>Hello!</h1>
        </article>
      </div>
      <Footer />
    </main>
  );
}
