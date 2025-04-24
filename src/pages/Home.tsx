import React from "react";
import { Box, Image, Text, Grid, VStack, Heading, Divider, Stack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { people } from "../data/people";
import { FaHeart } from "react-icons/fa";
import { coupleImages, galleryImages } from "../data/gallery";

const MotionBox = motion(Box);

const ThemeTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text as="span" color="white.500" fontWeight="bold" fontStyle="bold" textTransform="uppercase">
    {children}
  </Text>
);

const Carousel = () => {
  const carouselHeight = useBreakpointValue({ base: "400px", md: "600px", lg: "700px" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    adaptiveHeight: true,
  };

  return (
    <Box
      mb={{ base: 6, md: 9 }}
      maxW="1500px"
      mx="auto"
      borderRadius="xl"
      overflow="hidden"
      position="relative"
      px={{ base: 2, md: 0 }}
    >
      <Box position="absolute" top="0" left="0" right="0" textAlign="center" zIndex="1" pt={{ base: 2, md: 4 }}>
        <Heading
          fontSize={{ base: "lg", sm: "xl", md: "3xl" }}
          color="white"
          textShadow="0 2px 4px rgba(0,0,0,0.5)"
          textTransform="uppercase"
          px={2}
        >
          Our <ThemeTag>FALOVESTORY</ThemeTag> Journey
        </Heading>
      </Box>

      <Slider {...settings}>
        {coupleImages.map((item, index) => (
          <Box key={index} position="relative">
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: carouselHeight,
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            ) : (
              <Image
                src={item.src}
                alt={`Slide ${index}`}
                objectFit="cover"
                w="100%"
                h={carouselHeight}
                borderRadius={{ base: "md", md: "xl" }}
              />
            )}

            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
              p={{ base: 2, md: 4 }}
              color="white"
              textAlign="center"
            >
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                {item.caption}
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const LoveStoryCard = () => {
  return (
    <Box
      mb={{ base: 8, md: 12 }}
      maxW="7xl"
      mx="auto"
      bgGradient="linear(to-br, pink.50, pink.100)"
      boxShadow={{ base: "md", md: "2xl" }}
      borderRadius="2xl"
      p={{ base: 4, md: 10 }}
      position="relative"
      px={{ base: 4, md: 10 }}
    >
      <Icon
        as={FaHeart}
        color="pink.300"
        w={{ base: 8, md: 10 }}
        h={{ base: 8, md: 10 }}
        position="absolute"
        top={{ base: -4, md: -5 }}
        left={{ base: -4, md: -5 }}
        bg="white"
        borderRadius="full"
        boxShadow="md"
      />
      <VStack spacing={{ base: 4, md: 6 }} textAlign="center">
        <Heading fontSize={{ base: "xl", md: "3xl" }} color="pink.600">
          Our <ThemeTag>FALOVESTORY</ThemeTag>
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" lineHeight="tall">
          I met Fati in late October 2018 back in university. We both attended OOU. On that faithful evening, I was
          driving out with my friends, and she was walking with hers. <ThemeTag>FALOVESTORY</ThemeTag> While the guys
          chatted with her friends, she stood alone with a straight face. I boldly approached her. We talked, exchanged
          numbers (after some struggle), and started texting. We officially began dating in February 2019.
          <br />
          <br />
          Through those early chats, we discovered our values, our backgrounds, and what truly mattered to each of us.
          It felt different — I'm Christian, she's Muslim — but love saw beyond that. I saw every quality I ever wanted
          in my woman, and I went all out for her.
          <br />
          <br />
          It hasn't always been smooth, but we stayed true to our promises. Our love carried us through. Today, we're
          each other's better halves — forever. <ThemeTag>FALOVESTORY</ThemeTag> 💖
        </Text>
      </VStack>
    </Box>
  );
};

export const Home = () => {
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 4 });
  const personImageHeight = useBreakpointValue({ base: "300px", sm: "400px", md: "500px", lg: "600px" });
  const galleryImageHeight = useBreakpointValue({ base: "250px", sm: "300px", md: "400px", lg: "500px" });

  return (
    <Box bg="gray.50" textAlign="center" py={{ base: 6, md: 10 }} px={{ base: 2, md: 4 }} minH="100vh">
      {/* Hero Section with Theme */}
      <Box mb={{ base: 8, md: 12 }} maxW="800px" mx="auto" px={{ base: 2, md: 0 }}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
          mb={{ base: 3, md: 4 }}
          color="teal.600"
          position="relative"
          _after={{
            content: '""',
            display: "block",
            width: "80px",
            height: "3px",
            bg: "teal.300",
            mx: "auto",
            mt: 3,
          }}
        >
          Welcome to Our <ThemeTag>FALOVESTORY</ThemeTag>
        </Heading>
      </Box>

      {/* Carousel */}
      <Carousel />

      {/* Couple Details Section */}
      <LoveStoryCard />

      <Divider my={{ base: 8, md: 12 }} borderColor="teal.300" />

      {/* Groom & Bride */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 6, md: 8 }}
        mb={{ base: 8, md: 12 }}
        px={{ base: 4, md: 8 }}
      >
        {[people.groom, people.bride].map((person, index) => (
          <MotionBox
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            p={{ base: 4, md: 6 }}
            bg="white"
            borderRadius="2xl"
            boxShadow="md"
            mx="auto"
            w="100%"
            maxW="600px"
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
              display={{ base: "none", md: "block" }}
            >
              <ThemeTag>FALOVESTORY</ThemeTag>
            </Box>
            <VStack spacing={{ base: 3, md: 4 }}>
              <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} textTransform="uppercase" color="teal.500">
                {index === 0 ? "Groom" : "Bride"}
              </Heading>
              <Image
                src={person.image}
                alt={person.name}
                borderRadius="md"
                objectFit="cover"
                w="100%"
                h={personImageHeight}
                border="4px solid"
                borderColor="teal.100"
              />
              <Text fontSize={{ base: "lg", md: "xl" }} mt={2} fontWeight="bold">
                {person.name}
              </Text>
              <Text fontSize={{ base: "xs", md: "sm" }} color="teal.500" fontStyle="italic">
                Co-author of our <ThemeTag>FALOVESTORY</ThemeTag>
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </Grid>

      <Divider my={{ base: 8, md: 12 }} borderColor="teal.300" />

      {/* Groomsmen */}
      <Box px={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          textTransform="uppercase"
          mb={{ base: 6, md: 8 }}
          color="teal.600"
        >
          Supporting Our <ThemeTag>FALOVESTORY</ThemeTag>
        </Heading>
        <Text mb={{ base: 6, md: 8 }} fontSize={{ base: "md", md: "lg" }} color="gray.600">
          The wonderful people who've been part of our <ThemeTag>FALOVESTORY</ThemeTag> journey
        </Text>

        <Heading fontSize={{ base: "xl", md: "2xl" }} mb={{ base: 6, md: 8 }} color="teal.500">
          GROOMSMEN
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: 4, md: 6 }}
          mb={{ base: 8, md: 12 }}
        >
          {people.groomsmen.map((man, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              p={{ base: 3, md: 4 }}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
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
                display={{ base: "none", sm: "block" }}
              >
                <ThemeTag>FALOVESTORY</ThemeTag>
              </Box>
              <Link to={`/person/${man.name}`}>
                <VStack spacing={3}>
                  <Image
                    src={man.image}
                    alt={man.name}
                    borderRadius="md"
                    objectFit="cover"
                    w="100%"
                    h={personImageHeight}
                    border="3px solid"
                    borderColor="teal.50"
                  />
                  <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                    {man.name}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                    {man.occupation}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="teal.500">
                    {man.social}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} mt={1} color="gray.600" noOfLines={3}>
                    {man.relationship}
                  </Text>
                </VStack>
              </Link>
            </MotionBox>
          ))}
        </Grid>

        <Divider my={{ base: 8, md: 12 }} borderColor="teal.300" />

        {/* Bridesmaids */}
        <Heading fontSize={{ base: "xl", md: "2xl" }} mb={{ base: 6, md: 8 }} color="teal.500">
          BRIDESMAIDS
        </Heading>
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: 4, md: 6 }}
          mb={{ base: 8, md: 12 }}
        >
          {people.bridesmaids.map((maid, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              p={{ base: 3, md: 4 }}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
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
                display={{ base: "none", sm: "block" }}
              >
                <ThemeTag>FALOVESTORY</ThemeTag>
              </Box>
              <Link to={`/person/${maid.name}`}>
                <VStack spacing={3}>
                  <Image
                    src={maid.image}
                    alt={maid.name}
                    borderRadius="md"
                    objectFit="cover"
                    w="100%"
                    h={personImageHeight}
                    border="3px solid"
                    borderColor="teal.50"
                  />
                  <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                    {maid.name}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                    {maid.occupation}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} color="teal.500">
                    {maid.social}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "sm" }} mt={1} color="gray.600" noOfLines={3}>
                    {maid.relationship}
                  </Text>
                </VStack>
              </Link>
            </MotionBox>
          ))}
        </Grid>

        <Divider my={{ base: 8, md: 12 }} borderColor="teal.300" />

        {/* Gallery */}
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          textTransform="uppercase"
          mb={{ base: 6, md: 8 }}
          color="teal.600"
        >
          Our <ThemeTag>FALOVESTORY</ThemeTag> Gallery
        </Heading>
        <Text mb={{ base: 6, md: 8 }} fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Captured moments from our <ThemeTag>FALOVESTORY</ThemeTag>
        </Text>

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={{ base: 4, md: 5, lg: 6 }}
        >
          {galleryImages.map((image) => (
            <MotionBox
              key={image.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              bg="white"
              borderRadius="xl"
              boxShadow="md"
              position="relative"
              overflow="hidden"
            >
              <Image
                src={image.src}
                alt={`Gallery ${image.id}`}
                borderRadius="md"
                objectFit="cover"
                w="100%"
                h={galleryImageHeight}
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(transparent, rgba(0,0,0,0.7))"
                p={3}
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
        <Box mt={{ base: 10, md: 16 }} mb={8} p={{ base: 4, md: 6 }} bg="teal.50" borderRadius="2xl">
          <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={{ base: 3, md: 4 }} color="teal.600">
            Become Part of Our <ThemeTag>FALOVESTORY</ThemeTag>
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mb={{ base: 4, md: 6 }} color="gray.600">
            We can't wait to celebrate our special day with you!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
