import { useNavigate } from 'react-router-dom';
import React from 'react';
import './css/Home.css';

function Home() {

  let navigate = useNavigate();

  //Routes the user to the Albums page
  function goToAlbumsPage(){
    navigate('/Albums');
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <h1  className="PageTitle">Welcome to My React Project</h1>
        <p>
          This site reaches out to the Imgur API to retrieve all photo albums from my account.
          <br/>Please click the button below to go to the Albums page where you'll be able to view all my 
          photo albums. 
        </p>
        <button onClick= {goToAlbumsPage}>Albums Page</button>
        <br/><br/>
      </header>
    </div>
  );
}

export default Home;
