import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {removeOneProduct, addOneProduct } from '../../containers/actionsLoggin'

class Basket extends Component {
	constructor(props) {
        super(props); 
       
    }

    displayBasket = (product) => {
        return(
            <article key={product.product.toString()} className="containerProduct"> 
               <div> 
                    {product.product} - 
                    {product.price} - 
                    <span className="containerRight"> Number of products: {product.productNo} 
                        <button onClick={() => this.props.onRemoveOneProduct(product.product, product.price, product.productNo)}> - </button> 
                        <button onClick={() => this.props.onAddOneProduct(product.product, product.price, product.productNo)}> + </button> 
                    </span> 
               </div>
            </article>
        )
        
    }

render() {
const {basket} = this.props; 
 
    return(
        <React.Fragment>
            {(basket.length > 0) && 
            <div className="basket"> {basket.map(this.displayBasket)} </div> }
            

            {(basket.length == 0) && 
            <div className="basket">basket nu are prodse </div> }
        </React.Fragment>
    )
}
}


function mapStateToProps(state) {
        return {
           basket : state.LogginReducer.basket
       }
}
    
const mapDispatchToProps = dispatch => {
    return {
        onRemoveOneProduct: (product, price, productNo) => dispatch(removeOneProduct(product, price, productNo)), 
        onAddOneProduct   : (product, price, productNo) => dispatch(addOneProduct(product, price, productNo)), 
    } 
}

 
 
export default connect(mapStateToProps, mapDispatchToProps)(Basket)
 