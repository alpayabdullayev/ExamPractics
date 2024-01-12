
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layout';
import Home from './pages/home';
import AddPage from './pages/addPage';
import Detail from './pages/detail';
import AdminPage from './pages/adminPage';
import Wishlist from './pages/wishlist';
import Basket from './pages/Basket';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/addpage' element={<AddPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/product/:id' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
