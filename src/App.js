
import Navbar from './components/navbar/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mensaje from './components/itemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Mensaje greeting="Página en construcció" />
    </div>


  );
}

export default App;
