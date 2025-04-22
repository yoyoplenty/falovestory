import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import theme from "./themes";
import { Home } from "./pages/Home";
import { PersonDetail } from "./pages/PersonDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/person/:name" element={<PersonDetail />} />
      </Routes>
    </Router>
  </ChakraProvider>
);
