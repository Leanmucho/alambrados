import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [productMenu, setProductMenu] = useState(null);
  const [activeLink, setActiveLink] = useState("inicio");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        width: "100%",
        height: "80px"
      }}
    >
      <Toolbar sx={{ height: "100%" }}>
        <Box
          sx={{
            maxWidth: 1170,
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            height: "100%"
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alambrados SA
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: "flex", gap: 3 }}>
              {["inicio", "servicios", "productos", "galeria", "contacto"].map(
                (item) =>
                  item !== "productos" && ( // Evita que "Productos" se renderice aquí
                    <Button
                      key={item}
                      color="inherit"
                      href={`#${item}`}
                      onClick={() => handleLinkClick(item)}
                      sx={{
                        color: "white",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "bold",
                        "&:hover, &.active": {
                          color: "#2E7D32"
                        }
                      }}
                      className={activeLink === item ? "active" : ""}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Button>
                  )
              )}

              {/* Menú desplegable para "Productos" */}
              <Box
                sx={{
                  position: "relative",
                  "&:hover > div": { display: "block" } // Muestra el menú al hacer hover
                }}
              >
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    "&:hover, &.active": {
                      color: "#2E7D32"
                    }
                  }}
                  className={activeLink === "productos" ? "active" : ""}
                >
                  Productos
                </Button>

                {/* Menú flotante de productos */}
                <Box
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    zIndex: 10,
                    "&:hover": { display: "block" } // Mantiene abierto si el mouse sigue encima
                  }}
                  onMouseLeave={() => setProductMenu(null)} // Oculta al salir
                >
                  <MenuItem
                    onClick={() => handleLinkClick("postes")}
                    sx={{
                      color: "black",
                      "&:hover": { backgroundColor: "#2E7D32", color: "white" }
                    }}
                  >
                    Postes de Hormigón
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleLinkClick("rollos")}
                    sx={{
                      color: "black",
                      "&:hover": { backgroundColor: "#2E7D32", color: "white" }
                    }}
                  >
                    Rollos de Tejido
                  </MenuItem>
                </Box>
              </Box>
            </Box>
          ) : (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {[
                  "inicio",
                  "servicios",
                  "productos",
                  "galeria",
                  "contacto"
                ].map((item) =>
                  item !== "productos" ? (
                    <MenuItem
                      key={item}
                      onClick={() => {
                        handleMenuClose();
                        handleLinkClick(item);
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </MenuItem>
                  ) : (
                    <>
                      <MenuItem disabled sx={{ fontWeight: "bold" }}>
                        Productos
                      </MenuItem>
                      <MenuItem onClick={() => handleLinkClick("postes")}>
                        Postes de Hormigón
                      </MenuItem>
                      <MenuItem onClick={() => handleLinkClick("rollos")}>
                        Rollos de Tejido
                      </MenuItem>
                    </>
                  )
                )}
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
