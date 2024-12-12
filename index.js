import express from "express";

const app = express();

const PORT = 3001;

// this is a comment..
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

