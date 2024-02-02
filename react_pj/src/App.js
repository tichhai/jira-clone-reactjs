import {  Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
import LoginJira from './pages/Jira/LoginJira/LoginJira';
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent'
import Home from './components/Home/Home'
import JiraTemplate from './templates/JiraTemplate/JiraTemplate';
import Index from './pages/Jira/ProjectDetail';
import CreateProject from './pages/Jira/CreateProject/CreateProject';

function App() {
  return (
      <>
        <LoadingComponent/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<LoginTemplate Component={LoginJira}/>}/>
          <Route path='/jira' element={<JiraTemplate Component={Index}/>}/>
          <Route path='/createproject' element={<JiraTemplate Component={CreateProject}/>}/>
        </Routes>
      </>
  );
}

export default App;
