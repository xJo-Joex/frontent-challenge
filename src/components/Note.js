import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteData, updateData, getData } from "../Request";
const Note = ({ note, setNotes }) => {
	const navigate = useNavigate();
	//control
	const [noteCurrent, setNoteCurrent] = useState(note);
	const [styleNote, setStyleNote] = useState(false);

	useEffect(() => {
		getData(setNotes);
	}, [noteCurrent]);

	const handleClickEdit = () => {
		navigate(`/edit-note/${note.id}`);
	};

	//archive note or unarchive note
	const handleClickArchived = async () => {
		//update note in database
		setNoteCurrent({ ...noteCurrent, archived: !noteCurrent.archived });
		setStyleNote(true);
		// setNotes((notes) => ({ ...notes, noteCurrent }));
		updateData(note.id, { archived: !note.archived });
		navigate("/");
	};

	//delete note
	const handleClickDelete = async () => {
		setStyleNote(true);
		deleteData(note.id);
	};
	return (
		<div className='target-note'>
			<div className="note">{note.title}</div>
			<div className="note">{note.updatedAt}</div>
			<div className="container-btn">
				<button onClick={handleClickEdit} className="btn-borde">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
					</svg>
				</button>
				<button onClick={handleClickDelete} className="btn-borde">
					<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" />
					</svg>
				</button>
				<button onClick={handleClickArchived} className="btn-borde">
					<svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path d="M32 432C32 458.5 53.49 480 80 480h352c26.51 0 48-21.49 48-48V160H32V432zM160 236C160 229.4 165.4 224 172 224h168C346.6 224 352 229.4 352 236v8C352 250.6 346.6 256 340 256h-168C165.4 256 160 250.6 160 244V236zM480 32H32C14.31 32 0 46.31 0 64v48C0 120.8 7.188 128 16 128h480C504.8 128 512 120.8 512 112V64C512 46.31 497.7 32 480 32z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Note;
