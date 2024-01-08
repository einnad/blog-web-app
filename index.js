import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/create", (req, res) => {
  res.render("create");
});

app.get("/explore", (req, res) => {
  res.render("explore");
});

app.post('/submit', (req, res) => {
  const revTitle = req.body["title"];
  const revContent = req.body["content"];
  res.render("index", {content: revContent, title: revTitle});
});