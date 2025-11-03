import React from "react";
import { Grid, Box, Typography, List, ListItem, Paper } from "@mui/material";


const MEMBERS = [
    { name: "Adrianna Tanya Soejitno/1" },
    { name: "Alicia Joceline Sondakh/3" },
    { name: "Aretha Hartono/5" },
    { name: "Beatrice Cleodora Wanasti/8" },
    { name: "Gendis Kinandira/17" },
];


export default function Footer() {
    return (
        <Paper square sx={{ mt: 4, p: 3, borderTop: 1, borderColor: 'divider', backgroundColor:"quaternary.dark"}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" fontWeight={600} color="white">About This Project</Typography>
                    <Typography variant="body2" color="white" sx={{ width: 500 }}>
                        Our Steam project envisions a cleaner, healthier Jakarta by creating a small-scale model of the city that demonstrates sustainable solutions to pollution. Through this project, we explore innovative ways to reduce waste, improve air quality, and promote green spaces, inspiring others to imagine and work towards a future where Jakarta thrives as a pollution-free, environmentally friendly city.
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight={600} color="white">Members</Typography>
                    <List dense variant="body2">
                        <Typography variant="body2" color="white">
                            {MEMBERS.map((m) => (<ListItem key={m.name} sx={{ py: 0 }}>{m.name}</ListItem>))}
                        </Typography>
                    </List>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight={600} color="white">Response</Typography>
                    <Box
                        component="img"
                        src="/assets/qr.jpeg"
                        alt="QR Code"
                        sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 2,
                        objectFit: "cover",
                        display: "block",
                        mx: "auto",
                        }}
                    />
                    <Typography variant="caption" color="white">May we know what you think?</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" fontWeight={600} color="white">Project</Typography>
                    <Box
                        component="img"
                        src="/assets/qr-docs.png"
                        alt="QR Code"
                        sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 2,
                        objectFit: "cover",
                        display: "block",
                        mx: "auto",
                        }}
                    />
                    <Typography variant="caption" color="white">More about this project</Typography>
                </Grid>
            </Grid>
            <Typography variant="caption" display="block" mt={2} color="white">
                © {new Date().getFullYear()} JERNIH - STEAM Project.
            </Typography>
        </Paper>
    );
}