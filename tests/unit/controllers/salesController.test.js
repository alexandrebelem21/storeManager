const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { saleDB, allSalesDB } = require('../../mock');
const salesController = require('../../../src/controllers/salesController');
const salesService = require('../../../src/services/salesService');
const { expect} = chai;

chai.use(sinonChai);

describe("Testa a camada controller para a rota '/products'", () => {
  afterEach(() => {
    sinon.restore();
  });
  
  it('Registra uma venda', async () => {
     const req = {};
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'createSale').resolves(saleDB);
    await salesController.registerSales(req, res);

    expect(res.status).to.have.been.calledWith(201);
    // expect(res.json[0]).to.have.been.calledWith({ type: null, itemsSold: saleDB });
  });

  it('Retorna todas vendas pelo Id', async () => {
    const req = {};
    const res = {};
 
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()

    sinon.stub(salesService, 'allSales').resolves({ type: null, message: allSalesDB });
        await salesController.listSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesDB);
  });

  it('Retorna uma venda pelo Id', async () => {
    const req = {
     params: { id: 2 },
    };
    const res = {};
 
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns()

    sinon.stub(salesService, 'idSale').resolves({ type: null, message: allSalesDB });
    
    await salesController.getSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSalesDB);
  });

  
})