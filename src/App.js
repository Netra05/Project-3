import './App.css';
import Head1 from './Comp/Head1';
import Nav from './Comp/Nav';
import { Cart } from './Comp/Cart';
import Section1 from './Comp/Section1';

function App() {
  return (
    <div className="App">
      <Head1 />
      <Nav />
      <Section1 />
      <Cart />
    </div>
  );
}

export default App;