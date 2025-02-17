import { useState, useEffect } from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, ExpandLess, Home, Room, PhotoLibrary, Mail, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Detectar si el usuario llegó al footer para mostrar el botón de subir
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setShowScrollButton(rect.top < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
      {/* Sección Principal del Footer */}
      <Box
        sx={{ backgroundColor: "#181818", color: "white", py: 6 }}
        id="footer"
      >
        <Box sx={{ maxWidth: "1170px", margin: "0 auto", px: 4 }}>
          <Grid container spacing={4}>
            {/* Sección Empresa */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                fontStyle="italic"
                fontWeight="bold"
                sx={{ fontFamily: "serif", color: "#C0C0C0" }}
              >
                Alambrados <span style={{ color: "#2E7D32" }}>SA</span>
              </Typography>
              <Typography variant="body2" sx={{ mt: 2, color: "#C0C0C0" }}>
                Somos una empresa líder en el mercado dedicada a la venta y
                colocación de Alambrados, postes y cercos perimetrales. Estamos
                ubicados en Canning, zona Sur del Gran Bs. As.
              </Typography>
            </Grid>

            {/* Sección Links con Íconos */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                LINKS
              </Typography>
              {[
                { text: "Inicio", icon: <Home fontSize="small" /> },
                { text: "Postes de hormigón", icon: <Room fontSize="small" /> },
                { text: "Galería", icon: <PhotoLibrary fontSize="small" /> },
                { text: "Contacto", icon: <Mail fontSize="small" /> }
              ].map((item) => (
                <Typography
                  key={item.text}
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#C0C0C0",
                    mb: 1
                  }}
                >
                  {item.icon}
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      ml: 1,
                      color: "#C0C0C0",
                      "&:hover": { color: "#2E7D32" }
                    }}
                  >
                    {item.text}
                  </Link>
                </Typography>
              ))}
            </Grid>

            {/* Sección Contacto */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                INFORMACIÓN DE CONTACTO
              </Typography>
              <Typography variant="body2" sx={{ color: "#C0C0C0" }}>
                <strong>Dirección:</strong> Av. inventada 629, , Ezeiza, Bs. As.
              </Typography>
              <Typography variant="body2" sx={{ color: "#C0C0C0" }}>
                <strong>Teléfono:</strong> 6666-6666 | 15 5554-5550
              </Typography>
              <Typography variant="body2" sx={{ color: "#C0C0C0" }}>
                <strong>E-mail:</strong> alambrasa@hotmail.com
              </Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton
                  sx={{
                    color: "white",
                    backgroundColor: "#2E7D32",
                    "&:hover": { backgroundColor: "#1B5E20" }
                  }}
                >
                  <Facebook />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Franja Inferior */}
      <Box sx={{ backgroundColor: "#0F0F0F", textAlign: "center", py: 2 }}>
        <Typography variant="body2" sx={{ color: "#C0C0C0" }}>
          Diseño por <span style={{ color: "#2E7D32" }}>Leandro</span>
        </Typography>
      </Box>

      {/* Botón flotante de WhatsApp */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 10 }}>
        <IconButton
          href="https://wa.me/116888888"
          target="_blank"
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            "&:hover": { backgroundColor: "#1EBE50" }
          }}
        >
          <WhatsApp fontSize="large" />
        </IconButton>
      </Box>

      {/* Botón de volver arriba (solo visible en el footer) */}
      {showScrollButton && (
        <Box sx={{ position: "fixed", bottom: 20, right: 80 }}>
          <IconButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              backgroundColor: "#2E7D32",
              color: "white",
              "&:hover": { backgroundColor: "#1B5E20" }
            }}
          >
            <ExpandLess fontSize="large" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
