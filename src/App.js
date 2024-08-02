
import { useState } from 'react';
import './App.css';
import TextForm from './Components/Textform';
import Navbar from './Components/Navbar';
//import Example from './Components/Example';
//import About from './Components/About';
// import Alert from './Components/Alert';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   BrowserRouter as Router,
//   router,
//   Route,
//   Routes
// } from "react-router-dom";

// import About from './Components/About';
import Alert from './Components/Alert';


function App() {




const [mode,setMode]=useState('light');//whether dark mood is enabled or not
const[alert,setAlert]= useState(null);

const showalert=(message,type)=>{
    setAlert({
        message:message,
        type:type
    })
    // setTimeout(() => {
    //   setAlert(null)
    // }, 2000);

  }

const greenmode=()=>{

  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#1a6743'
    showalert("Green mode has been enabled","info")

  }
  else{
    setMode ('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","info")

  }

}

const Yellowmode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#ffbf00'
    showalert("Yellow mode has been enabled","info")

  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showalert("light mode has been enabled","info")

  }
}

const togglemode=()=>{

    if(mode === 'light'){
      setMode ('dark');
      
      document.body.style.backgroundColor='#0b254b';
      showalert("Dark mode is been enabled","info")
      document.title='Textutils - Dark mode'
      //212529
    }  
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode is been enabled","info")
      document.title='TextUtils - Light mode'
      // setInterval(() => {
      //   document.title='TextUtils is amazing raja jee'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install it now'
      // }, 1500);

    //   const router = createBrowserRouter([
    //     {
    //       path: "/",
    //       element:  <TextForm heading="Enter the text to analyze" showalert={showalert} mode={mode}/>
          
    //     },
    //     {
    //       path: "/about",
    //       element: <About />
    //     },
    //   ]);
 
    // }
}
}
  return (
    <>


{/* <Router> */}
      <Navbar title="TextUtil02" AboutText="About Us" mode={mode} togglemode={togglemode} greenmode={greenmode} Yellowmode={Yellowmode}/>
      <Alert alert={alert}/>   
    
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={ */}
           <TextForm heading="Enter the text to analyze" showalert={showalert} mode={mode}/> 
          {/*  } /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/about" element={<About />} />
      </Routes>
    </Router> */}

      {/* <Example heading="Enter the text to analyze" mode={mode}/> */}
    

   </>  
  );
}


export default App;