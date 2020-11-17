import "./App.css";
import Background from "./components/layout/background";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Body from "./components/screens/body";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Body />
      <Login />
      <Signup/>
      <Footer />
    </div>
  );
}

export default App;
