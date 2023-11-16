import Body from "./components/Body";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Body />
      <Subscribe />
      <Design />
      <Footer />
    </div>
  );
}

export default App;
