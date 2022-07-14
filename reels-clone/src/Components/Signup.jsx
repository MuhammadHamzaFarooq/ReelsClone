import "./Signup.css";
import insta from "../Assets/Instagram.JPG";
import * as React from "react";
import {
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";


export default function Signup() {
  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <Card  variant="outlined">
          <div className="insta-logo">
            <img src={insta} alt="Instagram Logo" />
          </div>
          <Typography
            variant="body2"
            color="text.secondary"
            className="textCenter"
          >
            Sign up to see photos and videos from your friends
          </Typography>
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
              <TextField
                id="outlined-basic"
                label="Full Name"
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
              <Button
                color="secondary"
                variant="outlined"
                fullWidth={true}
                margin="dense"
                startIcon={<CloudUploadIcon />}
                component="label"
              >
                Upload Profile Image
                <input type="file" accept="image/*" hidden />
              </Button>
            </Typography>
            <Button
              variant="contained"
              fullWidth={true}
              style={{ marginTop: "15px" }}
            >
              Signup
            </Button>
            <Typography
              variant="body2"
              color="text.secondary"
              className="textCenter"
            >
              By signing up, you agree to our Terms, Conditions and Cookies
              policy.
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" style = {
            {
                height:" 15px",
                paddingBottom:"35px",
                marginTop:"5px",
                marginBottom:"5px"
            }
        }>
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              className="textCenter"
            >
              Having an account ? Login
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
