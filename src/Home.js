import { useNavigate } from 'react-router-dom';
import Albums from './Albums';
import React from 'react';

function Home() {

  let navigate = useNavigate();

  function testRedirect(){
    navigate('/Albums')
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick= {testRedirect}>Lets go!</button>
      </header>
    </div>
  );
}

export default Home;
