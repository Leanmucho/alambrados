import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "./../../public/alambrados1.jpg", text: "CERCOS PERIMETRALES" },
  { src: "./../../public/alambrados2.jpg", text: "POSTES" },
  { src: "./../../public/alambrados3.jpg", text: "ALAMBRADOS" },
];

const texts = ["CERCOS PERIMETRALES", "POSTES", "ALAMBRADOS"];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${images[currentImageIndex].src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        transition: "background-image 1s ease-in-out",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          width: "100%",
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
              {texts[currentTextIndex]}
            </Typography>
          </motion.div>
        </AnimatePresence>
        <Typography variant="h5" component="p" fontSize="20px" sx={{ mb: 3 }}>
          Realizamos instalación de Alambrado perimetral con postes de hormigón o madera.
        </Typography>
        
        {/* Botón agregado */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#2E7D32",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            fontSize: "1.2rem",
            textTransform: "none",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#4F4F4F", // Gris oscuro en hover
            },
          }}
        >
          Consúltenos!
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
