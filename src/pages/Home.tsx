import React from "react";
import { Box, Image, Text, Grid, VStack, Heading, Divider, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { people } from "../data/people";
import { galleryImages, images } from "../data/gallery";

const MotionBox = motion(Box);

const ThemeTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text as="span" color="teal.500" fontWeight="bold" fontStyle="bold" textTransform="uppercase">
    {children}
  </Text>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box mb={12} maxW="1500px" mx="auto" borderRadius="xl" overflow="hidden" position="relative">
      <Box position="absolute" top="0" left="0" right="0" textAlign="center" zIndex="1" pt={4}>
        <Heading
          fontSize={{ base: "xl", md: "3xl" }}
          color="white"
          textShadow="0 2px 4px rgba(0,0,0,0.5)"
          textTransform="uppercase"
        >
          Our <ThemeTag>FALOVESTORY</ThemeTag> Journey
        </Heading>
      </Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} position="relative">
            <Image
              src={image.src}
              alt={`Slide ${index}`}
              objectFit="cover"
              w="100%"
              h={{ base: "700px", md: "700px" }}
              borderRadius="xl"
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
              p={4}
              color="white"
              textAlign="center"
            >
              <Text fontSize="lg" fontWeight="bold">
                {image.caption}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export const Home = () => {
  return (
    <Box bg="gray.50" textAlign="center" py={10} px={4} minH="100vh">
      {/* Hero Section with Theme */}
      <Box mb={12} maxW="800px" mx="auto">
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={4}
          color="teal.600"
          position="relative"
          _after={{
            content: '""',
            display: "block",
            width: "100px",
            height: "4px",
            bg: "teal.300",
            mx: "auto",
            mt: 4,
          }}
        >
          Welcome to Our <ThemeTag>FALOVESTORY</ThemeTag>
        </Heading>
      </Box>

      {/* Couple Details Section */}
      <Box mb={12} maxW="800px" mx="auto">
        <Text fontSize="lg" color="gray.600" lineHeight="1.8">
          John and Jane met five years ago and have been writing their <ThemeTag>FALOVESTORY</ThemeTag> ever since.
          Their journey is one of laughter, adventure, and shared dreams. Join us in celebrating the next chapter of
          their <ThemeTag>FALOVESTORY</ThemeTag>!
        </Text>
      </Box>

      {/* Carousel */}
      <Carousel />

      <Divider my={12} borderColor="teal.300" />

      {/* Groom & Bride */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8} mb={12} mx={18}>
        {[people.groom, people.bride].map((person, index) => (
          <MotionBox
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            p={10}
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            mx={{ base: 0, md: 4 }}
            position="relative"
          >
            <Box
              position="absolute"
              top="-3"
              right="-3"
              bg="teal.500"
              color="white"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
            >
              <ThemeTag>FALOVESTORY</ThemeTag>
            </Box>
            <VStack>
              <Heading fontSize="3xl" textTransform="uppercase" color="teal.500">
                {index === 0 ? "Groom" : "Bride"}
              </Heading>
              <Image
                src={person.image}
                alt={person.name}
                borderRadius="md"
                objectFit="cover"
                w="100%"
                h="700px"
                border="4px solid"
                borderColor="teal.100"
              />
              <Text fontSize="xl" mt={4} fontWeight="bold">
                {person.name}
              </Text>
              <Text fontSize="sm" color="teal.500" fontStyle="italic">
                Co-author of our <ThemeTag>FALOVESTORY</ThemeTag>
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </Grid>

      <Divider my={12} borderColor="teal.300" />

      {/* Groomsmen */}
      <Heading fontSize="3xl" textTransform="uppercase" mb={8} color="teal.600">
        Supporting Our <ThemeTag>FALOVESTORY</ThemeTag>
      </Heading>
      <Text mb={8} fontSize="lg" color="gray.600">
        The wonderful people who've been part of our <ThemeTag>FALOVESTORY</ThemeTag> journey
      </Text>

      <Heading fontSize="2xl" mb={8} color="teal.500">
        GROOMSMEN
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6} mb={12}>
        {people.groomsmen.map((man, index) => (
          <MotionBox
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            p={6}
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            position="relative"
          >
            <Box
              position="absolute"
              top="-2"
              left="-2"
              bg="teal.500"
              color="white"
              px={2}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="bold"
              transform="rotate(-5deg)"
            >
              <ThemeTag>FALOVESTORY</ThemeTag>
            </Box>
            <Link to={`/person/${man.name}`}>
              <VStack>
                <Image
                  src={man.image}
                  alt={man.name}
                  borderRadius="md"
                  objectFit="cover"
                  w="100%"
                  h="500px"
                  border="3px solid"
                  borderColor="teal.50"
                />
                <Text fontWeight="bold" fontSize="lg" mt={3}>
                  {man.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {man.occupation}
                </Text>
                <Text fontSize="sm" color="teal.500">
                  {man.social}
                </Text>
                <Text fontSize="sm" mt={2} color="gray.600">
                  {man.bio}
                </Text>
              </VStack>
            </Link>
          </MotionBox>
        ))}
      </Grid>

      <Divider my={12} borderColor="teal.300" />

      {/* Bridesmaids */}
      <Heading fontSize="2xl" mb={8} color="teal.500">
        BRIDESMAIDS
      </Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6} mb={12}>
        {people.bridesmaids.map((maid, index) => (
          <MotionBox
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            p={6}
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            position="relative"
          >
            <Box
              position="absolute"
              top="-2"
              right="-2"
              bg="teal.500"
              color="white"
              px={2}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="bold"
              transform="rotate(5deg)"
            >
              <ThemeTag>FALOVESTORY</ThemeTag>
            </Box>
            <Link to={`/person/${maid.name}`}>
              <VStack>
                <Image
                  src={maid.image}
                  alt={maid.name}
                  borderRadius="md"
                  objectFit="cover"
                  w="100%"
                  h="500px"
                  border="3px solid"
                  borderColor="teal.50"
                />
                <Text fontWeight="bold" fontSize="lg" mt={3}>
                  {maid.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {maid.occupation}
                </Text>
                <Text fontSize="sm" color="teal.500">
                  {maid.social}
                </Text>
                <Text fontSize="sm" mt={2} color="gray.600">
                  {maid.bio}
                </Text>
              </VStack>
            </Link>
          </MotionBox>
        ))}
      </Grid>

      <Divider my={12} borderColor="teal.300" />

      {/* Gallery */}
      <Heading fontSize="3xl" textTransform="uppercase" mb={8} color="teal.600">
        Our <ThemeTag>FALOVESTORY</ThemeTag> Gallery
      </Heading>
      <Text mb={8} fontSize="lg" color="gray.600">
        Captured moments from our <ThemeTag>FALOVESTORY</ThemeTag>
      </Text>

      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={7}>
        {galleryImages.map((image) => (
          <MotionBox
            key={image.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            p={2}
            bg="white"
            borderRadius="2xl"
            boxShadow="lg"
            position="relative"
          >
            <Image src={image.src} alt={`Gallery ${image.id}`} borderRadius="md" objectFit="cover" w="100%" h="700px" />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
              p={4}
              color="white"
              textAlign="center"
            >
              <Text fontSize="sm">{image.caption}</Text>
              <Text fontSize="xs" mt={1} opacity={0.8}>
                <ThemeTag>FALOVESTORY</ThemeTag> moment
              </Text>
            </Box>
          </MotionBox>
        ))}
      </Grid>

      {/* Final CTA */}
      <Box mt={16} mb={8} p={8} bg="teal.50" borderRadius="2xl">
        <Heading fontSize="3xl" mb={4} color="teal.600">
          Become Part of Our <ThemeTag>FALOVESTORY</ThemeTag>
        </Heading>
        <Text fontSize="lg" mb={6} color="gray.600">
          We can't wait to celebrate our special day with you!
        </Text>
      </Box>
    </Box>
  );
};
