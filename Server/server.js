import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import userRouter from "./Routes/userRouter.js"
import taskRouter from "./Routes/taskRouter.js"

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())



async function main(){

try{
    await mongoose.connect("mongodb://localhost:27017/tasks")
    .then(()=>console.log("db connected successfully"))
}
catch(e){
    console.log(e)
}



app.use("/user", userRouter)

app.use("/task", taskRouter)

app.listen(PORT, ()=>{


    console.log("App is listening at port", PORT)
})

}

main().catch(e=>console.error(e))