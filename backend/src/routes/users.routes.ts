import { Request, Response, Router } from "express";

const users = Router();



type User = {
 id: string,
 name: string,
 idade: number, 
 email: string
}



const ls: User[] = [];


users.get("/users", (req: Request, res: Response) => {
 return res.json(ls);
})

users.post("/users", (req: Request, res: Response) => {
 const user = req.body;
 ls.push(user)
 console.log("user created");
 return res.json(ls)



})

export default users;