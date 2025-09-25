import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OurLegacy from './pages/OurLegacy';
import BlogPage from './pages/BlogPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="our-legacy" element={<OurLegacy />} />
          <Route path="blogs" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;