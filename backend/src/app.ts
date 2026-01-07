import express from "express";
import router from "./routes/health.routes";

const app = express();

app.use("/health", router);

app.get("/healt", (req, res) => {
  res.json({status: "ok"});
})

app.listen(3000, () => {
 console.log("app rodando na porta 3000");
})
