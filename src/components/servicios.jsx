import { Box, Typography, Button, Grid, Card, CardMedia } from "@mui/material";

const Servicios = () => {
  return (
    <Box>
      {/* Sección superior con fondo verde */}
      <Box sx={{ backgroundColor: "#2E7D32", color: "white", textAlign: "center", py: 4, width: "100%" }}>
        <Box sx={{ maxWidth: "1170px", margin: "0 auto" }}>
          <Typography variant="h6" fontWeight="bold">
            Somos empresa líder en venta y colocación de alambrado perimetral con poste de hormigón o madera
          </Typography>
          <Button variant="contained" sx={{ mt: 2, backgroundColor: "white", color: "#2E7D32" }}>
            Consulte por su presupuesto
          </Button>
        </Box>
      </Box>

      {/* Sección "Sobre nosotros" con fondo blanco ocupando todo el ancho */}
      <Box sx={{ backgroundColor: "white", width: "100%", py: 6 }}>
        <Box sx={{ maxWidth: "1170px", margin: "0 auto", px: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" sx={{ borderBottom: 2, borderColor: "#2E7D32", pb: 1, color: "black" }}>
                Sobre nosotros
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
                Somos una empresa líder en el mercado dedicada a la venta y colocación de alambrados, postes y cercos perimetrales.
                Nuestro objetivo es brindarle seguridad y protección a través de nuestros productos. Contamos con un excelente personal capacitado
                para realizar las instalaciones de postes, alambrados y cercos perimetrales logrando una muy buena terminación y estética, garantizándole
                una rápida instalación y óptima durabilidad.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "black" }}>
                Contamos con postes de diversos tamaños y materiales, que se presentan en diferentes medidas.{" "}
                <a href="#" style={{ color: "#2E7D32", fontWeight: "bold" }}>Consúltenos.</a>
              </Typography>
              <Grid container spacing={3} sx={{ mt: 3 }}>
                <Grid item>
                  <Typography variant="h4" fontWeight="bold" color="primary">1725+</Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>Proyectos Completados</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" fontWeight="bold" color="primary">100%</Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>Clientes Satisfechos</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h4" fontWeight="bold" color="primary">100000+</Typography>
                  <Typography variant="body2" sx={{ color: "black" }}>Metros Colocados</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia component="img" image="/alambrados3.jpg" alt="Alambrado Perimetral" />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Servicios;
