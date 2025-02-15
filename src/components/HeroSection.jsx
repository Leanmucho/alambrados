import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: './../assets/alambrados1.jpg', text: 'CERCOS PERIMETRALES' },
  { src: './../assets/alambrados2.jpg', text: 'POSTES' },
  { src: './../assets/alambrados3.jpg', text: 'ALAMBRADOS' },
];

const texts = ['CERCOS PERIMETRALES', 'POSTES', 'ALAMBRADOS'];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Cambiar la imagen de fondo cada 5 segundos
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(imageInterval); // Limpia el intervalo al desmontar el componente
  }, []);

  // Cambiar el texto cada 3 segundos (independiente de las imágenes)
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3500); // Cambia cada 3 segundos

    return () => clearInterval(textInterval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${images[currentImageIndex].src})`, // Imagen de fondo
        backgroundSize: 'cover', // Cubre todo el espacio disponible
        backgroundPosition: 'center', // Centra la imagen
        height: '100vh', // Ocupa toda la altura de la pantalla
        width: '100vw', // Ocupa todo el ancho de la pantalla
        display: 'flex',
        justifyContent: 'center', // Centra horizontalmente
        alignItems: 'center', // Centra verticalmente
        color: 'white', // Color del texto
        textAlign: 'center',
        transition: 'background-image 1s ease-in-out', // Transición suave para la imagen
      }}
    >
      <Box
        sx={{
          maxWidth: '800px', // Ancho máximo del contenido
          width: '100%', // Ocupa todo el ancho disponible
          padding: '0 20px', // Padding para evitar que el texto toque los bordes
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }} // Inicia con opacidad 0 y un poco abajo
            animate={{ opacity: 1, y: 0 }} // Anima a opacidad 1 y posición original
            exit={{ opacity: 0, y: -20 }} // Sale moviéndose hacia arriba
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Duración y tipo de animación
          >
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              {texts[currentTextIndex]}
            </Typography>
          </motion.div>
        </AnimatePresence>
        <Typography variant="h5" component="p">
          Realizamos instalación de Alambrado perimetral con postes de hormigón o madera.
        </Typography>
      </Box>
    </Box>
  );
}

export default HeroSection;