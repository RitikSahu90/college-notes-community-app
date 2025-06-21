import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoteProvider } from './context/NoteContext';
import { Home } from './Pages/Home';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <NoteProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </NoteProvider>
    </BrowserRouter>
  );
}

export default App;
