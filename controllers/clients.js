const list = (req, res) => {
    res.send('Fullstack Master Lista de Clientes')
}
const create = (req, res) => {
    res.send('Fullstack Master Novo Cliente')
}
module.exports = {
    list,
    create
}