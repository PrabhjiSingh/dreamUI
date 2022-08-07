import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/HomeComponent/Home';
import Footer from './Components/Footer/Footer';

const bg_image = new URL("./images/home_bg.jpg", import.meta.url)

function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
