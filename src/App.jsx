import {
  Hero,
  Work,
  Updates,
  Units,
  Events,
  Publications,
  Videos,
  Partners,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="padding">
        <Work />
      </section>
      <section className="padding bg-gray-200">
        <Updates />
      </section>
      <section className="padding">
        <Units />
      </section>
      <section className="padding">
        <Events />
      </section>
      <section className="bg-gray-200 padding">
        <Publications />
      </section>
      <section className="padding">
        <Videos />
      </section>
      <section className="padding">
        <Partners />
      </section>
      <section className="bg-[#525050] padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
