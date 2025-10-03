import React, { useContext, useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { NameContext } from "../context/NameContext";

const NameInput = () => {
  const { setName } = useContext(NameContext);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim() !== "") setName(input);
    setInput("");
  };

  return (
    <Box sx={{ p: 2 }}>
      <TextField
        label="Enter your name"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleClick}>
        Update Welcome Message
      </Button>
    </Box>
  );
};

export default NameInput;
