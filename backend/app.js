import express from "express";
import cors from "cors";
import { prisma } from "./config/prisma.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const app = express()
app.use(cors());
app.use(express.json())

app.get("/user", (req, res)=>{
  res.json({
    id:1,
    name:"yamkumar",
    email:"mkmrshrstha@gmail.com"
  })
  
})

app.post('/user', async(req, res) => {
  const {name,address,contact,email,password} = req.body;

const checkEmail = await prisma.user.findUnique({
  where:{
    email
  }
})

if(checkEmail){
      return res.status(404).json({
        message:"Email Already Exists",
      });
    }

const salt = await bcrypt.genSalt(10);
const hashPassword =await bcrypt.hash(password, salt);
const saveData = await prisma.user.create({
  data:{
    name:name,
    address:address,
    contact:contact,
    email:email,
    password:hashPassword,
  },
});

const token = jwt.sign({
  id:saveData.id,
  email:saveData.email,
}, "kumar",
{
  expiresIn: "1d"
}
)

return res.status(200).json({
  message:"user created successfully",
  data:saveData,
  token:token
});
});

app.listen(3000, () => {
  console.log("server is running on port 3000")
})
    