import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Hero = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/image.jpeg)`, // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh', // Adjust based on how tall you want the hero section
                color: '#fff',
            }}
        >
            <Container
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" gutterBottom>
                    Kannagi Nagar Government Higher Secondary School
                </Typography>
                <Typography variant="h5">
                    Where Bright Future Blossoms!
                </Typography>
            </Container>
        </Box>
    );
};

export default Hero;
