import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get('/create', (req,res) => {
  res.render('create.ejs');
});

app.get('/explore', (req,res) => {
  res.render('explore.ejs');
});