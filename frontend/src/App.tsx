import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState("")
  useEffect(()=> {
    const getData = async () => {
      const response = await fetch("https://localhost:44334/api/questions")
      const data = await response.json();
      setResult(JSON.stringify(data))
    }
    getData();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {result}
        </p>
      </header>
    </div>
  );
}

export default App;
