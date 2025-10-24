import express from "express";

const app = express();
const port = 3004;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
