import "./App.css";
import Apartment from "./components/layout/listApartments/apartment";
import Background from "./components/layout/background";
import Header from "./components/layout/header";
import ListApartments from "./components/layout/listApartments/listApartments";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <ListApartments />
      <Footer />
    </div>
  );
}

export default App;
