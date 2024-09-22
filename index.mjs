import express from "express";

const app = express();
const port = 3000;

app.get('/arjun', (req, res) => {
  res.send(`ananya's boyfriendo`);
})

app.get('/', (req, res) => {
  res.send(`welcome`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});