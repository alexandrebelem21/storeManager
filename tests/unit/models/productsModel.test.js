const chai = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { allProductsDB, productIdDB, insertProductDB, updateProductDB } = require('../../mock');
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

    expect(response).to.be.deep.equal(productIdDB);
  });

  it('Insere um novo produto', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 5 }]);
    
    const response = await prodcutsModel.insert( insertProductDB);
    expect(response).to.be.deep.equal(5);
  });  

  it('Deleta um produto', async () => {
    sinon.stub(connection, 'execute').resolves(1);
    
    const response = await prodcutsModel.deleteProduct( 1);
    expect(response).to.be.deep.equal({ id: 1 });
  });  
  
  it('Atualiza um produto', async () => {
    sinon.stub(connection, 'execute').resolves([{ updateProductDB }]);
    
    const response = await prodcutsModel.updateProduct('Arco do arrow', 2);
    expect(response).to.be.deep.equal(updateProductDB);
  });  
});