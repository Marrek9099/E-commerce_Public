import React from 'react'
import { connect } from "react-redux"
import { editBasketItem, 
         deleteBasketItem, 
         clearBasketItems } from '../actions'
import Navigation from '../components/Navigation'



const Basket = ({basket, 
                 editBasketItem, 
                 deleteBasketItem, 
                 clearBasketItems}
                ) => {

    let totalPrice = 0;

    let totalQuantity = 0;

    if(basket.length > 0) {
        totalPrice = 
                     basket.map( product => 
                     product.unit_price * product.quantity)
                     .reduce( (total, amount) => total + amount )

        totalQuantity = 
                       basket.map( product => 
                       product.quantity)
                       .reduce( (total, quantity) => total + quantity)
    }

    const renderLeftArrow = product => 
        <i onClick={ () => {
            if(product.quantity > 1){
                 const quantity = (product.quantity - 1)
                 editBasketItem({...product, quantity})  
            }
          }
        } 
        className="bi bi-dash-square 
                   m-1 actionItem"
        />

    const renderRightArrow = product => 
        <i onClick={ () => {
            const quantity = (product.quantity + 1)
            editBasketItem({...product, quantity})  
          }
        } 
          className="bi bi-plus-square 
                     m-1 actionItem"
        /> 

    const onOrderButtonClick = () => {
        alert("Thank you for testing my e-commerce project :)")
        clearBasketItems()
    }
 
    const renderBasketItems = () => basket.map(product => {
               
       return <div className="row basketItem py-2 
                              mx-1 align-items-center" 
                    key={product.itemId}
              > 
                <div className="col-12 col-sm-2">

                    <img  className="basketImage"
                          src={product.image_url}
                          alt="product placeholder"
                    />

                </div>
                
                <div className="col-12 col-sm-2">

                    {product.name}

                </div>

                <div className="col-12 col-sm-2">

                    {renderLeftArrow(product)}

                        <span className="quantity">
                            {product.quantity}
                        </span>  

                    {renderRightArrow(product)}

                </div>

                <div className="col-12 col-sm-2">

                    <div className="price">
                        Price per unit: ${product.unit_price}
                    </div>

                </div>

                <div className="col-12 col-sm-2">

                    <div className="price">
                        Order price: ${(product.quantity * product.unit_price).toFixed(2)}
                    </div>

                </div>

                <div className="col-12 col-sm-2">

                    <i onClick={() => {
                        deleteBasketItem(product.itemId) 
                        }
                    }  className="bi bi-trash actionItem">
                    </i>

                </div>    
            </div>
    })


    const renderOrderSummary = () => {
        if(basket.length > 0) {
            return <div className="row summary p-2 my-2">
                        
                        <div className="col-6">

                            Total Amount ({totalQuantity} items)
                            <br></br>
                            ${totalPrice.toFixed(2)}
                        
                        </div>

                        <div className="col-6">

                            <button
                                onClick={ () => onOrderButtonClick()} 
                                className="btn btn-success p-2">
                                Place Order
                            </button> 

                        </div>

                    </div>
        }
        else {

            return <div className="emptyBasket">

                        <i className="bi bi-basket"></i>

                        <br/>

                        Add items to your basket

                   </div>
        }
    }
        
    return <div id="basket"
                className='container-fluid '>

                <div className="row">

                    <Navigation/>

                    <div className="sectionTitle my-2">

                        Shopping Cart

                        <p>Items in the Shopping Cart will be ratained</p>

                    </div>

                    <div className="row">

                        {renderBasketItems()}
                        
                    </div>

                    {renderOrderSummary()}
                             
                </div>

            </div>

}

const mapStateToProps = state => {
    return {
        basket: Object.values(state.basket)
    }
}

export default connect(mapStateToProps, 
                      {editBasketItem, 
                       deleteBasketItem,
                       clearBasketItems})
                       (Basket)

