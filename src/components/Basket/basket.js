import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {removeProductFromBasket, addOneProduct } from '../../containers/actionsLoggin'

class Basket extends Component {
	constructor(props) {
        super(props); 
       
    }

    displayBasket = (product) => {
        return(
            <article key={product.product } className="containerProduct"> 
               <div> 
                    {product.product} - 
                    Price per 1 elem: {product.price}  
                    <span className="containerRight"> Number of products: {product.productNo} 
                        <button onClick={() => this.props.onRemoveOneProduct(product.product, product.price, product.productNo, product.id)}> - </button> 
                        <button onClick={() => this.props.onAddOneProduct(product.product, product.price, product.productNo, product.id)}> + </button> 
                    </span> 
                    {product.TotalPrice}
               </div>
            </article>
        )
        
    }

 

render() {
const {basket} = this.props; 
 
    return(
        <React.Fragment>
            {basket && 
            (basket.length > 0) && 
            <div className="basket"> 
                {basket.map(this.displayBasket)}
                <br /> <br /> <br />
               Suma totala:  {basket.reduce((acc, elem) =>  {
                  let sumaTotala =  (elem.totalPrice) ?  acc + elem.totalPrice : acc+ elem.price
                  return sumaTotala}, 0 )} 
               
             
            </div> }
            

            {basket && (basket.length == 0) && 
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
        onRemoveOneProduct: (product, price, productNo, id) => dispatch(removeProductFromBasket(product, price, productNo, id)), 
        onAddOneProduct   : (product, price, productNo, id) => dispatch(addOneProduct(product, price, productNo, id)), 
    } 
}

 
 
export default connect(mapStateToProps, mapDispatchToProps)(Basket)
 