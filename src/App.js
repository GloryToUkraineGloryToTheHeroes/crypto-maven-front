import { Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage.js/MainPage';
import DeletePage from './pages/DeletePage.js/DeletePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/main' element={<MainPage />}/>
        <Route path='/how-to-delete-account' element={<DeletePage />}/>
        <Route path='*' element={<Navigate to='/main' />} />
      </Routes>
    </div>
  );
}

export default App;
