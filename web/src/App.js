import './App.css';
import Products from './components/container';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main_container'>
        <Sidebar />
        <Products />
      </div>

    </div>
  );
}

export default App;
