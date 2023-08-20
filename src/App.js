import './App.css'
import Foooter from './components/footer';
import Hero from './components/hero';
import Products from './components/products';
import Team from './components/team';
import Topbar from './components/topbar';

function App() {

  return (
    <div className="App">
      <Topbar/>
      <Hero/>
      <Products/>
      <Team/>
      <Foooter/>
    </div>
  );
}

export default App;
