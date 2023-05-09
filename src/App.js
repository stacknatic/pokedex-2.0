// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Cards from './Components/Cards';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <Search />
    </div>
    <div className='cards-container'>
      <Cards />

    </div>
    </>
  );
}

export default App;
