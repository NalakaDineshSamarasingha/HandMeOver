import './App.css';
import Header from './component/Header/header';
import Navbar from './component/Navbar/navbar';
import Intro from './component/intro/intro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Intro/>
    </div>
  );
}

export default App;
