import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './layout/Sidebar.tsx';
import Characters from './pages/Characters.tsx';
import Favorites from './pages/Favorites.tsx';
import NoPage from './pages/NoPage.tsx';


function App() {
  return (
    <Router>
      <Sidebar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
