const express = require("express");
const app = express();
const db = require("./db/models");
const taskRouter=require("./routes/taskRouter")
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.use("/tasks",taskRouter)


db.sequelize.sync({force:true});
app.use((req, res, next) => {
  res.status(404).json({ message: "path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message || "Internal Server Error");
});

app.listen(8080);
