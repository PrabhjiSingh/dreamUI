import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Analysis from './Components/Analysis/Analysis';

const bg_image = new URL("./images/home_bg.jpg", import.meta.url)

function App() {

  return (
    <>
      <Header></Header>
      <Analysis></Analysis>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
