// app.ts
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/tab/:id", (req, res) => {
  if (req.params.id === "1") {
    setTimeout(() => {
      res.send("这是tab1的内容...");
    }, 1000);
  } else if (req.params.id === "2") {
    setTimeout(() => {
      res.send("这是tab2的内容...");
    }, 3000);
  } else if (req.params.id === "3") {
    res.send("这是tab3的内容...");
  }
});

app.listen("3000", () => {
  console.log("server running at 3000 port...");
});
