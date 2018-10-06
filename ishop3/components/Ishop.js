import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import Product from './Product';

class Ishop extends React.Component {
  
  state= {
      slectedProductId: null,
      productsList: this.props.products
  }

  productSelected = (code) => {
    console.log(this.state.slectedProductId + " " + code);
    this.setState({slectedProductId:code})
  }

  deleteProduct = (code) =>  {
    let productsFiltered = this.state.productsList.filter( p => {
      return p.code != code;
    });
    this.setState({productsList: [...productsFiltered]})
  }
  
  render() {

    var productsCode = this.state.productsList.map( item => 
      <Product key={item.code}
        code={item.code}
        name={item.name}
        price={item.price}
        url={item.url}
        quantity={item.quantity}
        cbSelected={this.productSelected}
        cbDeleted={this.deleteProduct}
        slectedProductId={this.state.slectedProductId}
        />
      );

    return (
      <table className="Product">
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Url</th>
          <th>Quantity</th>
          <th>Control</th>
        </thead>
        <tbody>
          {productsCode}
        </tbody>
      </table>
    )
  }
}

export default  Ishop;