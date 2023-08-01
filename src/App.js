import './App.css'
import Hero from './components/hero';
import Products from './components/products';
import Topbar from './components/topbar';

function App() {

  return (
    <div className="App">
      <Topbar/>
      <Hero/>
      <Products/>
    </div>
  );
}

export default App;
