import { useNavigate } from 'react-router-dom';
import Albums from './Albums';
import React, { useState } from 'react';
import { GetAllAlbums } from './services/Account';

function Home() {
  const [listOfAlbums, setListOfAlbums] = useState([]);

  let navigate = useNavigate();

  function testRedirect(){
    GetAllAlbums('a0f7fb78a4fab86','marvcid')
    .then(albums => {
      setListOfAlbums(albums)
    })
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
