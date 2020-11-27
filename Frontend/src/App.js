import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Login from "./components/login";
import Signup from "./components/signup";
import HomeBody from "./components/screens/home/homeBody";
import ApartmentDetails from "./components/screens/apartmentScreen/apartmentDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/apartment">
            <ApartmentDetails />
          </Route>
          <Route path="/" exact>
            <HomeBody />
          </Route>
        </Switch>

        <Login />
        <Signup />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
