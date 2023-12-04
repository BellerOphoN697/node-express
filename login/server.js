const express=require('express')
const bodyparser=require('body-parser')
const app = express()
const session=require('express-session')
const port = process.env.PORT||3000
const{v4:uuidv4}=require('uuid')
const router=require('./router')

app.set('view engine','ejs')
//app.use(bodyparser.json)
app.use(bodyparser.urlencoded({extended:true}))

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))
app.use('/router',router)
//home route
app.get('/',(req,res)=>{
    res.render('base',{title:"Login Page"});
})

app.listen(port,()=>{console.log("Listening on server http://localhost:3000");})