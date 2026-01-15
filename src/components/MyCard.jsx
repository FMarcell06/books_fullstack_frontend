import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export const MyCard=({title,author,description,category,cover,rating})=>{
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{width:"300px"}}>
      <Card.Section>
        <Image
          src={cover}
          w="320px"
          mah={220}
          alt={title}
          fit='contain'
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <Badge color="pink">{rating}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

     <Text size="md" c="blue">
        {author}
      </Text>

    </Card>
  );
}