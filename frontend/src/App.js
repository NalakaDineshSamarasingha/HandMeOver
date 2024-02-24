import './App.css';
import Header from './component/Header/header';
import Navbar from './component/Navbar/navbar';
import Assis from './component/assistence/ass';
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
      <Assis/>
    </div>
  );
}

export default App;
