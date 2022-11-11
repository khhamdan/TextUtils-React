import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
// import {
//    BrowserRouter as Router,
//    Routes as Switch,  
//    Route,
//  } from "react-router-dom";
 

function App() {
   const [darkMode,setDarkMode] = useState('light'); //whether dark mode is enabled or not
   const [darkGreenMode,setDarkGreenMode] = useState('light'); //whether dark greenn mode is enabled or not
   const [alert,setAlert] = useState(null);

   const showAlert = (message,type)=>
   {
      setAlert({
         msg:message,
         type:type
      })
      setTimeout(()=>
      {
         setAlert(null);
      
      },1500);
   }

   const toggleMode = ()=>
   {
      if(darkMode === 'light')
      {
      setDarkMode("dark");
      document.body.style.backgroundColor="#042743";
         showAlert("Dark mode has been enabled","success");
         document.title = "Hamdan's App - Dark Mode";
         // setInterval(() => {
         //    document.title = "Textutils is amazing mode";
         // }, 2000);
         // setInterval(() => {
         //    document.title = "Install Textutils now";            
         // }, 1500);
   }
      else
      {
      setDarkMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title = "Hamdan's App - Light Mode";

      }
   }

   const greenToggleMode = ()=>
   {
      if(darkGreenMode === 'light')
      {
         setDarkGreenMode("#198754");
         document.body.style.backgroundColor="#198754";
         showAlert("Green mode has been enabled","success");
   }
      else
      {
         setDarkGreenMode('light');
         document.body.style.backgroundColor="white";
         showAlert("Light mode has been enabled","success");
      }
   }

   return (
    <>
    {/* we have sended here state with props and function with props, actually mode and toggleMode will be used in navbar */}
   {/* <Router> */}
    <Navbar title="MyApp" aboutText="About us" mode1={darkMode} mode2={darkGreenMode} toggleMode={toggleMode} greenToggleMode={greenToggleMode} /> 
      <Alert alert = {alert}/>
    <div className="container my-3" >
   {/* <Switch> */}
          {/* <Route exact path="/about" element={}> */}
          {/* <About/> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={}> */}
          <TextForm showAlert={showAlert} heading="Enter the text" mode={darkMode} />
          {/* </Route> */}
   {/* </Switch> */}
    </div>
   {/* </Router> */}
    </>
 );
}

export default App;
  