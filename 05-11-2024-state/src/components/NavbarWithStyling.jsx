/* eslint-disable */

import React from 'react';
import './NavbarWithStyling.css';
import About from './about/About';
import HoverButton from './Button/HoverButton';
import { useState } from 'react';

// let biodata = {}



function NavbarWithStyling({ menu, name, age }) {
    let List;
    const [biodata, setBiodata] = useState({});

    function handleTriggerSelect() {
        setBiodata({
            ...biodata,
            name,
            age
        })
    }

    if (menu) {
        List = (
            <ul className="navbar-menu">
                {menu.map((item, index) => (
                    <li key={index} className="navbar-item">
                        {item}
                    </li>
                ))}
            </ul>
        );
    } else {
        List = (
            <h1>tidak ditemukan</h1>
        );
    }

    return (
        <>
            <div className="overlay" onClick={""}>
                <div className="modal">
                    {/* <button className={"styles.closeButton"} onClick={""}>&times;</button> */}
                    <div className={"styles.content"}>Biodata: {biodata.name}, {biodata.age}</div>
                </div>
            </div>
            <nav className="navbar">
                <h1 className="navbar-title">FSW 2 {name}</h1>
                {List}
            </nav>
            <div className="about">
                <About name={name[0]} age={age[0]} />
            </div>
            <HoverButton onSelect={() => handleTriggerSelect(name)}>
                <p>Test Children</p>
            </HoverButton>
        </>
    );
}

export default NavbarWithStyling;
