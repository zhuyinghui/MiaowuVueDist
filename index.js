let express=require('express');
let app=new express();
let ejs=require('ejs');
app.set('view engine','ejs');
app.set('views',__dirname);

const path = require('path')
app.use(express.static(path.join(__dirname)))

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(8080);