import Preloader from "./components/Preloader";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Preloader />
      <Login />
      <Register />
      <Header />
      <Slider />
      <Movie />
    </div>
  );
}

export default App;
