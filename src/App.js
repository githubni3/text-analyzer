import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactus from "./components/Contactus";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(false);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "black";
    //   showAlert("  :Dark Mode is enabled ", "success");
    //   setTimeout(() => {
    //     setAlert(false);
    //   }, 1500);
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   showAlert("  :Light mode is enabled", "success");
    //   setTimeout(() => {
    //     setAlert(false);
    //   }, 1500);
    // }
  };

  return (
    <>
        {/* <Navbar title="TextUtils" aboutText="About"/> */}
        
        {/* without routing */}
        {/* <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" /> */}

        {/* with routing */}
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
