import React from 'react';
import { Container, Typography, Grid, Box, Card } from "@mui/material";
import { LocationOn, Phone, AccessTime } from "@mui/icons-material";

function Contact() {
    return (
        <>
            <Container sx={{ mt: 5, mb: 5 }}>
                {/* Header Section */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography variant="h3" fontWeight="bold" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Get in Touch with Kannagi Nagar Government Higher Secondary School
                    </Typography>
                </Box>

                {/* Contact Details Grid */}
                <Grid container spacing={3} justifyContent="center">
                    {/* Address */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ textAlign: "center", p: 3 }}>
                            <LocationOn sx={{ fontSize: 40, color: "primary.main" }} />
                            <Typography variant="h6" fontWeight="bold">Address</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Kannagi Nagar Government Higher Secondary School
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Thoraipakkam Block, Chennai District, Tamil Nadu
                            </Typography>
                        </Card>
                    </Grid>

                    {/* Phone */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ textAlign: "center", p: 3 }}>
                            <Phone sx={{ fontSize: 40, color: "success.main" }} />
                            <Typography variant="h6" fontWeight="bold">Phone</Typography>
                            <Typography variant="body2" color="text.secondary">
                                +91-8056188378 (HM Madam)
                            </Typography>
                        </Card>
                    </Grid>

                    {/* School Timings */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ textAlign: "center", p: 3 }}>
                            <AccessTime sx={{ fontSize: 40, color: "warning.main" }} />
                            <Typography variant="h6" fontWeight="bold">School Timings</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Monday – Friday: 9:00 AM – 4:00 PM
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Saturday: 9:00 AM – 12:30 PM
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sunday: Closed
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>

                {/* Call to Action */}
                <Box sx={{ textAlign: "center", mt: 4 }}>
                    <Typography variant="h6">
                        For admissions, inquiries, or any assistance, feel free to reach out to us via phone or email.
                    </Typography>
                    <Typography variant="h6">
                        You can also visit our school premises during working hours. We look forward to assisting you!
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default Contact;