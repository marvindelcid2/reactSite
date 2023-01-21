import React, { useState } from 'react';
import './Albums.css';
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

  const [albumName, setAlbumName] = useState('');
  const [apiResponse, setApiResponse] = useState('Click the Get All Albums button to retrieve your albums');

    //Pull all albums and place in state
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

  async function CreateAlbum(){
    
  }

  //Sets user entered input to the State
  function handleInputChange(event){
    //setAlbumName(event.target.value);
    //this.setState({ [event.target.name] : event.target.value});
  }


  return (
    <div className="Albums">
      <header className="Albums-header">
        <p>
          <h1 className="pageTitle">Albums</h1>
        </p>
        <div>
          <p>
            Enter the name of your new album then hit the button. You can view your new album by clicking on the 'Get All Albums' button bellow
          </p>
          <form onSubmit={()=>CreateAlbum()}>
            <input name = 'albumTitle' 
              onChange = {()=>handleInputChange} 
              value = '' >
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