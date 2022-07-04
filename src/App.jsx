import { useState, useEffect } from 'react'
import { Weather } from './components/Weather'
import './App.css'

function App() {
 
  const spinner = document.getElementById('loading');

  if (spinner && !spinner.hasAttribute('hidden')) {
    spinner.setAttribute('hidden', 'true');
  } 
  return (
    <div className="App">
      
     <Weather />
    
    </div>
  )
}

export default App
