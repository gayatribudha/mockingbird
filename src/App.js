import NavigationBar from './components/NavigationBar/NavigationBar';
import SideBar from './components/SideBar/SideBar';
import WebSideBar from './components/SideBar/WebSideBar';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Story from './pages/Story';
import BeAPart from './pages/BeAPart';
import SingleStory from './pages/SingleStory';
import SingleBlog from './pages/SingleBlog';
import Dashboard from './pages/Dashboard/Dashboard';
import DashBlog from './pages/Dashboard/DashBlog';
import DashStory from './pages/Dashboard/DashStory';
import DashProfile from './pages/Dashboard/DashProfile';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


export const WebsiteRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      <div>
        <NavigationBar />
        <Component {...props} />
      </div>
    )}
    />
  )
}
export const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      <div>
        <WebSideBar />
        <Component {...props} />
      </div>
    )}
    />
  );
};


function App() {
  return (
    <div className="App">
      <Router>
        <WebsiteRoute exact path="/" component={Home}></WebsiteRoute>
        <WebsiteRoute exact path="/story" component={Story}></WebsiteRoute>
        <WebsiteRoute exact path="/blog" component={Blog}></WebsiteRoute>
        <WebsiteRoute exact path="/beapart" component={BeAPart}></WebsiteRoute>
        <WebsiteRoute exact path="/story/title" component={SingleStory}></WebsiteRoute>
        <WebsiteRoute exact path="/blog/title" component={SingleBlog}></WebsiteRoute>

        <DashboardRoute exact path="/dashboard" component={Dashboard}></DashboardRoute>
        <DashboardRoute exact path="/dashboard/blog" component={DashBlog}></DashboardRoute>
        <DashboardRoute exact path="/dashboard/story" component={DashStory}></DashboardRoute>
        <DashboardRoute exact path="/dashboard/profile" component={DashProfile}></DashboardRoute>

      </Router>
    </div >
  );
}

export default App;
