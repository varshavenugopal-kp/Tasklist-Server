import excQuery from "../config/connection.js";



const addTask = async (req,res)=>{
    try{
        console.log("ghjklkjhgfghjk");
    //    const taskdata=req.body
       const { heading, description,date,priority,image} = req.body;
      
       const insertQuery = `INSERT INTO tasks (heading,description,date,priority,image) VALUES (?, ?, ?, ?, ?)`;
      
       const values=[heading, description, date, priority, image]
       console.log("kokoko");
       excQuery(insertQuery,values).then((res)=>{
        console.log(res);
       
       })
    }
    catch{
      
    }
}

const getTasks=async(req,res)=>{
    try{
        const getQuery=`SELECT * FROM tasks`
        const values=[]
        excQuery(getQuery,values).then((result)=>{
            console.log(result);
            res.status(200).json({ message: "success", data: result });
        })
    }
    catch{

    }
}

const getSingle=async(req,res)=>{
    try{
         const id=req.params.taskId
         console.log("kjkjkj",id);
        const getQuery=`SELECT * FROM tasks WHERE id=?`
        const values=[id]
        excQuery(getQuery,values).then((result)=>{
            console.log(result);
            res.status(200).json({ message: "success", data: result });
        })
    }
    catch{

    }
}

const deleteTask=async(req,res)=>{
    try{
        const id=req.body
        const deleteQuery=`DELETE FROM tasks WHERE id=?`
        const values=[id]
        excQuery(getQuery,values).then((result)=>{
            console.log(result);
            res.status(200).json({ message: "success" });
        })
        
    }
    catch{

    }
}

export default {
    addTask,
    getTasks,
    getSingle,
    deleteTask
}