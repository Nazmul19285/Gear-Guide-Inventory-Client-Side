import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/addItem/AddItem';
import AllItems from './components/allItems/AllItems';
import Blogs from './components/blogs/Blogs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import ProductDetails from './components/productDetails/ProductDetails';

function App() {
  return (
  <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/additem' element={<AddItem></AddItem>}></Route>
      <Route path='/inventory/:id' element={<ProductDetails></ProductDetails>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  </>
  );
}

export default App;
