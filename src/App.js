import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Items from './components/items/Items';

function App() {
  return (
  <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/items' element={<Items></Items>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
    </Routes>
  </>
  );
}

export default App;
