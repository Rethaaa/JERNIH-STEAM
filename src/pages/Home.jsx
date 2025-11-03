import React from "react";
import { Container, Typography, Box, Grid, Paper, Avatar, List, ListItem, ListItemText } from "@mui/material";

const MEMBERS = [
    { name: "Adrianna Tanya Soejitno", role: "X-1/1", img: "/assets/tanya.jpeg" },
    { name: "Alicia Joceline Sondakh", role: "X-1/3", img: "/assets/celine.jpeg" },
    { name: "Aretha Hartono", role: "X-1/5", img: "/assets/aretha.jpg" },
    { name: "Beatrice Cleodora Wanasti", role: "X-1/8", img: "/assets/ " },
    { name: "Gendis Kinandira", role: "X-1/17", img: "/assets/gendis.jpeg" },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* 1. Welcome */}
      <Box mb={6} textAlign="center">
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Welcome to Our Project
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Exploring STEAM Education & Collaborative Innovation
        </Typography>
      </Box>

      {/* 2. Members Introduction */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {MEMBERS.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 3. Background */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Latar Belakang
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <Typography sx={{ textIndent: 50 }}>
            Langit kota Jakarta akhir-akhir ini terlihat menggelap sebelum waktunya, berkabut, atau mendung seperti akan turun hujan. Namun kedua hal tersebut tidak terjadi secara alami, karena ternyata hal tersebut merupakan polusi. Banyaknya kendaraan yang menghasilkan asap membuat udara Jakarta menjadi tercemar. Kejadian inilah yang termasuk ke dalam pencemaran lingkungan dalam aspek udara. Perairan di Indonesia mulai tercemar, terlebih di bagian selokan, danau dan sungai-sungai kecil. Sebagian besar sungai-sungai dipakai oleh warga Indonesia untuk kebutuhan sehari-hari seperti membasuh diri, mandi, mencuci baju, dan lain lain. Tetapi tentu tidak higienis jika air yang digunakan tidak bersih dan banyak kuman hasil dari polusi. Maka dari itu, kami memunculkan salah satu solusi yang bisa dilakukan oleh para masyarakat dan warga untuk mendapatkan air yang lebih bersih.
          </Typography>
          <Typography sx={{ textIndent: 50 }}>
            Pencemaran lingkungan ini dapat menjadi ancaman bagi kita karena pencemaran lingkungan tak hanya merusak lingkungan tetapi juga dapat membawa dampak negatif bagi kita, contohnya penyakit. Penyakit dapat lebih mudah muncul dan berkambang di lingkungan yang kotor dan tercemar. Oleh sebab itu, penting adanya upaya untuk menyelamatkan lingkungan kita yang saat ini sudah tercemar.
          </Typography>
          <Typography sx={{ textIndent: 50 }}>
            Maka dari itu, kami ingin membuat infografis tentang solusi menuju Kota Jakarta yang bersih dan hijau serta membuat miniatur mini Kota Jakarta di masa kini dan di harapan Kota Jakarta di masa depan yang bersih untuk menyadarkan masyarakat.
          </Typography>
        </Typography>
      </Box>

      {/* 4. Formulation of Problem */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Rumusan Masalah
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <List>
            <ListItem>
                <ListItemText primary="1. Bagaimana kondisi lingkungan Jakarta saat ini?" />
            </ListItem>
            <ListItem>
                <ListItemText primary="2. Apa saja permasalahan yang menyebabkan Jakarta belum menjadi kota yang bersih?" />
            </ListItem>
            <ListItem>
                <ListItemText primary="3. Hal apa saja yang bisa kita lakukan untuk mengubah Jakarta menjadi kota yang JERNIH (Jakarta Eco-friendly, Ramah, Nyaman, Indah, Hijau)?" />
            </ListItem>
            <ListItem>
                <ListItemText primary="4. Bagaimana prediksi kondisi kota Jakarta di masa depan?" />
            </ListItem>
            <ListItem>
                <ListItemText primary="5. Apakah proyek JERNIH (Jakarta Eco-friendly, Ramah, Nyaman, Indah, Hijau) akan memberikan dampak signifikan, atau bahkan sebaliknya?" />
            </ListItem>
        </List>
        </Typography>
      </Box>

      {/* 5. Objective */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Tujuan
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <List>
            <ListItem>
                <ListItemText primary="1. Untuk membandingkan kondisi Jakarta saat ini dan masa depan." />
            </ListItem>
            <ListItem>
                <ListItemText primary="2. Memberi ilustrasi kondisi Jakarta dengan versi yang lebih baik." />
            </ListItem>
            <ListItem>
                <ListItemText primary="3. Meningkatkan kesadaran masyarakat untuk menjaga kebersihan lingkungan." />
            </ListItem>
            <ListItem>
                <ListItemText primary="4. Meningkatkan kreativitas siswi." />
            </ListItem>
            <ListItem>
                <ListItemText primary="5. Meningkatkan jiwa gotong royong siswi." />
            </ListItem>
        </List>
        </Typography>
      </Box>

      {/* 7. Subjects Collaboration */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Kolaborasi Mata Pelajaran
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <List>
            <ListItem>
                <ListItemText primary="1. Biologi: ekosistem & pencemaran lingkungan" />
            </ListItem>
            <ListItem>
                <ListItemText primary="2. Seni budaya: membuat miniatur & infografis" />
            </ListItem>
            <ListItem>
                <ListItemText primary="3. TIK: desain infografis secara digital dan membuat website" />
            </ListItem>
            <ListItem>
                <ListItemText primary="4. Bahasa Indonesia: memuat komponen infografis yang baik dan lengkap" />
            </ListItem>
            <ListItem>
                <ListItemText primary="5. Matematika: menghitung ukuran miniatur" />
            </ListItem>
            <ListItem>
                <ListItemText primary="6. Geografi: mengamati aspek fisik dan pengaruhnya kepada lingkungan" />
            </ListItem>
        </List>
        </Typography>
      </Box>

      {/* 8. STEAM Component */}
      <Box mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Komponen STEAM
        </Typography>
        <Typography variant="body1" color="text.secondary">
          <List>
            <ListItem>
                <ListItemText primary="Science: upaya melestarikan lingkungan" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Technology: membuat infografis secara digital dan website" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Engineering: pembuatan miniatur" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Arts: pembuatan model desain miniatur" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Mathematics: menghitung dan mengukur ukuran miniatur yang akan dibuat serta membuat grafik" />
            </ListItem>
        </List>
        </Typography>
      </Box>
    </Container>
  );
}
