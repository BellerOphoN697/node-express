var express=require('express');
var router=express.Router();

const credential={
    email:'admin@gmail.com',
    password: '12345678'
}

router.post('/login',(req,res)=>{
    if(req.body.email==credential.email && req.body.password==credential.password){
        req.session.user=req.body.email;
        res.redirect('/router/dashboard')
        //res.end("Logged in")

    }
    else{
        res.end("Invalid username")
    }
})

//router for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user})
        res.send('authorised')
    }
    else{
        
        res.render('dashboard',{user:req.session.user})
    }
})

module.exports=router