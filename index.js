const express=require('express');
const app=express();
const mongoose=require('mongoose');
const mongourl='mongodb://localhost:27017/CRUD';
app.use(express.json());
const cors=require('cors');
app.use(cors());
const User=require('./userModel');

app.get('/',(req,res)=>{
    User.find({})
    .then((user)=>{
        res.json(user);
    })
    .catch((err)=>{
        res.send(err);
    })
})
app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    User.findById({_id:id})
    .then((user)=>{
        res.json(user);
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    User.findByIdAndDelete({_id:id})
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    User.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then((user)=>{
        res.json(user);
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.post('/create',(req,res)=>{
    const data=req.body;
    User.create(data)
    .then((user)=>{
        res.json();
    })
    .catch((err)=>{
        console.log(err);
    })

})

mongoose.connect(mongourl)
.then(()=>{
    app.listen(3000,()=>{
        console.log('listening')
    })
})
.catch((err)=>{
    console.log(err);
})