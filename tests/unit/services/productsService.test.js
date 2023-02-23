const chai = require('chai');
const sinon = require('sinon');
const { allProductsDB, productIdDB, insertProductDB, updateProductDB } = require('../../mock');
const prodcutsService = require('../../../src/services/prodcutsService');
const prodcutsModel =  require('../../../src/models/prodcutsModel');
const { productsService } = require('../../../src/services');
const { expect } = chai;

describe("Testa a camada service para a rota '/products'", () => {
   
  
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

  it('Insere um novo produto', async () => {
    sinon.stub(prodcutsModel, 'insert').resolves(6);
    sinon.stub(prodcutsModel, 'findById').resolves(insertProductDB[0]);

    const response = await productsService.createProduct('Arco do arrow');
    expect(response).to.be.deep.equal({ type: null, message: insertProductDB[0] });
  });
  
  it('Deleta um produto', async () => {
    sinon.stub(prodcutsModel, 'deleteProduct').resolves();

    const response = await prodcutsService.deleteProduct(1);
    expect(response).to.be.deep.equal({ type: null, message: '' });
  });

  it('Atualiza um produto', async () => {
    sinon.stub(prodcutsModel, 'findById').resolves(2);
  sinon.stub(prodcutsModel, 'updateProduct').resolves(updateProductDB);

  const response = await prodcutsService.updateProduct(2, {name: 'Arco do arrow'});
  expect(response).to.be.deep.equal({ type: null, message: updateProductDB });
  });

     afterEach(() => {
    sinon.restore();
      });
})