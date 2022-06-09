import { useState } from "react";
import MyNotes from "./MyNotes";
const CategoryFilter = ({ notes, onFilter }) => {
	//Get catetories(tags) of notes
	let tags = [];
	notes?.forEach((note) => tags.push(note.tags));
	//convert tags array to array with unique values
	let categories = [...new Set(tags.toString().split(","))];
	//remove empty string
	removeItemFromArr(categories, "");
	function removeItemFromArr(arr, item) {
		let i = arr.indexOf(item);

		if (i !== -1) {
			arr.splice(i, 1);
		}
	}

	//capture category filter selection
	const [selected, setSelected] = useState("");
	const handleChange = (e) => {
		const { value } = e.target;
		setSelected(value);
	};
	return (
		<div className="category-filter">
			<p>Category Filter: </p>
			<select id="category" name="category" onChange={handleChange} value={selected}>
				<option value="">All</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
			<MyNotes category={selected} />
		</div>
	);
};
export default CategoryFilter;
