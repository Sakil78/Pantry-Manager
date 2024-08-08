// pages/index.js
import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage"; // Updated the import to Homepage

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `url('landing.jpg')`, // Ensure the path to your new image is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.1)', // Brighten the image
        }}
      >
        <Navbar sx={{ backgroundColor: 'transparent', color: '#fff' }} /> {/* Ensure no background color */}
        <Box
          sx={{
            paddingTop: "60px", // Adjust for the fixed navbar
            minHeight: 'calc(100vh - 80px)', // Ensure footer is at bottom
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add a semi-transparent black overlay for readability
            color: '#fff', // Ensure text is white
          }}
        >
          <Homepage /> {/* Changed to Homepage */}
          <br />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row', // Align items horizontally
              justifyContent: 'space-between', // Space items left and right
              alignItems: 'stretch', // Stretch items to be the same height
              gap: 3, // Space between the BentoBoxes
              padding: 3,
              flexWrap: 'wrap',
              maxWidth: '1200px', // Adjust as needed
              margin: '0 auto', // Center the content
              '@media (max-width: 600px)': {
                flexDirection: 'column', // Stack items vertically on small screens
                padding: 1,
                gap: 2,
              }
            }}
          >
            <Box
              sx={{
                flex: 1,
                maxWidth: isSmallScreen ? '300px' : '48%', // Adjust max width as needed
                minWidth: isSmallScreen ? '300px' : '300px', // Ensure boxes are not too narrow
                backgroundColor: 'transparent',
                backgroundColor: 'rgba(255,255,255,0.5)', // Dark gray background color for the box
                borderRadius: 1,
                boxShadow: 3,
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#212121',
                height: 'auto', // Auto height
                overflow: 'visible', // Ensure all text is visible
              }}
            >
              <Typography variant={isSmallScreen ? "h5" : "h5"} gutterBottom sx={{ color: "#00008B" }}> {/* Changed color to green */}
                About Pantry<b> Manager</b>
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontSize: isSmallScreen ? '0.9rem' : '1rem' }}>
                Pantry<b>Manager</b> is your ultimate solution for managing pantry items. Easily add, view, and remove items, and track expiration dates to keep your pantry organized and efficient.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: isSmallScreen ? '0.9rem' : '1rem' }}>
                Our intuitive interface helps you manage your kitchen supplies effortlessly, ensuring you never run out of essential items.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                maxWidth: isSmallScreen ? '300px' : '48%', // Adjust max width as needed
                minWidth: isSmallScreen ? '300px' : '300px', // Ensure boxes are not too narrow
                backgroundColor: 'transparent',
                backgroundColor: 'rgba(255,255,255,0.5)', // Dark gray background color for the box
                borderRadius: 1,
                boxShadow: 3,
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: '#212121',
                height: 'auto', // Auto height
                overflow: 'visible', // Ensure all text is visible
                '@media (max-width: 600px)': {
                  maxWidth: '100%', // Fixed width on small screens
                  marginBottom: 2, // Space between stacked boxes
                }
              }}
            >
              <Typography variant={isSmallScreen ? "h5" : "h5"} gutterBottom sx={{ color: "#00008B" }}> {/* Changed color to green */}
                Features
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ fontSize: isSmallScreen ? '0.9rem' : '1rem' }}>
                1. Add new items to your pantry with details such as quantity and expiration date.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: isSmallScreen ? '0.9rem' : '1rem' }}>
                2. View and manage your pantry items with a user-friendly interface.
              </Typography>
              <Typography variant="body2" sx={{ fontSize: isSmallScreen ? '0.9rem' : '1rem' }}>
                3. Get reminders before items expire.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 'auto', // Pushes footer to the bottom
              backgroundColor: 'black', // Footer background color
              color: '#FFFFFF', // Footer text color
              padding: 2.4,
              textAlign: 'center',
              fontSize: '75rem', // Smaller font size
            }}
          >
            <Typography variant="body2">
              ©2024 All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
