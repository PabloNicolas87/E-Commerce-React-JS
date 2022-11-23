import './App.css';
import Navbar from './components/navbar/navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Pablo Girone, 34820'}/>
    </div>
  );
}

export default App;
