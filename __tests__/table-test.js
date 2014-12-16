'use strict';
jest.dontMock('../components/filterableProductTable');

describe('Search Bar Test', function() {

  it('Search bar should rendered on DOM', function() {

    var assert = require('assert');
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var TableComp = require('../components/filterableProductTable.js');
    var Table, PRODUCTS;

      PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'}
      ];

      Table = TestUtils.renderIntoDocument(<TableComp products={PRODUCTS}/>);

      var inputs = TestUtils.scryRenderedDOMComponentsWithTag(Table, 'input');
      var tr = TestUtils.scryRenderedDOMComponentsWithClass(Table, 'product-row');

      // should be [ input[text], input[checkbox] ];
      expect(inputs.length).toBe(2);
      expect(tr.length).toBe(3);

      var searchBar = TestUtils.findRenderedComponentWithType(Table, TableComp);
      expect(searchBar).toBeDefined;

      var form =  TestUtils.findRenderedDOMComponentWithTag(Table, 'form');
      expect(form).toBeDefined;
      
      var inputs = TestUtils.scryRenderedDOMComponentsWithTag(searchBar, 'input');
      console.log(form.refs);
      TestUtils.Simulate.change(inputs[0], { target: { value: 'Baseball' }});
      TestUtils.Simulate.change(inputs[1].refs.inStockOnlyInput.getDOMNode(), { checked: true });
     
      expect(inputs[0].getDOMNode().value).toBe('Baseball');
      expect(inputs[1].getDOMNode().checked).toBe('true')
      expect(tr.length).toBe(1);
      
      //expect(checkbox.getDOMNode().checked).toBe(true);
      
      expect(tr.length).toBe(2);

      React.unmountComponentAtNode(Table.getDOMNode().parent);
    });

});
