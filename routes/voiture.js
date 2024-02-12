const express = require('express');

const voitureRouter = express.Router();

const voiture = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}];


voitureRouter.post('/add',(req,res)=>{
    const new_voiture = req.body;
    voiture.push(new_voiture);
})

voitureRouter.get('/all',(req,res)=>{
    res.send(voiture);
})

voitureRouter.get('/:id',(req,res)=>{
    const voitureId=parseInt(req.params.id);
    const voitureById = voiture.find(voiture=>voiture.id === voitureId);
    if (voitureById !=null){
        res.send(voitureById);
    }else {
        res.send("<center> <h4> Not Found ! </h4> </center>");
    }
  
});

voitureRouter.put('/update/:id',(req,res)=>{

})

voitureRouter.delete('delete/:id',(req,res)=>{

})



module.exports=voitureRouter;