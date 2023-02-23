const chai = require('chai');
const sinon = require('sinon');
const { saleDB, allSalesDB } = require('../../mock');
const salesService = require('../../../src/services/salesService');
const salesModel =  require('../../../src/models/salesModel');
const { expect } = chai;

describe("Testa a camada service para a rota '/products'", () => {
   
  it('Retorna venda criada', async () => {
    sinon.stub(salesModel, 'insertSale').resolves(1);
    sinon.stub(salesModel, 'insertProductSale').resolves(saleDB);
    
  const response = await salesService.createSale(saleDB)
expect(response).to.be.deep.equal({ id: 1, itemsSold: saleDB });


  });
  
  it('Retorna todas vendas', async () => {
    sinon.stub(salesModel, 'findAllSales').resolves(allSalesDB);

    const response = await salesService.allSales();
    expect(response).to.be.deep.equal({ type: null, message: allSalesDB });
  });

  it('Retorna as vendas pelo id', async () => {
    sinon.stub(salesModel, 'findSalesById').resolves(allSalesDB);

    const response = await salesService.idSale(1);
    expect(response).to.be.deep.equal({ type: null, message: allSalesDB });
  });

  it('Se for um id invalido', async () => {
    sinon.stub(salesModel, 'findSalesById').resolves([]);

    const response = await salesService.idSale(2);
    expect(response).to.be.deep.equal({ type: 'SALE_NOT_FOUND', message: 'Sale not found' });
  });

     afterEach(() => {
    sinon.restore();
      });
 });