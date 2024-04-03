const express = require("express")
const app = express()
const port = 3000
const ejs = require("ejs")
const bodyparser = require("body-parser")
const path = require("path");
const collection = require("./src/mongo")
require("./database/conn")




app.use(bodyparser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:false}))



app.set('view engine', 'ejs');
app.engine("html",require("ejs").renderFile)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));
app.engine('html', require('ejs').renderFile);






app.get("/index",(req,res)=>{
    res.render("index")
})
app.get("/who",(req,res)=>{
    res.render("who")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.get("/tech",(req,res)=>{
    res.render("tech")
})
app.get("/choose",(req,res)=>{
    res.render("choose")
})

app.listen(port,()=>{
    console.log(`the server is running at http://localhost:${port}`)

})