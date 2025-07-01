import Header from './components/header.jsx';
import HeroSection from './components/HeroSection.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header /> 
      <HeroSection />
      <CustomCursor />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}