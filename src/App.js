import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import ViewAllProducts from './Components/ViewAllProducts';
import Login from './Components/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/Add" element= {<AddProduct />} />
    <Route path="/ViewAll" element= {<ViewAllProducts />} />
    <Route path="/" element= {<Login />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
