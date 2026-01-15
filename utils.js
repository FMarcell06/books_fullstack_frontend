import axios from "axios";

const baseUrl="http://localhost:8000/books/"

export const getCategories = async () => {
    const resp = await axios.get(baseUrl+"categories")
    return resp
}

export const getBooksByCateg = async ({queryKey}) => {
    console.log(queryKey[1]);
    
    const resp = await axios.get(baseUrl+"categ/"+queryKey[1])
    return resp
}

export const getBookBySearchedText = async ({queryKey}) => {
    console.log(queryKey[1]);
    const resp = await axios.get(baseUrl+"title/"+queryKey[1])
    return resp
}

export const getBooks = async () => {
    const resp = await axios.get(baseUrl+"books")
    return resp
}