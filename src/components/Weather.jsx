import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'

export const Weather = () => {
   
const [ climate, setClimate ] = useState({});

useEffect(() => {
    const success = pos =>{
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=206223e846c1d96c0b4774776677bdda`)
        .then(res => setClimate(res.data));  
    };
    const error = err => {
        alert("Debes activar la geolocalizacion para que el app funcione")
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    
    navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    let celcius = Math.round(climate?.main?.temp_max - 273.15);
    let faren = Math.round((celcius * 1.8) + 32);
    
    const [ temp, setTemp ] = useState(true);
    const change = () => setTemp(!temp)
    

    const spinner = document.getElementById('loading');

    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    } 
/*  console.log(climate); */
    return (
        
        <div className='climate'>
          
        <div  className='Card'>
            <h1>Hello Weather App</h1>
           <h2>Country: {climate?.sys?.country}</h2>
           <p>City: {climate.name}</p>
           <p>Condition: {climate?.weather?.[0].description}</p>
           <img src={`https://openweathermap.org/img/wn/${climate?.weather?.[0].icon}@4x.png`} />
           <p>Temp Max: {temp ? celcius : faren}º</p>
           <button onClick={change}>Change Cº/Fº</button>
           <div id='loading' className="loading">
            <h2 className='textload'>Loading</h2>
            </div> 
        </div>
        </div>
    );
};

