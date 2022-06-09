import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArchiveNotes from "./components/ArchiveNotes";
import FormNote from "./components/FormNote";
import Home from "./view/Home";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/archived-notes" element={<ArchiveNotes/>} />
					<Route path="/create-note/" element={<FormNote/>} />
					<Route path="/edit-note/:id" element={<FormNote/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
