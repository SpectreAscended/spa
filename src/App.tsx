import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Cta from './components/Cta';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Cta />
      </main>
    </>
  );
};

export default App;
