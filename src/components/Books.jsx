import React from 'react'
import { getBooks } from '../../utils';
import { Box, Paper, Text,Notification, Loader, Flex, Title } from "@mantine/core";
import { useQuery } from '@tanstack/react-query';
import { MyCard } from './MyCard';
import { IconX } from '@tabler/icons-react';

export const Books = () => {
    const { status, isLoading, data, error, isError } = useQuery({
    queryKey: ["books"  ],
    queryFn: getBooks,
  });

    data && console.log(data.data);
        const xIcon = <IconX size={20} />;

  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center" pt={"5rem"}>
    {isLoading && <Loader color="blue" />}
    {isError &&       <Notification icon={xIcon} color="red" title="Bummer!">
        {error.message}
      </Notification>}
    {data&&<Title>Az eltárolt könyvek:</Title>}
    {(data && data.data.length>0)? data.data.map(obj=>
      <Box key={data.id}>
            <MyCard {...obj}/>
      </Box>
    )
    :
     <Notification icon={xIcon} color="red" title="Bummer!">
        A keresésre nincsen találat
      </Notification>}
    </Flex>  )
}
