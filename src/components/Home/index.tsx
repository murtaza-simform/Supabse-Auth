/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const Home = ({ token }: any) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Card className="vertical-center">
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          sx={{ height: "400px", alignContent: "center" }}
          variant="h5"
          component="div"
          gutterBottom
        >
          Welcome {token?.user?.user_metadata?.full_name}!
          <br />
          <Button sx={{marginTop:"15px"}} variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
