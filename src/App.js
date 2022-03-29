import './App.scss';
// import Landing from './components/landing/Landing.js';
import Collection from './components/collection/Collection.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mynft from './components/mynft/Mynft';
import Raraity from './components/rarity/Raraity.js';
import Navbar from './components/landing/header/Navbar.js';
import Footer from './components/landing/footer/Footer.js';
import useEagerConnect from './hooks/useEagerConnect'
// import Loader from './Loader/Loader';
function App() {
  useEagerConnect()
  return (
    <>
          <Router>
            {/* <Loader/> */}
            {/* <Navbar/> */}
            <Switch>
              <Route exact path='/' component={Navbar} />
              <Route exact path='/collection' component={Collection} />
              <Route exact path='/category' component={Raraity} />
              <Route exact path='/mynft' component={Mynft} />
            </Switch>
            <Footer/>
          </Router>
    </>
  );
}

export default App;
