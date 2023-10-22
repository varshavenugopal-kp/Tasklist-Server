import express from "express"
import cors from "cors"
import excQuery from "./config/connection.js"
import taskrouter from "./routes/taskrouter.js"
const app=express()

 



app.use(express.json())
app.use(cors({
    origin:['http://localhost:3000'],
    methods:["GET","POST"]
}))



app.use("/",taskrouter)

app.listen(8000,()=>{
    console.log("connected");
    excQuery(`CREATE TABLE IF NOT EXISTS tasks (id INT AUTO_INCREMENT PRIMARY KEY,heading VARCHAR(50) NOT NULL,image TEXT,description VARCHAR(255) NOT NULL,priority VARCHAR(10), date DATE,time TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`).then((res)=>{
        console.log(res);
        
     })
})