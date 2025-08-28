
import './Assets/scss/main.scss';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/home" element={<HomePage />} />
    //   </Routes>
    // </BrowserRouter>
    <HomePage />
  );
}

export default App;
