const express = require('express'); //inyección de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definición del puerto de escucha
app.use('/assets', express.static(__dirname + '/public')); //contenido estático

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en" <head><link rel="stylesheet" href="/assets/style.css"> <meta charset="UTF-8">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    </body> </html>`)
});

app.get('/student', (req,res)=>{
    res.render('index');
});

//enviamos como parametro extra, el callback, para que se ejecute
//antes que el route handler
app.post('/student', express.urlencoded({ extended: false}),(req,res)=>{
    res.send(`First Name es: ${req.body.fname},
    Last Name es: ${req.body.lname},`);
    // res.send(req.body)
});

//enviamos como parametro extra, el callback, para que se ejecute
//antes que el route handler
app.post('/personjson', express.json({typw: '*/*'}),(req,res)=>{
    console.log('El objeto contiene:' , (req.body));
    console.log('Nombre:' ,req.body.firstname);
    console.log('Apellido:' ,req.body.lastname);
});

app.listen(PORT);