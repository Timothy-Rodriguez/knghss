import React from 'react';
import { Container, Typography, Grid, Box, Card } from "@mui/material";
import { LocationOn, Phone, AccessTime } from "@mui/icons-material";

const textD = {
    color: "#42a5f5", // Light blue color
    textDecoration: "none", // Removes underline
    fontWeight: "bold", // Makes text bold
};

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
                            {/* <Typography variant="body2" color="text.secondary">
                                Kannagi Nagar Government Higher Secondary School
                            </Typography> */}
                            <Typography variant="body2" color="text.secondary">
                            <a style={textD} href="https://www.google.com/search?sca_esv=2e69544fa688a049&rlz=1C1CHBF_enIN1023IN1023&cs=0&q=kannagi+nagar+government+high+school+address&ludocid=17735646738598896077&sa=X&ved=2ahUKEwjXzPTf_6uLAxXJcGwGHaHBJLkQ6BN6BAgOEAI">W6HP+6RR, Kannagi Nagar, Thoraipakkam, Tamil Nadu 600097</a>
                            </Typography>
                        </Card>
                    </Grid>

                    {/* Phone */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ textAlign: "center", p: 3 }}>
                            <Phone sx={{ fontSize: 40, color: "success.main" }} />
                            <Typography variant="h6" fontWeight="bold">Phone</Typography>
                            <Typography variant="body2" color="text.secondary">
                                <a href="tel:+91-8056188378" style={textD}> +91-8056188378</a> (Head Master)
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

                <Container sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        📍 Our Location
      </Typography>
      <Box sx={{ width: "100%", height: "400px", borderRadius: "10px", overflow: "hidden" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124395.14918246145!2d80.1684292!3d13.0134709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525cf6b09ee541%3A0xf621acbdc400a1cd!2sKannagi%20Nagar%20Government%20High%20School!5e0!3m2!1sen!2sin!4v1738342948119!5m2!1sen!2sin"
        ></iframe>
      </Box>
    </Container>

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