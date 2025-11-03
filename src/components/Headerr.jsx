import React from "react";
import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export default function Header() {
    return (
        <AppBar position="fixed" color="primary" elevation={1} sx={{width: "100vw"}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight={700}>STEAM Collaboration Project</Typography>
                <Stack direction="row" spacing={2}>
                    <Button component={RouterLink} to="/" color="inherit">Home</Button>
                    <Button component={RouterLink} to="/projects" color="inherit">Projects</Button>
                    <Button component={RouterLink} to="/attachments" color="inherit">Attachments</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}