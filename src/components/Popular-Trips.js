import React from 'react';
import Slider from './Trip-Slider';

class PopularTrips extends React.Component{
    render(){
        return(
            <div className = "popular-trips">
                <h1>Popular Trips</h1>
                <Slider/>
            </div>
        )
    }
}

export default PopularTrips;