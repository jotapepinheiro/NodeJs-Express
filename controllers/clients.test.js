const clientsController = require('./clients')
const expect = require('chai').expect
const sinon = require('sinon')

describe('clients controller', () => {
    it('return one client', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('Fullstack Master Lista de Clientes')
        clientsController.list({}, res)
    })
    it('creates all clients', () => {
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('Fullstack Master Novo Cliente')
        clientsController.create({}, res)
    })
})