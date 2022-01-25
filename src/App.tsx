import Particles from "react-tsparticles"
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Intro } from './components/Intro/Intro'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Contact } from './components/Contact/Contact'
import { Particle } from './components/Particles/Particles';

import './App.css';

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer/>
      {/* <Intro></Intro>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
