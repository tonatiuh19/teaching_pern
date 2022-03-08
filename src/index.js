const express = require("express");
const morgan = require("morgan");
const taskRoutes = require("./routes/tasks.routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes);

app.listen(3000);
console.log("Server running on port 3000");
