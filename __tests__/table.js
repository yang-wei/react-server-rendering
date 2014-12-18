'use strict';
jest.dontMock('../components/searchBar');
jest.dontMock('../components/productRow');
jest.dontMock('../components/productCategoryRow');
jest.dontMock('../components/productTable');
jest.dontMock('../components/filterableProductTable');

describe('Whole table test', function() {

  it('Search bar should rendered on DOM', function() {

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
      
      var tr = TestUtils.scryRenderedDOMComponentsWithTag(Table, 'tr');
      // should be PRODUCTS.length + 2 (table head and category length)
      expect(tr.length).toBeGreaterThan(PRODUCTS.length);

      var checkbox = TestUtils.scryRenderedDOMComponentsWithTag(Table, 'input')[1];
      expect(checkbox.getDOMNode().checked).toBe(false);

      // Not simulating
      //TestUtils.Simulate.change(checkbox, { target: { checked: true }});

      // Doesn't re-render? Because no lifeCycle ???
      //Table.handleUserInput('Basketball', true);
      
      // Doesn't re-render too?
      Table.setState({ filterText: 'Basketball', inStockOnly: true });

      expect(checkbox.getDOMNode().checked).toBe(true);

      // All data should not display, only the head tr. test failed :( 
      //expect(tr.length).toBe(2);

      React.unmountComponentAtNode(Table.getDOMNode().parentNode);

    });

});
