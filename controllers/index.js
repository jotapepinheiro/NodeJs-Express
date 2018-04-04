const home = (req, res) => {
    res.render('home', {
        time: 10,
        title: 'Fullstack Master Home',
        lista: ['João Paulo', 'Laura Nabuco', 'Maria da Glória', 'Pedro Lopes'],
        animais: [
            { name: 'Boris' },
            { name: 'Maggie' },
            { name: 'Tor' },
            { name: 'Nice' },
            { name: 'Pity' }
        ]
    })
}
const pagina1 = (req, res) => {
    res.send('Fullstack Master Pagina 1')
}
const calc = (req, res) => {
    // console.log(req.query)
    // Recebendo parametros: http://localhost:3000/calc?num1=1&num2=2
    if(req.query.num1 && req.query.num2){
        const { num1, num2 } = req.query
        const soma = parseFloat(num1) + parseFloat(num2)
        res.render('calc', { 
            title: 'Calculadora',
            soma
        })
    } else {
        res.render('erro')
    }
}
const par = (req, res) => {
    const isPar = (req.params.num % 2)===0
    if(isPar) {
        res.send('Numero é par')
    } else {
        res.send('Numero é impar')
    }
}
module.exports = {
    home,
    pagina1,
    calc,
    par
}