const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')
// console.log(path.join(__dirname, 'views'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/*
//Middleware exemplo: checar se usuario esta logado em seguida dar next
app.use((rep, res, next) => {
    console.log('passou por aqui')
    next()
})
*/
app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(port, () => console.log('Listening on port:' + port))