import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
// import Services from './components/Services';
// import Products from './components/Products';
// import Team from './components/Team';
import Contact from './components/Contact';
import MenuFood from './components/MenuFood';

import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <>
      <Header />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element> 
      <Element name="menufood">
        <MenuFood />
      </Element>
      <Element name="contact">
        <Contact />
      </Element> 
      <Footer />
    </>
    </ParallaxProvider>
  );
}

export default App;
