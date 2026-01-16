import { Menu, Button, MenuItem, TextInput, Modal } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

export const MyMenu = ({setIsAdmin}) => {
  const [value, setValue] = useState("");
  const [opened, { toggle }] = useDisclosure();
  const [modalOpened, { open:openModal, close:closeModal }] = useDisclosure(false);
const [password,setPassword] = useState("")

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(password);
    if(password==import.meta.env.VITE_ADMIN_PW){
        setIsAdmin(true)
        closeModal()
        setPassword("")
        navigate("/dashboard")
    }else{
        setPassword("")
        alert("Helytelen jelszó!")
    }
    
  }
  return (
    <>
      <Menu opened={opened} onChange={toggle}>
        <Menu.Target>
          <Burger
            lineSize={4}
            size="xl"
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item onClick={() => navigate("/")}>Kategóriák</Menu.Item>
          <Menu.Item onClick={() => navigate("/books")}>Összes könyv</Menu.Item>
          <TextInput
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            placeholder="kereses"
            leftSection={
              <IconSearch
                size={14}
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/books/search/" + value)}
              />
            }
          />
        <Menu.Item onClick={openModal}>Dashboard</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal opened={modalOpened} onClose={closeModal} title="Admin belépés">
        <TextInput
          data-autofocus
          label="Admin jelszó"
          placeholder="jelszó..."
          mt="md"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit}>Belépés</Button>
      </Modal>
    </>
  );
};
