import React from 'react';
import FirstSection from './components/First-Section';
import PopularTrips from './components/Popular-Trips';
import WeFlyAnywhere from "./components/WeFlyAnywhere";
import Luggage from "./components/Luggage";
import Footer from "./components/Footer";

function App(){
    return (
        <div className = "main-container">
            <FirstSection/>
            <PopularTrips/>
            <WeFlyAnywhere/>
            <Luggage/>
            <Footer/>
        </div>
    )
}

export default App;