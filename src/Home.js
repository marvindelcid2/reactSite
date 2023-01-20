import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GetAllAlbums } from './services/Account';

function Home() {
  const [listOfAlbums, setListOfAlbums] = useState([]);
  const [goToAlbums, setGoToAlbums] = useState(false);
  let navigate = useNavigate();

  useEffect( () => {
    if(goToAlbums == true){
      navigate('/Albums', { state: {listOfAlbums}});
    }
  })

  async function getAlbumsThenNavigate(){
    const responseAlbums = await GetAllAlbums('a0f7fb78a4fab86','marvcid');
    setListOfAlbums(responseAlbums, setGoToAlbums(responseAlbums.success));
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick= {getAlbumsThenNavigate}>Lets go!</button>
      </header>
    </div>
  );
}

export default Home;
