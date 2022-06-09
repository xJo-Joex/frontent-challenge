import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Note from "./Note";
import { getData } from "../Request";

//list of notes
const ArchivedNotes = () => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		getData(setNotes);
	}, []);
	return (
		<div className="container">
			<h1>Archive Notes</h1>
			<div className="container-nav">
				<Link to="/" className="btn-borde">My Notes</Link>
			</div>

			{notes?.map((note) => {
				return note.archived ? <Note key={note.id} note={note} /> : null;
			})}
		</div>
	);
};
export default ArchivedNotes;
