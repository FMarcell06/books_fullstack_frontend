import axios from "axios";

const baseUrl="http://localhost:8000/books/"

export const getCategories = async () => {
    const resp = await axios.get(baseUrl+"categories")
    return resp
}