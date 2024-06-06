import { Router } from "express";
import users  from "../Model/userSchema.js";

import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const salt_rounds = 10;
const secret = process.env.secret;

const userRouter = Router();

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const userFound = await users.findOne({ username: username });
  if (!userFound) {
    res.status(404).json({ message: "user not found" });
  } else {
    const storedHashedPassword = userFound.password;

    bcrypt.compare(password, storedHashedPassword, (err, result) => {
      if (err) return res.status(404).json({ message: "Incorrect Password" });

      if (result) {
        const payload = {
          exp: Math.floor(Date.now() / 1000) + 3600,
          data: userFound._id,
        };

        const accessToken = jwt.sign(payload, secret);

        return res
          .status(200)
          .json({ message: "validated", token: accessToken });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    });
  }
});

userRouter.post("/register", async (req, res) => {
  const { username, password } = req.body;

  let existingEmail;

  try {
    existingEmail = await users.findOne({ username: username });
  } catch (e) {
    console.log(e);
  }

  if (existingEmail)
    return res.status(400).json({ message: "User already exists." });

  bcrypt.hash(password, salt_rounds, async (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      let records;

      try {
        records = await users.create({ username: username, password: hash });
      } catch (e) {
        return res
          .status(500)
          .json({ message: "Server Error.", error: e.message });
      }

      if (records) {
        return res.status(200).json({ message: "Registration Successful" });
      }
    }
  });
});

export default userRouter;
