import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Flex, Button, Title, Affix } from "@mantine/core";
import { Text, Paper } from '@mantine/core';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';
import { Categories } from "./components/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Books } from "./components/Books";
import { BooksByCateg } from "./components/BooksByCateg";
import { SearchResult } from "./components/SearchResult";
import { MyMenu } from "./components/MyMenu";

function App() {
  const { height, width } = useViewportSize();
  const isMobile=useMediaQuery("(max-width:500px)")

  return (
    <BrowserRouter>
      <Flex
        mih={height}
        bg="#ffe066"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Affix position={{ top:0 }} style={{width:width}}>
          <Title order={3} c={"#4dabf7"} bg={"white"} h={"50px"} p={"5px"} style={{textAlign:"center"}}>Válogass a könyvtárban</Title>
        </Affix>
        <Affix position={{top: isMobile? 50: 45,right:10}}>
          <MyMenu/>
        </Affix>
      <Routes>
        <Route path="/" element={<Categories />}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/books/categ/:categId" element={<BooksByCateg/>}/>
        <Route path="/books/search/:txt" element={<SearchResult/>}/>
      </Routes>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
