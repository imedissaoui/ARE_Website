import React, { Component,useEffect } from "react";
import HomePage from "./Pages/HomePage";
import EventsPage from "./Pages/EventsPage";
import ErrorPage from "./Pages/ErrorPage";
import AOS from "aos";
import {Route,Switch} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "aos/dist/aos.css";
import CompetitionsPage from "./Pages/CompetitionsPage";
import WorkshopsPage from "./Pages/WorkshopsPage";
import ActivitiesSection from "./Components/ActivitiesItems/cards";
import Members from "./Pages/MembersPage";
import GalleryPage from "./Pages/GalleryPage2";
import ActivitiesPage from "./Pages/ActivitiesPage";
import ProjectsPage from "./Pages/ProjectsPage";
import RoboCup from "./Components/RoboCupItems/RoboCup";


function App (){
    useEffect(() => {
      AOS.init({duration:2000});
      
    }, []);
    return <>
      <Router>
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact  path="/events" component={EventsPage}/>
          <Route exact  path="/competitions" component={CompetitionsPage}/>
          <Route exact  path="/workshops" component={WorkshopsPage}/>
          <Route exact  path="/activities" component={ActivitiesPage}/>
          <Route exact  path="/members" component={Members}/>
          <Route exact  path="/gallery" component={GalleryPage}/>
          <Route exact  path="/projects" component={ProjectsPage}/>
          <Route exact  path="/Robocupensi" component={RoboCup}/>
          <Route path="*" component={ErrorPage}/>
        </Switch> 
      </Router> 
    </>
  }

export default App;