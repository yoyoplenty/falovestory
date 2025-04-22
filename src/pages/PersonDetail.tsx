import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, VStack, Heading } from "@chakra-ui/react";
import { people } from "../data/people";

export const PersonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const person = people.groomsmen.find((p) => p.name === name) || people.bridesmaids.find((p) => p.name === name);

  if (!person) {
    return <Text color="white">Person not found</Text>;
  }

  return (
    <Box textAlign="center" p={4} color="white">
      <VStack spacing={4}>
        <Image src={person.image} alt={person.name} borderRadius="full" boxSize="150px" />
        <Heading fontSize="2xl">{person.name}</Heading>
        <Text fontSize="lg">{person.occupation}</Text>
        <Text fontSize="md">{person.bio}</Text>
        <Text fontSize="sm" color="blue.300">
          {person.social}
        </Text>
      </VStack>
    </Box>
  );
};
