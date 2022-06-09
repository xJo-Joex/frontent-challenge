import axios from "axios";
const URI = "https://notes-backend-challenge.herokuapp.com/notes" || "http://localhost:4000/notes";

//get all data
export const getData = async (setState) => {
	const result = await axios.get(URI);
	if (setState) {
		setState(result.data);
	}
};
//get data by id

export const getDataById = async (id, setState) => {
	const result = await axios.get(`${URI}/${id}`);
	//covert field tags of string to array
	const updateNote = { ...result.data, tags: result.data.tags.split(",") };
	setState(updateNote);
};

export const updateData = async (id, data) => {
	await axios.put(`${URI}/update/${id}`, data);
};

export const deleteData = async (id) => {
	await axios.delete(`${URI}/delete/${id}`);
};

export const createData = async (data) => {
	await axios.post(`${URI}/create`, data);
};
