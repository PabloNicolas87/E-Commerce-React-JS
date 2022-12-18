import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import { CartProvider } from './Context/CartContext.js';

function App() {
   
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={ <ItemListContainer /> }></Route>
              <Route path='/category/:categoryId' element={ <ItemListContainer /> }></Route>
              <Route path='/detail/:productId' element={ <ItemDetailContainer /> }></Route>
              <Route path='/cart' element={ <Cart /> }></Route>
            </Routes>
        </BrowserRouter>
      </CartProvider>
      
      
    </div>
  );
}

export default App;
