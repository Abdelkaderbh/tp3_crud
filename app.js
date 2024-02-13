const express = require("express");
const app = express();
const PORT = 8000;
const voiture = require('./routes/voiture');

app.use(express.json());
app.use('/voiture',voiture);


app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
})