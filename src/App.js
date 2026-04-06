import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import ViewAllProducts from './Components/ViewAllProducts';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element= {<AddProduct />} />
    <Route path="/ViewAll" element= {<ViewAllProducts />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
