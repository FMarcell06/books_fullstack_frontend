import { Flex, Table, ScrollArea, Button, Modal, TextInput } from '@mantine/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { createBook, readBooks } from '../../utils';
import { FaTrash } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export const Dashboard=() => {
    const [books,setBooks] = useState([])
    const [showForm,setShowform] = useState(false)
    const [newBook,setNewBook] = useState({title:"",author:"",description:""})
    useEffect(()=>{
        readBooks(setBooks)
    },[])
console.log(books);


  const rows = books.map((obj) => (
    <Table.Tr key={obj.id}>
      <Table.Td>{obj.title}</Table.Td>
      <Table.Td>{obj.author}</Table.Td>
      <Table.Td>{obj.description}</Table.Td>
        <Table.Td><FaTrash color={"red"} size={35}/><MdModeEditOutline color={"lightblue"} size={35} /></Table.Td>
    </Table.Tr>
  ));

  const handleChange = (e) => {

    setNewBook({...newBook,[e.target.name]:e.target.value})
  }

  const handleSave = async () => {
    try {
      const bookToSave = {...newBook,category_id:1,cover:"borito",rating:1}
      const savedBook=await createBook(bookToSave)
      setBooks((prev)=>[...prev,savedBook])
      setShowform(false)
      setNewBook({title:"",author:"",description:""})
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
    <Flex direction="column" gap="md" justify="flex-start" align="center">
            <ScrollArea h={500}>
    <Table stickyHeader withTableBorder withRowBorders withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Cím</Table.Th>
          <Table.Th>Szerző</Table.Th>
          <Table.Th>Leírás</Table.Th>
          <Table.Th>Szerkesztés</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Könyvek száma az adatbázisban : {books.length}</Table.Caption>
    </Table>
            </ScrollArea>
    <Button onClick={()=>setShowform(true)}>Új könyv hozzáadása</Button>
    </Flex>
              <Modal opened={showForm} onClose={()=>setShowform(false)} title="Focus demo">
        <TextInput label="cim" name='title' value={newBook.title} onChange={handleChange} required/>
              <TextInput label="szerzo" name='author' value={newBook.author} onChange={handleChange} required/>
        <TextInput label="leiras" name='description' value={newBook.description} onChange={handleChange} required/>
        <Button onClick={handleSave}>Mentés</Button>

      </Modal>
      </>
  );
}