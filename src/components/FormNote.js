import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDataById, updateData, createData } from "../Request";

const FormNote = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	//state for the form
	const [note, setNote] = useState({ title: "", content: "" });
	//state for categories
	const [category, setCategories] = useState("");
	useEffect(() => {
		const res = async () => {
			//get data from the server
			//only edit note
			if (id) {
				await getDataById(id, setNote);
			}
		};
		res();
	}, [id]);

	//add category
	const handleCategory = (e) => {
		if (note.tags !== undefined) {
			setNote({ ...note, tags: [...note.tags, category] });
		} else {
			setNote({ ...note, tags: [category] });
		}
		setCategories("");
		console.log(category);
	};

	//capture the form data
	const handleFormChange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};
	//capture category write
	const handleChangeCategory = (e) => {
		console.log(e.target.value);
		setCategories(e.target.value);
	};
	//delete category of state
	const handleDeleteCategory = (e) => {
		//eliminar categoria del state
		removeItemFromArr(note.tags, e.target.name);
	};
	function removeItemFromArr(arr, item) {
		let i = arr.indexOf(item);

		if (i !== -1) {
			arr.splice(i, 1);
			setNote({ ...note });
		}
	}

	//submit the form
	const handleSubmit = (e) => {
		e.preventDefault();
		if (note.title === "" || note.content === "") {
			window.alert("Please fill in all fields");
			return;
		}
		//send the data to the server
		if (id) {
			updateData(id, { title: note.title, content: note.content, tags: note.tags.toString() });
		} else {
			createData({ title: note.title, content: note.content, archived: false });
		}
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit} className="container form-create">
			<h2>{id ? "Edit note" : "Create Note"}</h2>
			<div>
				<label>Title</label>
				<input type="text" onChange={handleFormChange} name="title" value={note.title} />
			</div>
			<div>
				<label>Content</label>
				<textarea type="text" onChange={handleFormChange} name="content" value={note.content} />
			</div>
			<div>
				<label>Categories: </label>
				<div>
					{note
						? note?.tags?.map((tag) => (
								<p className="tag" key={tag}>
									{tag}
									<button onClick={handleDeleteCategory} type="button" name={tag}>
										X
									</button>
								</p>
						  ))
						: null}
				</div>
				<div>
					<input onChange={handleChangeCategory} type="text" name="tags" className="input-category" value={category} />

					<button type="button" className="btn-borde" onClick={handleCategory}>
						Add
					</button>
				</div>
			</div>
			<div className="container-nav">
				<Link to="/" className="btn-borde">
					Cancelar
				</Link>
				<button className="btn-borde" type="submit">
					Save
				</button>
			</div>
		</form>
	);
};

export default FormNote;
