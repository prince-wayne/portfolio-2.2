import React from "react";
import ReactDOM from "react-dom";

// style sheets
import "./index.css";

// pages
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/projects.jsx";

import reportWebVitals from "./reportWebVitals";
import { FormProvider } from "./context/FormContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// compondents,

import HamburgerMenu from "./components/popups/Hamburger Menu/Hamburger Menu";
import NavBar from "./components/Navigation Bar/Nav bar.jsx";
import Overlay from "./components/popups/Overlay";

const DEVELOPMENTAL = false;
if (DEVELOPMENTAL) {
  alert(
    "Portfolio is in development. Styles and content are not final. No personal information is used in the contact form.",
  );
}

// console.log("ReachDom", ReactDOM.createRoot);
const root = ReactDOM.createRoot(document.getElementById("root"));

const five = 5;
console.log("Five check:", five);
const innerWidth = window.innerWidth;
console.log("Window inner width check:", innerWidth);

if (innerWidth <= 768) {
  console.log("Mobile view detected.");
} else if (innerWidth > 768) {
  console.log("Desktop view detected.");
}

const navigationSelector = () => {
  if (window.innerWidth <= 768) {
    return (
      <Overlay
        className="hamburger--menu__Image"
        type="Image"
        source="Images/Icons/Hamburger Icons/icons8-menu-24.png"
      >
        {/* declaring that this overlay is a btn */}
        <HamburgerMenu />
      </Overlay>
    );
  } else {
    return <NavBar />;
  }
};

console.log("root log check");
root.render(
  <React.StrictMode>
    <FormProvider>
      <BrowserRouter>
        {navigationSelector()}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </FormProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
