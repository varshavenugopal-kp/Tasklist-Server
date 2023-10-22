import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    connectionLimit: 10,
    multipleStatements: true
})


const excQuery = async (query,values) => {
    return new Promise(async (resolve, reject) => {
        db.query(query,values,(err,res)=>{
           if(err){
                reject(err)
           }else{
                resolve(res)
           }
        })
    })
}

export default excQuery