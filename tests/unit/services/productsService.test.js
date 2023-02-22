const chai = require('chai');
const sinon = require('sinon');
const { allProductsDB, productIdDB } = require('../../mock');
const prodcutsService = require('../../../src/services/prodcutsService');
const prodcutsModel =  require('../../../src/models/prodcutsModel')
const { expect } = chai;

describe("Testa a camada service para a rota '/products'", () => {
      afterEach(() => {
    sinon.restore();
      });
  
  it('Retorna todos produtos cadastrados', async () => {
    sinon.stub(prodcutsModel, 'findAll').resolves(allProductsDB);

    const response = await prodcutsService.allProducts();
    expect(response).to.be.deep.equal({ type: null, message: allProductsDB });
  });
  it('Retorna um produto pelo ID', async () => {
    sinon.stub(prodcutsModel, 'findById').resolves(productIdDB);

    const response = await prodcutsService.idProduct();
    expect(response).to.be.deep.equal({ type: null, message: productIdDB });
  });
})