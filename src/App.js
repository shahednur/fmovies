import Preloader from "./components/Preloader";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Movie from "./components/Movie";
import Trailer from "./components/Trailer";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Preloader />
      <Login />
      <Register />
      <Header />
      <Slider />
      <Movie />
      <Trailer />
      <News />
      <Footer />
    </div>
  );
}

export default App;
