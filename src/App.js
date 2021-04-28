import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Story from './pages/Story';
import BeAPart from './pages/BeAPart';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function App() {
  return (
    <div className="App">
      <Router><NavigationBar></NavigationBar>
        <Route exact path="/" component={Home}></Route>
        <Route path="/story" component={Story}></Route>
        <Route exact path="/blog" component={Blog}></Route>
        <Route exact path="/beapart" component={BeAPart}></Route>
      </Router>
    </div>
  );
}

export default App;
