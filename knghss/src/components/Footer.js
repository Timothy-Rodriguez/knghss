import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const textD = {
    color: "#42a5f5", // Light blue color
    textDecoration: "none", // Removes underline
    fontWeight: "bold", // Makes text bold
};

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        marginTop: 'auto',
        width: '100%',
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="space-between">
          {/* Left section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
            Kannagi Nagar Government Higher Secondary School
            </Typography>
            Address: <a style={textD} href="https://www.google.com/search?sca_esv=2e69544fa688a049&rlz=1C1CHBF_enIN1023IN1023&cs=0&q=kannagi+nagar+government+high+school+address&ludocid=17735646738598896077&sa=X&ved=2ahUKEwjXzPTf_6uLAxXJcGwGHaHBJLkQ6BN6BAgOEAI">W6HP+6RR, Kannagi Nagar, Thoraipakkam, Tamil Nadu 600097</a>
          </Grid>

          {/* Center section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <Link href="/#" color="inherit" underline="hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about#" color="inherit" underline="hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact#" color="inherit" underline="hover">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Right section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Phone:
                <a href="tel:+91-8056188378" style={textD}> +91-8056188378</a></Typography>
          </Grid>
        </Grid>

        {/* Bottom section */}
        <Box
          sx={{
            marginTop: '20px',
            textAlign: 'center',
            borderTop: '1px solid #444',
            paddingTop: '10px',
          }}
        >
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} KNGHSS.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
