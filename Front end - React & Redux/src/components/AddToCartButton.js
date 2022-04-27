import React, {useRef} from 'react'
import { connect } from "react-redux"
import { addBasketItem } from '../actions'

const AddToCartButton = ({addBasketItem, product, quantity}) => {

    const buttonText = useRef(null)

    const onAddButtonClick = () => {
        
        buttonText.current.innerHTML  = 
        `<i class="bi bi-cart-check"></i>`

        setTimeout( () => {
            buttonText.current.innerHTML="Add to Cart"
        }, 1000)

    }

    return <button 
                onClick={() => {
                    addBasketItem(product, quantity)
                    onAddButtonClick()
                }} 
                id="addToCart"
                className="my-2">
                <span ref={buttonText} >Add to Cart</span>
            </button>
}

export default connect(null, {addBasketItem})(AddToCartButton)

