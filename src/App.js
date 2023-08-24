import './App.css'
import Hero from './components/hero';
import Products from './components/products';
import Services from './components/services';
import Team from './components/team';
import Topbar from './components/topbar';

function App() {

  return (
    <div className="App">
      <Topbar/>
      <Hero/>
      <Products/>
      <Services/>
      <Team/>
    </div>
  );
}

export default App;
