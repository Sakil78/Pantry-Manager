import { useState } from "react";
import { Box, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "next/link";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen width is less than 600px

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box>
      {isMobile ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              backgroundColor: "#121212",
              boxShadow: 2,
              position: "fixed",
              width: "100%",
              top: 0,
              left: 0,
              zIndex: 1201, // Ensure it's above other content
            }}
          >
            <Typography variant="h6" sx={{ color: "#0d47a1" }}>
              Pantry<b> Manager</b>
            </Typography>
            <IconButton 
              edge="end" 
              color='primary' 
              aria-label="menu" 
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            
          </Box>

          <Drawer
            anchor='right'
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 250,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: "#0d47a1" }}>
                Pantry<b> Manager</b>
              </Typography>
              <List>
                <ListItem component={Link} onClick={toggleDrawer(false)}>
                  <Button component={Link} href="/" sx={{ marginRight: 2, color: "#0d47a1" }}>
                    Home
                  </Button>
                </ListItem>
                <ListItem component={Link} onClick={toggleDrawer(false)}>
                  <Button component={Link} href="/dashboard" sx={{ marginRight: 2, color: "#0d47a1" }}>
                    Dashboard
                  </Button>
                </ListItem>
                <ListItem component={Link} onClick={toggleDrawer(false)}>
                  <Button component={Link} href="/pantry" sx={{ marginRight: 2, color: "#0d47a1" }}>
                    Pantry
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
            backgroundColor: "#f5f5f5",
            boxShadow: 2,
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            zIndex: 1201, // Ensure it's above other content
          }}
        >
          <Typography variant="h6" sx={{ color: "#00008B" }}>
            Pantry<b> Manager</b>
          </Typography>
          <Box>
            <Button component={Link} href="/" sx={{ marginRight: 2, color: "#00008B" }}>
              Home
            </Button>
            <Button component={Link} href="/dashboard" sx={{ marginRight: 2, color: "#00008B" }}>
              Dashboard
            </Button>
            <Button component={Link} href="/pantry" sx={{ color: "#00008B" }}>
              Pantry
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
