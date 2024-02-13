const express = require('express');
const voitureRouter = express.Router();



const voiture = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}];


voitureRouter.post('/add',(req,res)=>{
    const new_voiture = req.body;
    voiture.push(new_voiture);
    res.send("ADDED !")
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
    const voitureId = parseInt(req.params.id);
    const voitureById = voiture.find(voiture=>voiture.id === voitureId);
    const newName = req.body.name;
    if (voitureById != null){
        voitureById.name = newName;
        res.send("UPDATED !")
    }else{
        res.send("<center> <h4> Not Found ! </h4> </center>");
    }
})

voitureRouter.delete('/delete/:id',(req,res)=>{
    const voitureId=parseInt(req.params.id);
    const voitureById = voiture.findIndex(voiture=>voiture.id === voitureId);
        if (voitureById !=null){
            voiture.splice(voitureById,1);
            res.send("DELETED !");
        }else {
        res.send("<center> <h4> Not Found ! </h4> </center>");
    }
})



module.exports=voitureRouter;