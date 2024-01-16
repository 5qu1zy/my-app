
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './component/Search';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/search' element={<Search/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
