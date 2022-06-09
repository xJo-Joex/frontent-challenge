
import CategoryFilter from "../components/CategoryFilter";
import { useState, useEffect } from "react";
import { getData } from "../Request";

const Home = () => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		getData(setNotes);
	}, []);

	return (
		<div className="container">
			<CategoryFilter notes={notes} />;
		</div>
	);
};
export default Home;
