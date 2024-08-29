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
  Aboutafrica,
  Donate,
  Volunteer,
  Projects,
  CustomerReviews,
  PdaafricaContact,
} from "./sections";
import Nav from "./components/Nav";
import PDAAFRICA from "./pages/PDAAFRICA";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <main className="relative">
      <header>
        <Nav />
      </header>

      {location.pathname === "/" ? (
        // Home page layout with all the sections
        <>
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
        </>
      ) : location.pathname === "/pdaafrica" ? (
        // PDAAFRICA page layout
        <>
          <PDAAFRICA />
          {/* Add more sections here as needed */}
          <section className="padding">
            <Aboutafrica />
          </section>
          <section className="padding bg-gray-200">
            <Projects />
          </section>
          <section className="padding">
            <CustomerReviews />
          </section>
          <section className="padding">
            <Volunteer />
          </section>
          <section className="padding">
            <PdaafricaContact />
          </section>
        </>
      ) : (
        // Outlet for other routes like Contact page
        <Outlet />
      )}

      <section className="bg-[#525050] padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
