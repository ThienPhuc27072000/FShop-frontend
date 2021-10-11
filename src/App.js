// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Men from './pages/Men';
import Women from './pages/Women';
import BodyIndex from './components/index/BodyIndex';
import MenAccessories from './pages/MenAccessories';
import MenSingle from './pages/MenSingle';
import BodyAbout from './components/about/BodyAbout';
import Payment from './pages/Payment';
import BodyStore from './components/store/BodyStore';
import BodyFaq from './components/faq/BodyFaq';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" component={BodyIndex}/>
        <Route exact path="/men" component={Men}/>
        <Route exact path="/women" component={Women} />
        <Route exact path="/menaccessories" component={MenAccessories} />
        <Route exact path="/mensingle" component={MenSingle} />
        <Route exact path="/about" component={BodyAbout} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/store" component={BodyStore} />
        <Route exact path="/faq" component={BodyFaq} />
      </Switch>
    <Footer />
    </BrowserRouter>  
    </>
  );
}

export default App;
