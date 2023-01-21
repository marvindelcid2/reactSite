import React, { useState } from 'react';
import './css/Albums.css';
import { GetAllAlbums } from './services/Account';

//Custom CSS for dynamically inserted rows of Albums
const rowStyle = {
  display: "flex",
  alignItems: "center",
  padding: 20,
  backgroundColor: "silver",
  width: "48.45%",
}

const columnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: "gainsboro",
  height: 50,
  width: "50%",
  border: "1.5px solid black",
  padding: 10,
  fontWeight: 500,
}

function Albums() {

  const [albumName, setAlbumName] = useState('Name your album...');
  const [apiResponse, setApiResponse] = useState('Click the Get All Albums button to retrieve the albums');

    //Retrieve all albums, create rows of Albums then place in the state to display
    const retrieveAllAlbums = async () =>{
      const responseAlbums = await GetAllAlbums('a0f7fb78a4fab86','marvcid');

      const arrayOfAlbumRows = responseAlbums.data.map( album =>
        <div className='row' style={rowStyle} key={album.id}>
          <div className = 'column' style={columnStyle}>{album.id}</div>
          <div className = 'column' style={columnStyle}>{album.title}</div>
          <div className = 'column' style={columnStyle}>{album.description}</div>
        </div>
      )
      setApiResponse(arrayOfAlbumRows);

    }

    //**In Progress** - Purpose is to send a POST request to create a new album with user inputted name
  async function CreateAlbum(){
    const responseCreateAlbum = await CreateAlbum('2b3b12f1a681b411b2dde7fa7752e421ac77ed65',albumName);
  }

  //Sets user entered input to the albumName state variable
  function handleInputChange(albumName){
    setAlbumName(albumName.target.value);
  }
  //Handles the onSubmit event to create a new album
  const handleSubmit = (e) => {
    CreateAlbum();
  }


  return (
    <div className="Albums">
      <header className="Albums-header">
          <h1 className="pageTitle">Albums</h1>
        <div>
          <p>
            Enter the name of your new album then hit the button. You can view your new album by clicking on the 'Get All Albums' button bellow
          </p>
          <form onSubmit={handleSubmit}>
            <input type='text' name = 'albumTitle' 
              onChange = {handleInputChange}
              placeholder='Enter album name....' 
              defaultValue = {albumName} >
            </input>
            <button type = 'submit'>Create Album</button>
          </form>
        </div>
        <br/>
        <br/>
        <button onClick= {retrieveAllAlbums}> Get All Albums</button>
        <br/>
        <br/>
        <div className='row' >
          <div className = 'column'>Album ID</div>
          <div className = 'column'>Album Title</div>
          <div className = 'column'>Album Description</div>
        </div>
        <div>
          <div>{apiResponse}</div>
        </div>
        
        </header>
    </div>
  );
}

export default Albums;