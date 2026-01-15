import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Paper, Text,Notification, Loader, Flex, Title } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { getBookBySearchedText } from '../../utils';
import { useQuery } from '@tanstack/react-query';
import { MyCard } from './MyCard';
export const SearchResult = () => {
    const { txt } = useParams()
        const { status, isLoading, data, error, isError } = useQuery({
    queryKey: ["booksbytitle",txt],
    queryFn: getBookBySearchedText,
  });
  data && console.log(data.data);
  
        const xIcon = <IconX size={20} />;
  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center" pt={"5rem"}>
    {isLoading && <Loader color="blue" />}
    {isError &&       <Notification icon={xIcon} color="red" title="Bummer!">
        {error.message}
      </Notification>}
      {data&&<Title>A keresett könyvcím/könyvcím részlet: {txt}</Title>}
    {(data && data.data.length>0)? data.data.map(obj=>
      <Box key={data.id}>
            <MyCard {...obj}/>
      </Box>
    )
    :
     <Notification icon={xIcon} color="red" title="Bummer!">
        A keresésre nincsen találat
      </Notification>}
    </Flex>
    )
}
