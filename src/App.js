import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router';
import NavigationBar from './components/NavigationBar/NavigationBar';
import WebSideBar from './components/SideBar/WebSideBar';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Story from './pages/Story';
import BeAPart from './pages/BeAPart';
import SingleStory from './pages/SingleStory';
import SingleBlog from './pages/SingleBlog';
import Register from './pages/Register';


import Dashboard from './pages/Dashboard/Dashboard';
import DashProfile from './pages/Dashboard/DashProfile';

import DashBlog from './pages/Dashboard/DashBlog';
import ShowBlog from './pages/Dashboard/ShowBlog';
import CreateBlog from './pages/Dashboard/CreateBlog';
import UpdateBlog from './pages/Dashboard/UpdateBlog';


import DashStory from './pages/Dashboard/DashStory';
import ShowStory from './pages/Dashboard/ShowStory';
import CreateStory from './pages/Dashboard/CreateStory';




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
export function DashboardRoute({ component: Component, ...rest }) {

  const routerHistory = useHistory();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    let JWTToken = localStorage.getItem('user');
    dashboard();
    async function dashboard() {
      try {
        let res = await axios.get('/dashboard', { headers: { "Authorization": `Bearer ${JWTToken}` } });
        setUserInfo(res.data.user);
      }
      catch (error) {
        console.log(error);
        routerHistory.push('/beapart');
      }
    }
  }, []);

  // window.localStorage.addEventListener('storage', () => {
  //   alert('session storage variable value changed');
  // });

  // function requestUserInfo() {
  //   console.log("helllllllllllllllllllll nooooooooooooooooooooo");

  //   let JWTToken = localStorage.getItem('user');
  //   dashboard();
  //   async function dashboard() {
  //     try {
  //       let res = await axios.get('/dashboard', { headers: { "Authorization": `Bearer ${JWTToken}` } });
  //       setUserInfo(res.data.user);
  //       console.log(userInfo);
  //     }
  //     catch (error) {
  //       console.log(error);
  //       routerHistory.push('/beapart');
  //     }
  //   }
  // }



  return (
    <Route {...rest} component={(props) => (
      <div>
        <WebSideBar userInfo={userInfo} />
        <Component userInfo={userInfo} />
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
        <WebsiteRoute exact path="/register" component={Register}></WebsiteRoute>

        <WebsiteRoute exact path="/story/title" component={SingleStory}></WebsiteRoute>
        <WebsiteRoute exact path="/blog/title" component={SingleBlog}></WebsiteRoute>

        <DashboardRoute exact path="/dashboard" component={Dashboard} ></DashboardRoute>
        <DashboardRoute exact path="/dashboard/blog" component={DashBlog}></DashboardRoute>
        <DashboardRoute exact path="/dashboard/profile" component={DashProfile}></DashboardRoute>
        <DashboardRoute exact path="/dashboard/:category/:blogId" component={ShowBlog}></DashboardRoute>


        <DashboardRoute exact  path="/dashboard/create/new/:category" component={CreateBlog}></DashboardRoute>


        <DashboardRoute exact path="/dashboard/blog/update-blog/:blogId" component={UpdateBlog}></DashboardRoute>

        <DashboardRoute exact path="/dashboard/story" component={DashStory}></DashboardRoute>
        <DashboardRoute exact path="/dashboard/show-story" component={ShowStory}></DashboardRoute>
        <DashboardRoute exact path="/dashboard/create-story" component={CreateStory}></DashboardRoute>

      </Router>
    </div >
  );
}

export default App;
