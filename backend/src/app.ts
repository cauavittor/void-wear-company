import express from "express";
import router from "./routes/health.routes";
import users from "./routes/users.routes";

const app = express();



app.use(router);

app.use(express.json());


app.use(users);

app.listen(3000, () => {
 console.log("app rodando em http://localhost:3000");
  
})
