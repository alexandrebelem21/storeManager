const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { allProductsDB, productIdDB } = require('../../mock');
const prodcutsController = require('../../../src/controllers/productsController');
const prodcutsService = require('../../../src/services/prodcutsService');
const { expect} = chai;

chai.use(sinonChai);

describe("Testa a camada controller para a rota '/products'", () => {
      afterEach(() => {
    sinon.restore();
    });
  it('Retorna todos produtos cadastrados', async () => {
    const req = {}
    const res = {}

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    sinon.stub(prodcutsService, 'allProducts').resolves({ type: null, message: allProductsDB });
    await prodcutsController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsDB);
  });

    it('Retorna produto pelo Id', async () => {
      const req = {
        params: { id: 2 },
      };
      const res = {}
console.log(req);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

      sinon.stub(prodcutsService, 'idProduct').resolves({ type: null, message:  productIdDB  });
    
    await prodcutsController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productIdDB);
  });
})