const app = require('./app.js')

const port = 3333;

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}.`)
});