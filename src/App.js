import './App.css';
import Navbar from './home/Navbar';
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GoogleMaps from './google-maps/GoogleMaps';
import Countries from './countries/Countries';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/maps" component={GoogleMaps} />
        <Route path="/countries" component={Countries} />
      </Switch>
    </Router>
  );
}

export default App;
