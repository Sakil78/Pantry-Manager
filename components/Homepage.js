// components/Homepage.js
import { Box, Typography, Button } from "@mui/material";
import Image from 'next/image';
import image from '../public/landing.jpg'; // Ensure this path is correct

const Homepage = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      maxHeight: "110vh", // Ensure it doesn't grow beyond viewport height
      textAlign: "center",
      backgroundColor: 'black',
      padding: 0,
      position: 'relative', // Add relative positioning for the container
      overflow: 'hidden', // Ensure the content stays within the container
      '@media (max-width: 600px)': {
        minHeight: '100px', // Allow height to adjust based on content
        maxHeight: '500px', // Limit height to 500px on smaller screens
      }
    }}
  >
    <Box
      sx={{
        position: "absolute",
        left: 0, // Align to the left side
        top: 0,
        bottom: 0,
        width: '100%', // Ensure the box takes full width
        display: "flex",
        justifyContent: "center", // Center the image
        alignItems: "center",
        zIndex: 0, // Ensure the image is at the lowest z-index
        '@media (max-width: 600px)': {
          minHeight: 'auto', // Allow height to adjust based on content
          maxHeight: '500px', // Limit height to 500px on smaller screens
          overflowY: 'auto' // Add scroll if content exceeds height
        }
      }}
    >
      <Image
        src={image}
        alt="Background Image"
        layout="fill" // Cover the entire container
        objectFit="cover" // Maintain aspect ratio and cover the whole area
      />
    </Box>
    <Typography 
      variant="h2" 
      gutterBottom 
      sx={{ 
        color: "#0d47a1", // Changed color to white
        fontWeight: 600,
        zIndex: 1, // Higher z-index for text elements
        backgroundColor: 'rgba(255,255,255,0.6)',
        padding: 2,
        borderRadius: 3,
        '@media (max-width: 600px)': {
          padding: 16,
          fontSize: 25,
        }
      }}
    >
      Welcome To Pantry Manager
    </Typography>
    <Typography 
      variant="h5" 
      gutterBottom 
      sx={{ 
        color: "#ad1457", // Changed color to deep sky blue
        zIndex: 1, // Higher z-index for text elements
        backgroundColor: 'rgba(255,255,255,0.6)',
        padding: 2,
        borderRadius: 3,
        '@media (max-width: 600px)': {
          fontSize: 15,
        }
      }}
    >
      Keep Your Pantry Items At Ease.
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, zIndex: 1 }}>
      <Button 
        variant="contained" 
        sx={{ 
          backgroundColor: "#32CD32", // Changed color to lime green
          color: "#000", 
          '&:hover': {
            backgroundColor: "#00FF00" // Changed hover color to lime
          },
          '@media (max-width: 600px)': {
            fontSize: 10,
          }
        }}
        href="/auth"
      >
        Sign Up
      </Button>
      <Button 
        variant="outlined" 
        sx={{ 
          color: "#FF4500", // Changed color to orange red
          borderColor: "#FF4500",
          backgroundColor: '#000' ,
          '&:hover': {
            backgroundColor: "#FF6347", // Changed hover color to tomato
            color: "#fff",
            border: 'none',
          },
          '@media (max-width: 600px)': {
            fontSize: 10,
          }
        }}
        href="/auth"
      >
        Login
      </Button>
    </Box>
  </Box>
);

export default Homepage;
