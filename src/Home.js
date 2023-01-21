import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Home() {

  let navigate = useNavigate();

  function goToAlbumsPage(){
    navigate('/Albums');
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick= {goToAlbumsPage}>Albums Page</button>
      </header>
    </div>
  );
}

export default Home;
