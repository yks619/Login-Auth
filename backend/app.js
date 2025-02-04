import express from "express";
import cors from "cors";


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

app.post('/user', (req, res) => {
  const data = req.body;
  console.log(data)
  res.json({
    message:"i got your data",
    data:data
  })
})

app.listen(3000, () => {
  console.log("server is running on port 3000")
})
    