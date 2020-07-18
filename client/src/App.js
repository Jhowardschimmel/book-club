import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button";
import Home from "./components/pages/Home";
import SearchPage from "./components/pages/SearchPage";
// import "./styles/base.css";

function App() {
	return (
		<Router>
			<>
			<Route exact path="/" component={Home} />
			<Route exact path="/search" component={SearchPage} />
			</>
		</Router>
	);
}

export default App;
