import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery, useTheme, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLink, setActiveLink] = useState('inicio'); // Estado para rastrear el enlace activo

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Actualiza el enlace activo
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro semitransparente
        width: '100%',
        height: '80px', // Aumentar el height del Header
      }}
    >
      <Toolbar sx={{ height: '100%' }}> {/* Ajustar el height del Toolbar */}
        <Box
          sx={{
            maxWidth: 1170,
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center', // Centrar verticalmente
            height: '100%', // Asegurar que ocupe todo el height del Toolbar
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alambrados SA
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                color="inherit"
                href="#inicio"
                onClick={() => handleLinkClick('inicio')}
                sx={{
                  backgroundColor: activeLink === 'inicio' ? 'rgba(255, 255, 255, 0.2)' : 'transparent', // Cambia el color si está activo
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Cambia el color al hacer hover
                  },
                  padding: '8px 16px', // Aumentar el padding para un mejor aspecto
                }}
              >
                Inicio
              </Button>
              <Button
                color="inherit"
                href="#servicios"
                onClick={() => handleLinkClick('servicios')}
                sx={{
                  backgroundColor: activeLink === 'servicios' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  padding: '8px 16px',
                }}
              >
                Servicios
              </Button>
              <Button
                color="inherit"
                href="#nosotros"
                onClick={() => handleLinkClick('nosotros')}
                sx={{
                  backgroundColor: activeLink === 'nosotros' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  padding: '8px 16px',
                }}
              >
                Nosotros
              </Button>
              <Button
                color="inherit"
                href="#contacto"
                onClick={() => handleLinkClick('contacto')}
                sx={{
                  backgroundColor: activeLink === 'contacto' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  padding: '8px 16px',
                }}
              >
                Contacto
              </Button>
            </Box>
          ) : (
            <>
              <IconButton color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    handleLinkClick('inicio');
                  }}
                  href="#inicio"
                  sx={{
                    backgroundColor: activeLink === 'inicio' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  Inicio
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    handleLinkClick('servicios');
                  }}
                  href="#servicios"
                  sx={{
                    backgroundColor: activeLink === 'servicios' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  Servicios
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    handleLinkClick('nosotros');
                  }}
                  href="#nosotros"
                  sx={{
                    backgroundColor: activeLink === 'nosotros' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  Nosotros
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    handleLinkClick('contacto');
                  }}
                  href="#contacto"
                  sx={{
                    backgroundColor: activeLink === 'contacto' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  Contacto
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;