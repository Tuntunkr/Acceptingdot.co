import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/About" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
