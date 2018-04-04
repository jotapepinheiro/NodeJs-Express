const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', () => {
    it('return home', () => {
        let res = {
            render: function(){}
        }
        let data = {
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
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('home', data)
        indexController.home({}, res)
    })
    it('handles without num1 and num2', () => {
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('erro')
        indexController.calc({ query: {}}, res)
    })
    it('handles without num1', () => {
        let res = {
            render: function(){}
        }
        let req = {
            query: {
                 num2: '10'
            }
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('erro')
        indexController.calc(req, res)
    })
    it('handles without num2', () => {
        let res = {
            render: function(){}
        }
        let req = {
            query: {
                 num1: '10'
            }
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('erro')
        indexController.calc(req, res)
    })
    it('calcs', () => {
        let res = {
            render: function(){}
        }
        let req = {
            query: {
                num1: '10',
                num2: '20'
            }
        }
        let data = {
            soma : 30,
            title: 'Calculadora'
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('calc', data)
        indexController.calc(req, res)
    })
})