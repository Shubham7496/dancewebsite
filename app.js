const express = require("express");
const path = require("path");
const app = express();
const port = 80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    const para = {}
    res.status(200).render('home.pug',para)
})
app.get('/contact',(req,res)=>{
    const para = {}
    res.status(200).render('contact.pug',para)
})


app.listen(port, () => {
    console.log(`this application is started successfully on port ${port}`);

})