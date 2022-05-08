import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/addItem/AddItem';
import Blogs from './components/blogs/Blogs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import RequireAuth from './components/login/RequireAuth';
import NotFound from './components/notFound/NotFound';
import PasswordReset from './components/passwordReset/PasswordReset';
import ProductDetails from './components/productDetails/ProductDetails';
import Register from './components/register/Register';
import UpdateItem from './components/updateItem/UpdateItem';

function App() {
  return (
  <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/additem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
      <Route path='/inventory/:id' element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}></Route>
      <Route path='/update/:id' element={<RequireAuth><UpdateItem></UpdateItem></RequireAuth>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/forgetpassword' element={<PasswordReset></PasswordReset>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  </>
  );
}

export default App;
