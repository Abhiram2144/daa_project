import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Fibonacci from './pages/Fibonacci';
import CoinChange from './pages/CoinChange';
import Knapsack from './pages/Knapsack';
import MCM from './pages/MCM';
import About from './pages/About';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App font-custom-font">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/fibonacci' element={<Fibonacci/>}></Route>
        <Route path='/coinchange' element={<CoinChange/>}></Route>
        <Route path='/knapsack' element={<Knapsack/>}></Route>
        <Route path='/mcm' element={<MCM/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
