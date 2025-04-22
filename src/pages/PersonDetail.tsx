import React from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, VStack, Heading, Container, useColorModeValue } from "@chakra-ui/react";
import { people } from "../data/people";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const PersonDetail = () => {
  const { name } = useParams<{ name: string }>();
  const person = people.groomsmen.find((p) => p.name === name) || people.bridesmaids.find((p) => p.name === name);

  if (!person) {
    return (
      <Box minH="100vh" bg="gray.250" display="flex" justifyContent="center" alignItems="center">
        <Text color="white" fontSize="xl">
          Person not found
        </Text>
      </Box>
    );
  }

  return (
    <Box bg="gray.250" minH="100vh" py={10} px={4} color="white">
      <Container maxW="lg" centerContent>
        <MotionBox
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          p={6}
          bg="gray.400"
          borderRadius="2xl"
          boxShadow="2xl"
          position="relative"
          w="100%"
        >
          {/* Tag Ribbon */}
          <Box
            position="absolute"
            top="-2"
            left="-2"
            bg="teal.500"
            color="white"
            px={3}
            py={1}
            borderRadius="md"
            fontSize="xs"
            fontWeight="bold"
            transform="rotate(-5deg)"
            boxShadow="md"
          >
            FALOVESTORY
          </Box>

          <VStack spacing={6} textAlign="center">
            <Image
              src={person.image}
              alt={person.name}
              borderRadius="md"
              objectFit="cover"
              w="100%"
              h={{ base: "400px", md: "500px" }}
              border="3px solid"
              borderColor="teal.200"
              boxShadow="lg"
            />
            <Heading fontSize="3xl" color="teal.700">
              {person.name}
            </Heading>
            <Text fontSize="lg" fontWeight="semibold" color="teal.600">
              {person.occupation}
            </Text>
            <Text fontSize="md" px={4} color="teal.600">
              {person.bio}
            </Text>
            <Text fontSize="sm" color="gray.900">
              {person.social}
            </Text>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  );
};
