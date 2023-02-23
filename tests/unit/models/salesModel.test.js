const chai = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');
const { saleDB, allSalesDB } = require('../../mock');
const { expect } = chai;

describe("Testa a camada model para a rota '/sales'", () => {
  afterEach(() => {
    sinon.restore();
  });
  
  it('Insere uma nova venda', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 8 }]);

    const saleId = await salesModel.insertSale();
    expect(saleId).to.equal(8);
  });    

  it('Insere um produto em uma venda', async () => {
    sinon.stub(connection, 'execute').resolves([]);
    const response = await salesModel.insertProductSale({ id: 1, sales: saleDB });
    
    expect(response).to.deep.equal(saleDB);
  });
  
  it('Busca todas as vendas', async () => {
    sinon.stub(connection, 'execute').resolves([allSalesDB]);

    const response = await salesModel.findAllSales();
    expect(response).to.deep.equal(allSalesDB);
  });

  it('Busca venda pelo Id', async () => {
    sinon.stub(connection, 'execute').resolves([allSalesDB]);

    const response = await salesModel.findSalesById(1);
    expect(response).to.deep.equal(allSalesDB);
  });
});