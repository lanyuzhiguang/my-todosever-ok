var express = require('express');
var router = express.Router();
var todolist =require('../database/model/todolist')
router.get('/', function(req, res, next) {
    // console.log(res)
  todolist.find({}).exec((err,data)=>{
    // console.log(err,data);
      res.json({
          code:200,
          data
      });
  })
});
router.post('/', function(req, res) {
    let todo =req.body
    console.log(req.body);

    todo.isDone=false;
    todolist.create(todo).then(data=>{
        res.json({
            code:200,
            msg:'success',
        });
    }).catch(err=>{
        console.log(err)
    })
});
router.patch('/:id',(req, res)=> {
    let id =req.params.id;
   let isDone = req.body.isDone==1?true:false;
    console.log(isDone)
    console.log(id)
    todolist.update({_id:id},{isDone}).then(data=>{
        res.json({
            code:200,
            msg:'success',
        });
    });
});
router.delete('/:id',(req,res)=> {
    let id =req.params.id;
    todolist.remove({_id:id}).then(data=>{
        res.json({
            code:200,
            msg:'success',
        });
    })
});

module.exports = router;
