import { MotionConfig } from 'motion/react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Ecosystem } from './components/Ecosystem';
import { Floaters } from './components/ui/Floaters';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Numbers } from './components/Numbers';
import { Offers } from './components/Offers';
import { World } from './components/World';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Vai al contenuto
      </a>
      <Floaters />
      <Navbar />
      <main id="main">
        <Hero />
        <Numbers />
        <About />
        <World />
        <Ecosystem />
        <Offers />
        <Experience />
        <Contact />
      </main>
    </MotionConfig>
  );
}
