import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true}

})

const users = mongoose.model("user", userSchema)

export default users