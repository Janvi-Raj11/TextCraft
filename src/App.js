import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   } from "react-router-dom";


function App() {
      const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
      const [alert, setAlert]=useState(null);

      const displayAlert = (message, type) =>{

        setAlert({
          msg:message,
          type:type
        });

        setTimeout(() =>{
          setAlert(null);
        }, 1500);

      }

      const toggleMode = () =>{
        if(mode ==='light'){
          setMode('dark');
          document.body.style.backgroundColor = "#1e1e2f";
          displayAlert("Dark mode has been enabled", "success");
          document.title = "TextCraft-Dark Mode";

        }else{
          setMode('light');
          document.body.style.backgroundColor = "white";
          displayAlert("Light mode has been enabled", "success");
          document.title = "TextCraft-Light Mode";


        }

      }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextCraft" mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
     
      <div className="container my-3">
      <TextForm heading="Welcome to the Text Analyzer!" mode={mode} displayAlert={displayAlert}/>
       </div> 
     {/* </Router> */}
    </>
  );
}

export default App;
