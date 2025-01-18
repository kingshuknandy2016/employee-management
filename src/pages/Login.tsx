import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Box
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      sx={{ boxShadow: 3 }}
    >
      <Typography variant="h5" className="text-primary-dark mb-4 text-center">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-4"
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" className="text-center mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-primary">
          Register
        </a>
      </Typography>
    </Box>
  );
};

export default LoginForm;
