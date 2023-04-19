import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, I'm Devi!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
