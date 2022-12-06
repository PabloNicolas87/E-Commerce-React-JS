import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom' 

function App() {
   
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> }></Route>
            <Route path='/category/:categoryId' element={ <ItemListContainer /> }></Route>
            <Route path='/detail/:productId' element={ <ItemDetailContainer /> }></Route>
          </Routes>
        
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
