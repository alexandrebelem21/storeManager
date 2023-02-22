const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { allProductsDB, productIdDB } = require('../../mock');
const prodcutsModel =  require('../../../src/models/prodcutsModel')
const { expect } = chai;

describe("Testa a camada model para a rota '/products'", () => {
    afterEach(() => {
    sinon.restore();
    });
  
  it('Retorna todos produtos cadastrados', async () => {
    sinon.stub(connection, 'execute').resolves([allProductsDB]);

    const response = await prodcutsModel.findAll();
    expect(response).to.be.deep.equal(allProductsDB);
  });

  it('Retorna produto a partir do ID', async () => {
    sinon.stub(connection, 'execute').resolves([[productIdDB]]);
   
    const response = await prodcutsModel.findById(2);
    //  console.log('b', productIdDB);
    // console.log('a', response);
     
    expect(response).to.be.deep.equal(productIdDB);
  });
});