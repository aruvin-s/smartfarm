import Admin from './layouts/Admin'
import Dashboard from './pages/Dashboard.jsx'
import ProductList from './pages/ProductList.jsx'
import Inventory from './pages/Inventory.jsx'
import Weather from './pages/Weather.jsx'
import AddProduct from './pages/AddProduct.jsx'
import Setting from './pages/Setting.jsx'
import 'react-material-symbols/rounded';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Admin><Dashboard /></Admin>}/>
        <Route exact path="/product-list" element={<Admin><ProductList /></Admin>}/>
        <Route exact path="/add-product" element={<Admin><AddProduct /></Admin>}/>
        <Route exact path="/inventory" element={<Admin><Inventory /></Admin>}/>
        <Route exact path="/weather" element={<Admin><Weather /></Admin>}/>
        <Route exact path="/setting" element={<Admin><Setting /></Admin>}/>
      </Routes>
    </div>
  )
}

export default App
