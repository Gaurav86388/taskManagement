import { Router } from "express";
import jwt from "jsonwebtoken";
import users from "../Model/userSchema.js";
import tasks from "../Model/taskSchema.js";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.secret;

const taskRouter = Router();

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  const token = authHeader
    ? authHeader.split(" ")[1]
    : res.json({ status: "where is the token man!" });

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, secret, async (err, decoded) => {
    if (err) return console.log(err);

    const userData = await users.findOne({ _id: decoded.data });

    if (!userData) return res.status(400).json({ status: "Not Authorized" });

    req.userID = userData._id;

    next();
  });
}

taskRouter.get("/tasks", async (req, res) => {
  let taskData;
  try {
    taskData = await tasks.find({});
  } catch (e) {
    console.log("No data found");
  }
  console.log(taskData);
  if (!taskData) {
    return res.status(200).json({ status: "success", message: "Task List Empty" });
  } else {
    return res.status(200).json({status: "success", body: taskData});
  }
});

taskRouter.get("/tasks/:id", async(req, res)=>{

const id = req.params.id

let taskData
try{
    taskData = await tasks.findOne({id: id})

}
catch(e){
    console.log(e)
}

if(!taskData) {
    return res.status(400).json({ status: "failed", message: "task does not exist" });
}
else{
    return res.status(200).json({ status: "success", body: taskData });
}


});


taskRouter.post("/tasks", async (req, res) => {
  const newData = req.body;
  const { id } = req.body;
  console.log(newData);
  let taskData;

  try {
    taskData = await tasks.findOne({ id: id });
  } 
  catch (e) {
    console.log(e);
  }

  if(!taskData) {
    await tasks.create(newData)
    .then(()=>{
        return res.status(200).json({status: "success", message:  "task added"})
    })
    .catch(e=>console.log(e))
}
else{
    return res.status(400).json({ status: "failed", message: "task already exists" });
}
});

taskRouter.put("/tasks/:id");
taskRouter.delete("/tasks/:id");

export default taskRouter;
