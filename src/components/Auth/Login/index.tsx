/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Link, useNavigate} from "react-router-dom";
// @ts-ignore
import { supabase } from "../../../client.js";


const Login = ({setToken}:any) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });


      if(data?.user){
        setToken(data);
        navigate("/home");
      }else if(error){
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
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
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
          Don't have an account? &nbsp;
          <Link style={{ textDecoration: "none" }} to={"/register"}>
            Register
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Login;
