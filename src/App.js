import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path = '/contact' element = {<Contact />} />
      </Routes>

      <footer>
        <div>Zuri<span style={{ color: "red", fontSize: "10px"}}>*</span>Internship</div>
        <div style={{color:"gray", fontSize:"9px"}}>HNG Internship 9 Frontend task</div>
        <div>
          <p style={{padding:0, margin:0}}>Ingressive</p>
          <p style={{padding:0, margin:0}}>For Good</p>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
