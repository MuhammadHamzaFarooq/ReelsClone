import "./Login.css";
import insta from "../Assets/Instagram.JPG";
import * as React from "react";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

export default function Login() {
  return (
    <div className="Login-wrapper">
      <div className="Login-card">
        <Card variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="Instagram Logo" />
          </div>

          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              className="textCenter"
            >
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth={true}
              />
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="textCenter"
            >
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                size="small"
                fullWidth={true}
              />
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="textCenter"
            >
              Forget Password ?
            </Typography>
            <Button
              variant="contained"
              fullWidth={true}
              style={{ marginTop: "15px" }}
            >
              Login
            </Button>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          style={{
            height: " 15px",
            paddingBottom: "35px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              className="textCenter"
            >
              Don't have an account ? Signup
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
