// import logo from './logo.svg';

import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Landing />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="users" element={<>USERS</>} />
    //     <Route path="*" element={<>404</>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
