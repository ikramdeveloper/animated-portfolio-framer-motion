import { Cursor } from "@/components/_shared";
import { Navbar } from "@/components/layout";
import { Hero, Parallax, Services } from "@/components/home";

const HomePage = () => {
  return (
    <main className="bg-gray-100 text-gray-600">
      <Cursor />
      <section className="w-screen h-screen overflow-hidden snap-center bg-hero-gradient">
        <Navbar />
        <Hero />
      </section>
      <section className="w-screen h-screen overflow-hidden snap-center">
        <Parallax type="services" />
      </section>
      <section className="w-screen h-screen overflow-hidden snap-center">
        <Services />
      </section>
      <section className="w-screen h-screen overflow-hidden snap-center">
        <Parallax type="portfolio" />
      </section>
    </main>
  );
};

export default HomePage;
