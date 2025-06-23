import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { NoteProvider } from './context/NoteContext';
import { Home } from './Pages/Home';
import { LoginPage } from './Pages/LoginPage';
import { RegisterPage } from './Pages/RegisterPage';

function App() {
  return (
    <HashRouter>
      <NoteProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </NoteProvider>
    </HashRouter>
  );
}

export default App;
