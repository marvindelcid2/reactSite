import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Albums from './Albums';
import Home from './Home';


function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/reactSite" element={<Home/>}/>
        <Route exact path="/Albums" element={<Albums/>}/>
      </Routes>
  );
}

export default App;
