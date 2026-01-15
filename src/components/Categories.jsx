import { Box, Paper, Text,Notification, Loader, Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../../utils";
import { IconX } from "@tabler/icons-react";
import "./Categories.css"
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const { status, isLoading, data, error, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

    const xIcon = <IconX size={20} />;

    const navigate = useNavigate()

  data && console.log(data.data);
  isLoading && console.log("loading...");
  isError && console.log(error);

  return (
    <Flex direction="column" justify="flex-start" gap="md" align="center">
    {isLoading && <Loader color="blue" />}
    {isError &&       <Notification icon={xIcon} color="red" title="Bummer!">
        {error.message}
      </Notification>}
    {data && data.data.map(obj=>
      <Box key={data.id}>
        <Paper shadow="xs" p="xl" className="category" onClick={()=>navigate("/books/categ/"+obj.id)}>
          <Text>{obj.name}</Text>
        </Paper>
      </Box>
    )
      }
    </Flex>
  );
};
