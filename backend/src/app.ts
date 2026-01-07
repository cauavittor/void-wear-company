import express from "express";

const app = express();

app.use(express.json());

app.get("/healt", (req, res) => {
  res.json({status: "ok"});
})

app.listen(3000, () => {
 console.log("app rodando na porta 3000");
})
