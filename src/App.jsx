import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Contakt from './pages/Contakt';
import Layout from './pages/Layout';
import Works from './pages/Works';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<About/>} />
          <Route path='resume' element={<Resume/>} />
          <Route path='works' element={<Works/>} />
          <Route path='contakt' element={<Contakt/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
