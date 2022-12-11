import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from './layout/Sidebar';
import Characters from './pages/Characters';
import Favorites from './pages/Favorites';
import NoPage from './pages/NoPage';


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
