import React, { Component } from "react";
import {
  Route,
  Navigate,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

import Movies from "./pages/Movies";
import AddMovieForm from "./pages/AddMovie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import MovieForm from './components/movieForm';

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/movies/new" element={AddMovieForm} />
              <Route exact path="/login" element={Login} />
              <Route path="/resigter" element={Register} />
              <Route path="/movies" exact element={Movies} />

              <Navigate exact element="/" to="/movies" />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
