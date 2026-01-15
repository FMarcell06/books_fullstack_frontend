import { Menu, Button, MenuItem, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

export const MyMenu=()=> {
    const [value, setValue] = useState('');
    const [opened, { toggle }] = useDisclosure();
    const navigate = useNavigate()

  return (
    <Menu opened={opened} onChange={toggle}>
      <Menu.Target>
        <Burger lineSize={4} size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={()=>navigate("/")}>Kategóriák</Menu.Item>
        <Menu.Item onClick={()=>navigate("/books")}>Összes könyv</Menu.Item>
            <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      placeholder='kereses'
      leftSection={<IconSearch size={14} 
            style={{cursor:"pointer"}}
            onClick={()=>navigate("/books/search/"+value)}
      />}
    />
      </Menu.Dropdown>
    </Menu>
  );
}