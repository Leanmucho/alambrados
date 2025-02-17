import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { Construction, FlashOn, GridOn } from "@mui/icons-material";

const Nosotros = () => {
  return (
    <Box>
      {/* Sección Hero con efecto Parallax */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("/alambrados3.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "45vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          color: "white"
        }}
      >
        {/* Overlay oscuro */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        />

        {/* Contenido */}
        <Box sx={{ position: "relative", textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold">
            POSTES HOMOLOGADOS INDUSTRIALIZADOS DE{" "}
            <span style={{ color: "#2E7D32" }}>ALTA RESISTENCIA</span>
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#2E7D32",
              "&:hover": { backgroundColor: "#1B5E20" }
            }}
          >
            Conozca nuestros productos
          </Button>
        </Box>
      </Box>

      {/* Sección de Beneficios con fondo blanco */}
      <Box sx={{ backgroundColor: "white", py: 6 }}>
        <Box sx={{ maxWidth: "1170px", margin: "0 auto", px: 4 }}>
          <Grid container spacing={4}>
            {beneficios.map((beneficio, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    transition: "0.3s",
                    backgroundColor: "#2E7D32",
                    color: "white",
                    border: "2px solid transparent", // Se mantiene el tamaño
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#2E7D32",
                      border: "2px solid #2E7D32" // Solo cambia el color, no el tamaño
                    }
                  }}
                >
                  <Box sx={{ fontSize: 50 }}>{beneficio.icon}</Box>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {beneficio.titulo}
                    </Typography>
                    <Typography variant="body2">
                      {beneficio.descripcion}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

// Datos de Beneficios
const beneficios = [
  {
    icon: <Construction fontSize="inherit" />,
    titulo: "Atención personalizada",
    descripcion:
      "Cada trabajo merece un tratamiento en particular, por esta razón nuestro personal le brindará un servicio de atención personalizada a cada cliente.",
  },
  {
    icon: <FlashOn fontSize="inherit" />,
    titulo: "Rápida instalación",
    descripcion:
      "Contamos con personal altamente capacitado para realizar una rápida instalación logrando una muy buena terminación y estética.",
  },
  {
    icon: <GridOn fontSize="inherit" />,
    titulo: "Resistencia y durabilidad",
    descripcion:
      "Gracias a su proceso de fabricación y la alta calidad de su materia prima, los tejidos de los alambrados permiten un excelente terminado que perdura en el tiempo.",
  },
];

export default Nosotros;
