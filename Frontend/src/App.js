import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Login from "./components/login";
import Signup from "./components/signup";
import HomeBody from "./components/screens/home/homeBody";
import ApartmentDetails from "./components/screens/apartmentScreen/apartmentDetails";
import FavoriteApartmentBody from "./components/screens/favoriteScreen/favoriteApartmentBody";
import MessageBody from "./components/screens/messageScreen/messageBody";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/apartment">
            <ApartmentDetails />
          </Route>

          <Route path="/favorite">
            <FavoriteApartmentBody />
          </Route>
          <Route path="/" exact>
            <HomeBody />
          </Route>
          <Route path="/received-messages" exact>
            <MessageBody />
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
