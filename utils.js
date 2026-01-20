import axios from "axios";

const baseUrl="http://localhost:8000/books"

export const getCategories = async () => {
    const resp = await axios.get(baseUrl+"/categories")
    return resp
}

export const getBooksByCateg = async ({queryKey}) => {
    console.log(queryKey[1]);
    
    const resp = await axios.get(baseUrl+"/categ/"+queryKey[1])
    return resp
}

export const getBookBySearchedText = async ({queryKey}) => {
    console.log(queryKey[1]);
    const resp = await axios.get(baseUrl+"/title/"+queryKey[1])
    return resp
}

export const getBooks = async () => {
    const resp = await axios.get(baseUrl+"/books")
    return resp
}

export const readBooks = async (setBooks) => {
    const resp = await axios.get(baseUrl+"/books")
    setBooks(resp.data)
}

export const createBook = async (newBook) => {
    console.log(newBook);
    const resp = await axios.post(baseUrl,newBook)
    return resp.data
}

export  const deleteBook = async (id) => {
    const resp = await axios.delete(baseUrl+"/"+id)
    return resp.data
}

export const updateBook = async (id,updateData) => {
    const resp = await axios.put(baseUrl+"/"+id,updateData)
    return resp.data
}