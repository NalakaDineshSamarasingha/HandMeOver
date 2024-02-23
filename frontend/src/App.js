import './App.css';
import Header from './component/Header/header';
import Navbar from './component/Navbar/navbar';
import Category from './component/category/category';
import HomeSign from './component/homesignup/homesignup';
import Intro from './component/intro/intro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Intro/>
      <HomeSign/>
      <Category/>
    </div>
  );
}

export default App;
