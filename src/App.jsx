import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./components/Theme";
import Header from "./components/Headerr";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Attachments from "./pages/Attachments";
import { Container, Box, ThemeProvider } from "@mui/material";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#f9fafb" sx={{ width: "100vw", marginTop: 8 }}>
        <Header />
        <Container sx={{ flex: 1, py: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/attachments" element={<Attachments />} />
          </Routes>
        </Container>
        <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}