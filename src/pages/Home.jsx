import React from "react";
import NameInput from "../components/NameInput";
import { Paper, Typography, Box } from "@mui/material";

const Home = () => (
  <main>
    <Paper elevation={3} sx={{ p: 3, m: 2, backgroundColor: "#f8f8f8" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Codecraft Labs
      </Typography>
      <Typography variant="body1">
        This is your intranet home page. Use the navigation bar above to move between
        sections and manage employee records.
      </Typography>
    </Paper>

    <Paper elevation={3} sx={{ p: 3, m: 2, backgroundColor: "#f8f8f8" }}>
      <Typography variant="h6" gutterBottom>
        Personalize Your Greeting
      </Typography>
      <Box>
        <NameInput />
      </Box>
    </Paper>
  </main>
);

export default Home;
