import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Button from './components/Button'
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Cart from './pages/Cart'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Button/>
     
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
    </div>
  );
}

export default App;
