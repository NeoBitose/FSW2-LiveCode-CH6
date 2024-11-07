import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavbarWithStyling from './components/navbarWithStyling';


function App() {
  const [count, setCount] = useState(0);
  const menu = ["Menu", "About", "Logout"];
  const name = ["Ahmad"];
  const age = ["20"];

  return (
    <>
      <NavbarWithStyling menu={menu} name={name} age={age}>

      </NavbarWithStyling>
      <NavbarWithStyling
        menu={["Navbar1"]}
        name={["Alif"]}
        age={["20"]}
      ></NavbarWithStyling>
      <NavbarWithStyling
        menu={["satu", "dua", "tiga"]}
        name={["Ramadhan"]}
        age={["20"]}
      ></NavbarWithStyling>
    </>
  );
}

export default App;
