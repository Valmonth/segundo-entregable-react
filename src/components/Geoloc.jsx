import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Geoloc = () => {

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude)
        const [ lati, setLati ] = useState({});
        
        setLati(position.coords.latitude);
        console.log(lati);
        
    });
    
    return (
        <div className='Card'>
            <h1>GeoLoc</h1>
            <p>Position Lat / Lon: </p>
            
        </div>
    );
};
