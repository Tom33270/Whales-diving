import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Activities from './sections/Activities';
import Pricing from './sections/Pricing';
import CetaceanBanner from './sections/CetaceanBanner';
import Reviews from './sections/Reviews';
import About from './sections/About';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Activities />
        <Pricing />
        <CetaceanBanner />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}