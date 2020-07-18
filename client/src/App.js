import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button";
import Home from "./components/pages/Home";
import SearchPage from "./components/pages/SearchPage";
// import "./styles/base.css";

function App() {
	return (
		<>
		    <Home />
			<SearchPage />
		</>
	);
}

export default App;
