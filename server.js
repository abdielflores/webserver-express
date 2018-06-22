const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'jOse abdiel',
    });
});
app.get('/about', (req, res) => {
        res.render('about');
    })
    /*app.get('/', function(req, res) {
        //res.send('Hola Mundo')
        let salida = {
            nombre: 'Abdiel',
            edad: 25,
            url: req.url
        }
        res.send(salida);
    })

    app.get('/data', function(req, res) {
        res.send('Hola Mundo')
    })*/

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port} `);
})