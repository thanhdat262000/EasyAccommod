import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Login from "./components/login";
import Signup from "./components/signup";
import HomeBody from "./components/screens/home/homeBody";
import SearchBody from "./components/screens/home/searchBody";
import ApartmentDetails from "./components/screens/apartmentScreen/apartmentDetails";
import FavoriteApartmentBody from "./components/screens/favoriteScreen/favoriteApartmentBody";
import MessageBody from "./components/screens/messageScreen/messageBody";
import ApartmentManagementBody from "./components/screens/apartmentManagement/apartmentManagementBody";
import ApartmentPostBody from "./components/screens/apartmentPost/apartmentPostBody";
import AdminBody from "./components/screens/adminScreen/adminbody";
import AccountInfo from "./components/accountInfo";
import "react-chat-widget/lib/styles.css";
import { Widget, addResponseMessage } from "react-chat-widget";
import { connect } from "react-redux";
import { getPrivilege, getUsserName } from "./redux/selector/selectors";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:8000/";
let socket = io(ENDPOINT);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Người gửi",
    };
  }
  componentDidMount() {
    const { privilege, name } = this.props;
    if (privilege === "owner") {
      socket.emit("join", { privilege, name }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
    socket.on("check", (message) => {
      console.log(message);
      this.setState({ title: message });
    });
    socket.on("message", ({ message, name }) => {
      console.log(message);
      addResponseMessage(message);
      if (privilege === "admin") this.setState({ title: name });
    });
  }
  handleNewUserMessage = (message) => {
    const { name, privilege } = this.props;
    socket.emit("sendMessage", { name, privilege, message }, () => {
      console.log("Sent");
    });
  };
  render() {
    const { privilege } = this.props;
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/apartment-post/" exact>
              <ApartmentPostBody />
            </Route>
            <Route path="/apartment/:id" exact component={ApartmentDetails} />
            <Route path="/apartment-management">
              <ApartmentManagementBody />
            </Route>
            <Route path="/favorite" exact>
              <FavoriteApartmentBody />
            </Route>
            <Route path="/search" exact>
              <SearchBody />
            </Route>
            <Route path="/messages" exact>
              <MessageBody />
            </Route>
            <Route path="/management" exact>
              <AdminBody />
            </Route>
            <Route path="/" exact>
              <HomeBody />
            </Route>
          </Switch>

          <Login />
          <Signup />
          {privilege === "admin" || privilege === "owner" ? (
            <Widget
              handleNewUserMessage={this.handleNewUserMessage}
              title={this.state.title}
            />
          ) : null}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(
  (state) => ({
    privilege: getPrivilege(state),
    name: getUsserName(state),
  }),
  null
)(App);
