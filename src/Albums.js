import React from 'react';
import { useLocation } from 'react-router-dom';
import './Albums.css';

function Albums() {

  const location = useLocation();
  console.log('here is the state in Albums page');
  console.log(location.state)
  //console.log(location.state.listOfAlbums.data[0].id)
  const listOfAlbums = location.state.listOfAlbums.data;
  console.log(listOfAlbums);
  return (
    <div className="Albums">
      <header className="Albums-header">
        <p>
          Welcome to the albums page
        </p>
        <p>Table</p>
        {listOfAlbums.map((album) => (
          <div className='row'>
            <div className = 'column'  key={album.id}>{album.id}</div>
          </div>
        ))}
        
        
        </header>
    </div>
  );
}

export default Albums;