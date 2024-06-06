import { Router } from "express";
import jwt from "jsonwebtoken"
import users from "../Model/userSchema.js";
import tasks from "../Model/taskSchema.js"
import dotenv from 'dotenv'

dotenv.config()
const secret = process.env.secret


const taskRouter = Router()


function authenticateToken(req, res, next){

    const authHeader = req.headers.authorization

    const token = authHeader ? authHeader.split(" ")[1] : res.json({status: "where is the token man!"})
 
    if(token === null) return res.sendStatus(401)

    jwt.verify(token, secret, async(err, decoded)=>{
        if(err) return console.log(err)

        const userData = await users.findOne({_id: decoded.data})

        if(!userData) return res.status(400).json({status:"Not Authorized"})
        
        req.userID= userData._id
        
        next()

    })

}





taskRouter.get("/tasks", async(req, res)=>{

    let taskData 
    try{
        taskData = await tasks.find({})
    }
    catch(e){
        console.log("No data found")
    }

    if(taskData) return res.status(200).json(taskData)

})



taskRouter.get("/tasks/:id")


taskRouter.post("/tasks", async(req, res)=>{
    const newData = req.body
    const id = req.body.id
    let taskData

    try{
        taskData = await tasks.find({id: id})
    }
    catch(e){
        console.log(e)
    }

    if(taskData) {
        console.log(taskData)
        return console.log("duplicate id")
    }
    else{
        await tasks.create(taskData)
        .then(()=>{
            return res.status(200).json({status: "task added"})
        }
    )}})


taskRouter.put("/tasks/:id")
taskRouter.delete("/tasks/:id")

export default taskRouter