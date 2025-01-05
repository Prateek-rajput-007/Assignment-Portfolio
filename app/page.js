import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavigationBar from './components/NavigationBar';
import PortFolio from './components/PortFolio';
import SkillsShowcase from './components/SkillsShowcase';
import ContactUs from './components/Contact';

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <AboutMe />
      <SkillsShowcase />
      <PortFolio />
      <ContactUs/>
      <Footer />
    </main>
  );
}
