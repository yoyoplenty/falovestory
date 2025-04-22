import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./themes";
import { Home } from "./pages/Home";
import { PersonDetail } from "./pages/PersonDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AppCarousel = () => {
  const images = [
    "https://picsum.photos/1920/1080?random=1",
    "https://picsum.photos/1920/1080?random=2",
    "https://picsum.photos/1920/1080?random=3",
  ];

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
    <Slider {...settings}>
      {images.map((image, index) => (
        <Box key={index} bgImage={`url(${image})`} bgSize="cover" bgPosition="center" minH="100vh" />
      ))}
    </Slider>
  );
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box position="relative">
      <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex="-1">
        <AppCarousel />
      </Box>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person/:name" element={<PersonDetail />} />
        </Routes>
      </Router>
    </Box>
  </ChakraProvider>
);
