'use strict';
/** @jsx React.DOM */
var assert = require('assert');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ProductTableComp = require('../components/productTable.js');
var ProductTable, PRODUCTS = [], table, th;
  
describe('Product Table Test', function() {
  before(function() {

    ProductTable = TestUtils.renderIntoDocument(<ProductTableComp products={PRODUCTS} />);

  });

  it('table, th should rendered on DOM', function() {
    
    table = TestUtils.findRenderedDOMComponentWithTag(ProductTable, 'table');
    assert.ok(table,  "Can't find table element");

  });

  it('Name, Price th should rendered on DOM ', function() {
  
    th = TestUtils.scryRenderedDOMComponentsWithTag(ProductTable, 'th');
    assert.equal(th.length, 2, "Name, Price don't seem to rendered on DOM");
    assert.equal(th[0].getDOMNode().textContent, 'Name', "The first th is not 'Name'");
  })

  after(function() {
    // cleaning up 
    React.unmountComponentAtNode(table.getDOMNode().parent);
    React.unmountComponentAtNode(th.getDOMNode().parent);
  })
})
