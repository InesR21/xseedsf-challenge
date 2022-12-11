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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1E1E1E',
      paper: '#1E1E1E',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Sidebar>
          <div className="App">
            <Routes>
              <Route path="/" element={<Characters />} />
              <Route path="/favoritos" element={<Favorites />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </Sidebar>
      </ThemeProvider>
    </Router>
  )
}

export default App;
