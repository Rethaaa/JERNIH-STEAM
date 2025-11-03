import React from "react";
import { Grid, Paper, Typography, Button, Stack } from "@mui/material";

const PROJECTS = [
{ id: "model", title: "Model Jakarta", description: "Miniatur perbandingan antara Kota Jakarta di masa kini dan harapan Kota Jakarta di masa depan yang bebas dari polusi." },
{ id: "indonesia-info", title: "Infografis Bahasa Indonesia", description: "Infografis yang menjelaskan harapan dan visi kami serta upaya yang akan dilakukan untuk mencapai Kota Jakarta yang bersih dan hijau." },
{ id: "math-info", title: "Infografis Matematika", description: "Infografis yang menjelaskan tentang tingkat pencemaran udara dan air di Jakarta selama tahun 2024." },
{ id: "website", title: "Website", description: "Website kami berisi produk steam, upaya yang akan dilakukan untuk mencapai Kota Jakarta yang bersih dan hijau, dan seluruh isi dokumen rencana proyek STEAM." },
];


export default function Projects() {
    return (
        <>
            <Typography variant="h5" fontWeight={600} gutterBottom>Projects</Typography>
            <Grid container spacing={2}>
                {PROJECTS.map((p) => (
                    <Grid item xs={12} md={6} key={p.id} sx={{ width: "100%" }}>
                        <Paper variant="outlined" sx={{ p: 3 }}>
                            <Typography variant="h6">{p.title}</Typography>
                            <Typography variant="body2" color="text.secondary" mb={2}>{p.description}</Typography>
                            <Stack direction="row" spacing={1}>
                                <Button variant="outlined" size="small" href="/attachments">Attachments</Button>
                            </Stack>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}