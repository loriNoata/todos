import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {addToBasket} from '../../containers/actionsLoggin'; 

class Products extends Component {
	constructor(props) {
        super(props); 
    }

render() {
    return(
        <div className="products">
            <h1> Products </h1>
            <article className="product"> carte - pret: 10  <button onClick={() => this.props.onAddToBasket("carte", "100", "1" )}> cumpara </button> </article>
            <article className="product"> laptop  - pret:1500 <button onClick={() => this.props.onAddToBasket("laptop", "1500", "1" )}> cumpara</button></article>
            <article className="product"> cana - pret: 50 <button onClick={() => this.props.onAddToBasket("cana", "50", "1" )}> cumpara</button></article>
            <article className="product"> telefon - pret: 300 <button onClick={() => this.props.onAddToBasket("telefon", "300", "1" )}> cumpara</button></article>
        </div>
    )
}
}

// function mapStateToProps(state) {
// //     return {
// //        newsList : state.ArticleReducer.newsList
// //    }
// }

const mapDispatchToProps = (dispatch) => {
   return {
    onAddToBasket: (product, price, productNo) => dispatch(addToBasket(product, price, productNo)) 
   }
}

export default connect(null, mapDispatchToProps)(Products) 


