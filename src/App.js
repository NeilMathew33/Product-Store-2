import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import ViewAllProducts from './Components/ViewAllProducts';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/Add" element= {<AddProduct />} />
    <Route path="/ViewAll" element= {<ViewAllProducts />} />
    <Route path="/" element= {<Login />} />Z
    <Route path="/SignUp" element= {<SignUp />} />Z
   </Routes>
   </BrowserRouter>
  );
}

export default App;
