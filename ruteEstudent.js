const conexion = require('./config/conexion')
const rute = require('express').Router()


rute.get('/students',(req, res)=>{
    let sql ='select * from student'        
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

rute.get('/notas',(req, res)=>{
    let sql ='select * from notas'        
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

rute.get('/',(req, res)=>{
    let sql ='select * from course'        
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})



module.exports = rute 