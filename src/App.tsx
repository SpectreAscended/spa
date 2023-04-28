import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Cta />
        <Footer />
      </main>
    </>
  );
};

export default App;
