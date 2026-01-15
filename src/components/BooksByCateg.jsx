import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Paper, Text,Notification, Loader, Flex, Title } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { getBooksByCateg } from '../../utils';
import { useQuery } from '@tanstack/react-query';
import { MyCard } from './MyCard';


export const BooksByCateg = () => {
    const { categId } = useParams()
        const { status, isLoading, data, error, isError } = useQuery({
    queryKey: ["booksbycateg",categId],
    queryFn: getBooksByCateg,
  });
        const xIcon = <IconX size={20} />;
    
  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center" mt={"5rem"}>
    <Title>{data&& data.data[0].category}</Title>
    {isLoading && <Loader color="blue" />}
    {isError &&       <Notification icon={xIcon} color="red" title="Bummer!">
        {error.message}
      </Notification>}
    {data && data.data.map(obj=>
      <Box key={data.id}>
        <MyCard {...obj}/>
      </Box>
    )
      }
    </Flex>  )
}
