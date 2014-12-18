'use strict';
jest.dontMock('../components/productCategoryRow');
jest.dontMock('../components/productRow');
jest.dontMock('../components/productTable');

describe('Product table', function() {
  
  it('should work when is simulated', function() {
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var ProductTableComp = require('../components/productTable.js');

    var productTable = TestUtils.renderIntoDocument(
      <ProductTableComp products={[]} />
    );  

    var th = TestUtils.scryRenderedDOMComponentsWithTag(productTable, 'th');
    expect(th.length).toBe(2);
    expect(th[0].getDOMNode().textContent).toBe('Name');
    
    React.unmountComponentAtNode(productTable.getDOMNode().parentNode);
  })
});
