const http = require("http");
const port = 3000;
const express = require("express");
const router = express.Router();
const path = require("path");
const app = express();
const nlp = require("compromise");
nlp.extend(require("compromise-sentences"));

app.use(express.static(path.join(__dirname, "public")));

router.get("/past-tense", (req, res) => {
  let doc = nlp(req.query.sentence);
  doc.sentences().toPastTense();
  const text = doc.text();
  res.json({ text });
});
router.get("/present-tense", (req, res) => {
  let doc = nlp(req.query.sentence);
  doc.sentences().toPresentTense();
  const text = doc.text();
  res.json({ text });
});
router.get("/futore-tense", (req, res) => {
  let doc = nlp(req.query.sentence);
  doc.sentences().toFutureTense();
  const text = doc.text();
  res.json({ text });
});

router.post("/user-data", (req, res) => {
  console.log(req.body);
  res.json({
    name: "Muhammad",
    age: 18,
    email: "donot@gmail.com",
    v: req.body,
  });
});

app.use("/", router);

http.createServer(app).listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
