import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the default carousel styles

import { Grid, Card, CardContent } from "@mui/material";
import { School, Book, Computer, SportsSoccer, Restaurant } from "@mui/icons-material";

const ResponsiveCarousel = () => {
  return (
    <>
    <Container sx={{ marginTop: 4 }}>
    <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Excellence in Education Since 2004
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Located in Kannagi Nagar, Thoraipakkam, Chennai, Kannagi Nagar Government Higher Secondary School is managed by the Department of Education, Tamil Nadu.
        </Typography>
      </Box>

      <Carousel
        showThumbs={false}  // Hide thumbnail navigation
        autoPlay
        infiniteLoop
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide the status indicator
        interval={3000} // Auto-slide every 3 seconds
        dynamicHeight={false}
      >
        {/* Slide 1 */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image.jpeg)`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
        </Box>

        {/* Slide 2 */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-1.jpeg)`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
        </Box>

        {/* Slide 3 */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-2.jpeg)`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
        </Box>

        {/* Slide 4 */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-3.jpeg)`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
        </Box>

        {/* Slide 5 */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-4.jpeg)`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
        </Box>

        {/* Slide 6 */}
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-5.jpeg)`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
        </Box>
      </Carousel>

      {/* About Section */}
      <br />
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Our Mission & Values
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We believe in providing accessible, high-quality education that equips students with knowledge, skills, and values to thrive in an ever-evolving world. Our focus is on:
      </Typography>

      {/* Grid for Mission Points */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                📖 Academic Excellence
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A structured curriculum to foster knowledge and critical thinking.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                💻 Technology-Driven Learning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Digital resources and computer labs for modern education.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                🎭 Extracurricular Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Activities that build confidence, creativity, and teamwork.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                🏫 Safe & Supportive Environment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ensuring student well-being with a secure and inclusive campus.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Infrastructure Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Infrastructure & Facilities
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <School sx={{ fontSize: 40, color: "primary.main" }} />
              <Typography variant="h6" fontWeight="bold">Campus</Typography>
              <Typography variant="body2" color="text.secondary">
                Spacious classrooms and dedicated faculty rooms.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Book sx={{ fontSize: 40, color: "secondary.main" }} />
              <Typography variant="h6" fontWeight="bold">Library</Typography>
              <Typography variant="body2" color="text.secondary">
                A diverse collection of books to enhance learning.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Computer sx={{ fontSize: 40, color: "success.main" }} />
              <Typography variant="h6" fontWeight="bold">Technology</Typography>
              <Typography variant="body2" color="text.secondary">
                Computer lab with modern systems.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <SportsSoccer sx={{ fontSize: 40, color: "error.main" }} />
              <Typography variant="h6" fontWeight="bold">Sports</Typography>
              <Typography variant="body2" color="text.secondary">
                Dedicated playground for student activities.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Restaurant sx={{ fontSize: 40, color: "warning.main" }} />
              <Typography variant="h6" fontWeight="bold">Mid-Day Meal</Typography>
              <Typography variant="body2" color="text.secondary">
                Nutritious meals for student growth.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <br />
      </Container>
    </>
  );
};

export default ResponsiveCarousel;
