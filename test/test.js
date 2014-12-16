'use strict';
 
describe('Search Bar Test', function() {
 
  var assert = require('assert');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var TableComp = require('../components/filterableProductTable.js');
  var Table, PRODUCTS;

  before(function() {

    PRODUCTS = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'}
    ];

    Table = TestUtils.renderIntoDocument(<TableComp products={PRODUCTS}/>);

  });

  it('Search bar should rendered on DOM', function() {
    
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(Table, 'input');
    var tr = TestUtils.scryRenderedDOMComponentsWithClass(Table, 'product-row');

    // should be [ input[text], input[checkbox] ];
    assert.equal(inputs.length, 2, "Can't find both input elements");
    
    var checkbox = inputs[1];
    assert.equal(checkbox.getDOMNode().checked, false);
    
    checkbox.props.checked = true;
    TestUtils.Simulate.change(checkbox.props.checked);
    assert.equal(checkbox.props.checked, true, "Checkbox is not cheecked");
    assert.equal(tr.length, 3);


    var search = inputs[0]; 

    assert.equal(search.getDOMNode().value, '');

    TestUtils.Simulate.change(search.getDOMNode, {target: {value: 'Baseball'}});
    search.getDOMNode().value = 'Baseball';
    assert.equal(search.getDOMNode().value, 'Baseball');
    assert.equal(tr.length, 1);

  });

  after(function() {

    React.unmountComponentAtNode(Table.getDOMNode().parent);

  })
})
