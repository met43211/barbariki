import Footer from './components/Footer';
import Header from './components/Header';
import SectionEight from './components/SectionEight';
import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionOneHalf from './components/SectionOneHalf';
import SectionSeven from './components/SectionSeven';
import SectionSix from './components/SectionSix';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import './static/css/style.css'
import './static/css/style.min.css'
import up from './assets/up.png'

function App() {
  return (
    <div className="App"  id='up'>
      <div className='wrapper header-wrapper'>
        <Header/>
      </div>
      <div className='wrapper s1-wrapper'>
        <SectionOne/>
      </div>
      <div className='wrapper'>
        <SectionOneHalf/>
      </div>
      <div className='wrapper s2-wrapper'  id='about'>
        <SectionTwo/>
      </div>
      <div className='wrapper s3-wrapper'  id='services'>
        <SectionThree/>
      </div>
      <div className='wrapper s4-wrapper' id='portfolio'>
        <SectionFour/>
      </div>
      <div className='wrapper s5-wrapper'>
        <SectionFive/>
      </div>
      <div className='wrapper s6-wrapper'>
        <SectionSix/>
      </div>
      <div className='wrapper s7-wrapper' id='follow'>
        <SectionSeven/>
      </div>
      <div className='wrapper s8-wrapper'>
        <SectionEight/>
      </div>
      <div className='wrapper footer-wrapper' id='contacts'>
        <Footer/>
      </div>
      <div className='up'>
        <a href='#up'>
          <img src={up}></img>
        </a>
      </div>
    </div>
  );
}

export default App;
