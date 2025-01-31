import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Hero from './Hero';

import { Grid, Container } from '@mui/material';

const TwoColumnLayout1 = () => {
    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Image Column */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-1.jpeg)`, // Replace with your image URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '300px',
                            borderRadius: 2,
                        }}
                    />
                </Grid>

                {/* Text Column */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Explore New Horizons
                    </Typography>
                    <Typography variant="body1">
                        Kannagi Nagar Government Higher Secondary School, established in 2004, is committed to providing quality education for students from Grades 6 to 12. Our goal is to create a nurturing environment where students develop academic excellence, leadership skills, and strong moral values.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

const TwoColumnLayout2 = () => {
    return (
        <Container sx={{ marginTop: 4 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Text Column */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        At our school, we offer:
                    </Typography>
                    <Typography variant="body1">
                        ✔️ Well-equipped classrooms for an engaging learning experience
                        <br />
                        ✔️ A library with 350 books to foster curiosity and knowledge
                        <br />
                        ✔️ Digital learning resources, including a computer-aided lab with 23 computers
                        <br />
                        ✔️ A playground to encourage physical activity and extracurricular engagement
                        <br />
                        ✔️ Mid-day meal program to support student health and well-being
                        <br />
                        With a dedicated faculty and a strong focus on holistic learning, we strive to empower students to achieve success in their education and beyond.
                        <br />
                        📌 Join us in building a brighter future for every student.
                    </Typography>
                </Grid>
                {/* Image Column */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-3.jpeg)`, // Replace with your image URL
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '300px',
                            borderRadius: 2,
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

function Home() {
    return (
        <>
            <Hero />
            <TwoColumnLayout1 />
            <TwoColumnLayout2 />
            <br/>
            <br/>
        </>

    )
}

export default Home;