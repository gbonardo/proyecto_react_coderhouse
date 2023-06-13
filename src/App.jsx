import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error404 from './components/Error404/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './components/Cart/Cart';
import Chechout from './components/Checkout/Checkout';

function App() {

  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element = { <Cart/>} />
          <Route path='/checkout' element={<Chechout/>}/>
          <Route path='*' element={<Error404/>} />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
