import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Login from "./components/login";
import Signup from "./components/signup";
import HomeBody from "./components/screens/home/homeBody";
import ApartmentDetails from "./components/screens/apartmentScreen/apartmentDetails";
import FavoriteApartmentBody from "./components/screens/favoriteScreen/favoriteApartmentBody";
import MessageBody from "./components/screens/messageScreen/messageBody";
import ApartmentManagementBody from "./components/screens/apartmentManagement/apartmentManagementBody";
import ApartmentPostBody from "./components/screens/apartmentPost/apartmentPostBody";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/apartment-post">
              <ApartmentPostBody />
            </Route>
            <Route path="/apartment">
              <ApartmentDetails />
            </Route>
            <Route path="/apartment-management">
              <ApartmentManagementBody />
            </Route>
            <Route path="/favorite">
              <FavoriteApartmentBody />
            </Route>
            <Route path="/" exact>
              <HomeBody />
            </Route>
            <Route path="/messages" exact>
              <MessageBody />
            </Route>
          </Switch>

          <Login />
          <Signup />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
