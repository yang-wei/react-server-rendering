'use strict';

var assert = require('assert');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var SearchBarComp = require('../components/searchBar.js');
  
describe('Search Bar Test', function() {
  it('Search bar should rendered on DOM', function() {
    
    var SearchBar = TestUtils.renderIntoDocument(<SearchBarComp />);
    
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(SearchBar, 'input');
    // should be [ input[text], input[checkbox] ];
    assert.equal(inputs.length, 2, "Can't find both input elements");
    
    assert.equal(inputs[0].getDOMNode().value, '');
    assert.equal(inputs[1].getDOMNode().checked, false);
    React.unmountComponentAtNode(SearchBar.getDOMNode().parent);
  });
})
