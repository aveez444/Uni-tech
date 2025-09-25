import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OurLegacy from './pages/OurLegacy';
import BlogPage from './pages/BlogPage';
import ContactUs from './pages/ContactUs';
import ProductORing from './products/ProductORing';
import ProductRubberGaskets from './products/ProductRubberGaskets';
import ProductRubberBellows from './products/ProductRubberBellows';
import ProductOilSeals from './products/ProductOilSeals';
import ProductRubberRollers from './products/ProductRubberRollers';
import ProductRubberProfile from './products/ProductRubberProfile';
import ProductConveyorRollers from './products/ProductConveyorRollers';
import ProductAutomotiveMoldedRubberParts from './products/ProductAutomotiveMoldedRubberParts';
import ProductFlangeGaskets from './products/ProductFlangeGaskets';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="our-legacy" element={<OurLegacy />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="contact" element={<ContactUs />} />

          {/* Products */}
          <Route path="/products/o-rings" element={<ProductORing />} />
          <Route path="/products/oil-seals" element={<ProductOilSeals />} />
          <Route path="/products/rubber-bellows" element={<ProductRubberBellows />} />
          <Route path="/products/rubber-gaskets" element={<ProductRubberGaskets />} />
          <Route path="/products/rubber-rollers" element={<ProductRubberRollers />} />
          <Route path="/products/rubber-profile" element={<ProductRubberProfile />} />
          <Route path="/products/rubber-conveyor" element={<ProductConveyorRollers />} />
          <Route path="/products/rubber-molded-parts" element={<ProductAutomotiveMoldedRubberParts />} />
          <Route path="/products/rubber-flange-gasket" element={<ProductFlangeGaskets />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;