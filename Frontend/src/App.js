import "./App.css";
import Apartment from "./components/layout/listApartments/apartment";
import Background from "./components/layout/background";
import Header from "./components/layout/header";
import ListApartments from "./components/layout/listApartments/listApartments";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <ListApartments />
    </div>
  );
}

export default App;
