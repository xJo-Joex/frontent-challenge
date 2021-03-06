import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArchiveNotes from "./components/ArchiveNotes";
import { getData } from ".//Request";
import FormNote from "./components/FormNote";
import NotFound from "./view/NotFound";

import Home from "./view/Home";
function App() {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		getData(setNotes);
	}, []);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home className="center-content"/>} />
					<Route path="/archived-notes" element={<ArchiveNotes notes={notes} />} />
					<Route path="/create-note/" element={<FormNote />} />
					<Route path="/edit-note/:id" element={<FormNote />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
