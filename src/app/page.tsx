import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Designs from '@/components/Designs';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import CaseStudy from '@/components/CaseStudy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Designs />
        <Skills />
        <Services />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
