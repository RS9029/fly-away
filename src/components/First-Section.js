import React from 'react';

class FirstSection extends React.Component{
    render(){
        return(
            <div className = "first-section">
                <form>
                    <img id = "globe" src = "/Resources/globe.svg" alt = "world"></img>
                    <img id = "logo" src = "/Resources/logo.svg" alt = "logo"></img>
                    <div className = "search-location">
                        <img src = "/Resources/globeIcon.svg" alt = ""></img>
                        <input type = "text" placeholder = "Destination" id = "find-location"></input>
                    </div>
                    <ul className = "travel-options">
                        <li className = "travel-option">
                            <label className = 'calendar-label' htmlFor = "departure">Departure: </label>
                            <input className = "departure-arrival" type = "date" id = "departure" name = "departure"></input>
                        </li>
                        <li className = "travel-option">
                            <label className = 'calendar-label' htmlFor = "departure" name = "arrival">Arrival: </label>
                            <input className = "departure-arrival" type = "date" id = "arrival" name = "arrival"></input>
                        </li>
                        <li className = "travel-option">
                            <img src = "/Resources/person.svg" id = "passenger" alt = "passenger-icon"></img>
                            <select id = "select-travellers">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7+</option>
                            </select>
                        </li>
                    </ul>
                    <button id = "find-tickets">Find Tickets</button>
                </form>
            </div>
                
            )
    }
}

export default FirstSection;