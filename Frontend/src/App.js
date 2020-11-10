import "./App.css";
import Background from "./components/layout/background";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Body from "./components/body";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Body />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
