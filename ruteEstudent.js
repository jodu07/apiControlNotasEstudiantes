const conexion = require('./config/conexion')
const rute = require('express').Router()


rute.get('/estudents',(req, res)=>{
    let sql ='select * from estudent'        
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

rute.get('/notas',(req, res)=>{
    let sql ='select * from estudent'        
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

module.exports = rute 