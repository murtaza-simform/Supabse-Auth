/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  CardActions,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import { supabase } from "../../../client.js";

const Register = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (data) {
        navigate("/");
      } else {
        throw error;
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </CardContent>
      <CardActions>
        <Typography
          sx={{ textAlign: "center", width: "100%", marginBottom: "15px" }}
        >
          Already have an account? &nbsp;
          <Link style={{ textDecoration: "none" }} to={"/"}>
            Login
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Register;
