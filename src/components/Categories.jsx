import { Box, Paper, Text,Notification, Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../../utils";
import { IconX } from "@tabler/icons-react";

export const Categories = () => {
  const { status, isLoading, data, error, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

    const xIcon = <IconX size={20} />;

  data && console.log(data.data);
  isLoading && console.log("loading...");
  isError && console.log(error);

  return (
    <>
    {isLoading && <Loader color="blue" />}
    {isError &&       <Notification icon={xIcon} color="red" title="Bummer!">
        {error.message}
      </Notification>}
    {data && data.data.map(obj=>
      <Box>
        <Paper shadow="xs" p="xl" style={{cursor:"pointer"}}>
          <Text>{obj.name}</Text>
        </Paper>
      </Box>
    )
      }
    </>
  );
};
