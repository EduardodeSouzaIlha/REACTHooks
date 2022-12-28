import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HookUseContext } from './components/HookUseContext';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ERROR404 from './pages/ERROR404';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <HookUseContext>
        <BrowserRouter>
         <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<ERROR404/>}/>
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
