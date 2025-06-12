import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Contakt from './pages/Contakt';
import Layout from './pages/Layout'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<About/>} />
          <Route path='resume' element={<Resume/>} />
          <Route path='projects' element={<Projects/>} />
          <Route path='contakt' element={<Contakt/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
