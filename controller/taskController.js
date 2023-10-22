import excQuery from "../config/connection.js";



const addTask = async (req,res)=>{
    try{
        
    //    const taskdata=req.body
       const { heading, description,date,priority,image} = req.body;
      
       const insertQuery = `INSERT INTO tasks (heading,description,date,priority,image) VALUES (?, ?, ?, ?, ?)`;
      
       const values=[heading, description, date, priority, image]
     
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
        const {id}=req.body
       
        const deleteQuery=`DELETE FROM tasks WHERE id=?`
        const values=[id]
        excQuery(deleteQuery,values).then((result)=>{
            console.log(result);
            res.status(200).json({ message: "success" });
        })
        
    }
    catch{

    }
}
const editTask = async (req,res)=>{
    try{
       
    //    const taskdata=req.body
       const {id, heading, description,date,priority,image} = req.body;
      
      
       const insertQuery = `UPDATE tasks SET heading = ?, description = ?, date = ?, priority = ?, image = ? WHERE id = ?`;
      
       const values = [heading, description, date, priority, image, id];
       console.log("kokoko");
       excQuery(insertQuery,values).then((res)=>{
        console.log(res);
       
       })
    }
    catch{
      
    }
}

 const getPriorityWise= async(req,res)=>{
    try {
       
        let getQuery;
        let values = [];
        const {priority}=req.body
       
        if (priority && priority.toLowerCase() === 'all') {
            getQuery = `SELECT * FROM tasks`;
        } else {
            getQuery = `SELECT * FROM tasks WHERE priority = ?`;
            values = [priority];
        }
        const result = await excQuery(getQuery, values).then((result)=>{
            console.log(result,"result here");
            res.status(200).json({ message: "success", data: result });
        })
        
    } catch (error) {
        console.error("Error occurred:", error);
        throw error; // Rethrow the error to handle it further up the call stack
    }
 }

export default {
    addTask,
    getTasks,
    getSingle,
    deleteTask,
    editTask,
    getPriorityWise
}