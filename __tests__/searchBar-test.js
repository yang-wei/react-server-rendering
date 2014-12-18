'use strict';

jest.dontMock('../components/searchBar');

describe('SearchBar and checkbox', function() {
  
  it('should work when is simulated', function() {
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var SearchBarComp = require('../components/searchBar.js');
    
    var onUserInputMock = jest.genMockFunction();

    var searchBar = TestUtils.renderIntoDocument(
      <SearchBarComp onUserInput={onUserInputMock} />
    );  

    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(searchBar, 'input');
    expect(inputs.length).toBe(2);
    expect(onUserInputMock).not.toBeCalled();
    
    var checkbox = inputs[1]
    expect(checkbox.getDOMNode().checked).toBe(false);

    // TestUtils.Simulate doesn't work well
    //TestUtils.Simulate.change(checkbox.getDOMNode(), {checked: true});

    searchBar.setProps({ 'inStockOnly': true })
    searchBar.handleChange();

    expect(checkbox.getDOMNode().checked).toBe(true);
    expect(onUserInputMock).toBeCalledWith(null, true);
    
    React.unmountComponentAtNode(searchBar.getDOMNode().parentNode);
  })
})
