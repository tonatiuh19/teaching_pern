import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Container>
            <Toolbar>
              <Typography sx={{ flexGrow: 1 }} variant="h6">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "aliceblue" }}
                >
                  Learning PERN
                </Link>
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/tasks/new")}
              >
                New task
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavBar;
