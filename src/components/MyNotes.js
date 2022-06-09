import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Note from "./Note";
import { getData } from "../Request";
//list of notes
const MyNotes = ({ category }) => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		getData(setNotes);
	}, []);
	// console.log(notes);
	return (
		<div className="">
			<h1>My Notes</h1>
			<div className="container-nav">
				<Link to="create-note" className="btn-borde">
					Create Notes
				</Link>
				<Link to="/archived-notes" className="btn-borde">
					Archived notes
				</Link>
			</div>
			<div className="container-notes">
				{notes
					?.filter((note) => note?.tags?.includes(category))
					.map((note) => {
						return !note.archived ? <Note key={note.id} note={note} setNotes={setNotes} /> : null;
					})}
			</div>
		</div>
	);
};
export default MyNotes;
