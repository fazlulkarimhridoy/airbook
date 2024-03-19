import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Popular from "./components/Popular";
import Subscribe from "./components/Subscribe";

const App = () => {
  return (
    <div>

      {/* navbar */}
      <Navbar></Navbar>

      {/* banner */}
      <Banner></Banner>

      {/* featured */}
      <Featured></Featured>

      {/* deals & offers */}
      <Offers></Offers>

      {/* popular */}
      <Popular></Popular>

      {/* blogs */}
      <Blog></Blog>

      {/* subscribe */}
      <Subscribe></Subscribe>

    </div>
  );
};

export default App;