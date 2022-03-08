import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const TaskForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{ backgroundColor: "black", padding: "1rem" }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            Create Task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Type the Title"
                sx={{ display: "block", margin: ".5rem 0" }}
                inputProps={{ style: { color: "aliceblue" } }}
                InputLabelProps={{ style: { color: "aliceblue" } }}
              />
              <TextField
                variant="filled"
                label="Type the Description"
                sx={{ display: "block", margin: ".5rem 0" }}
                multiline
                rows={5}
                inputProps={{ style: { color: "aliceblue" } }}
                InputLabelProps={{ style: { color: "aliceblue" } }}
              />
              <Button variant="contained" color="primary" type="submit">
                Add
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
