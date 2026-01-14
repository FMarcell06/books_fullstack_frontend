import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Flex, Button, Title, Affix } from "@mantine/core";
import { Text, Paper } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Categories } from "./components/Categories";

function App() {
  const { height, width } = useViewportSize();


  return (
    <>
      <Flex
        mih={height}
        bg="#ffe066"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Affix position={{ top:20 }} style={{width:width}}>
          <Title order={3} c={"#4dabf7"} style={{textAlign:"center"}}>Válogass a könyvtárban</Title>
        </Affix>

        <Categories />
      </Flex>
    </>
  );
}

export default App;
