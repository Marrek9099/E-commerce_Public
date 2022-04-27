import React, {useState, useEffect} from 'react'
import Navigation from '../components/Navigation';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import AddToCartButton from '../components/AddToCartButton';



const ProductDetails = () => {
    
    const { id } = useParams();

    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect( () => {
        const fetchProductBySku = async () => {
            const response = await axios.get
            (`https://dimitar-ecommerce.onrender.com/products/${id}`)
            setSelectedProduct(response.data)
        }

        fetchProductBySku()
    }, [id])

    const [quantity, setQuantity] = useState(1)
    

    const renderLeftArrow = () => 
        <i onClick={ () => {
            if(quantity > 1){
              setQuantity(quantity - 1)      
            }}
          } 
          className="bi bi-dash-square"
        />

    const renderRightArrow = () => 
        <i onClick={ () => {
            setQuantity(quantity + 1)     
          }
        } 
           className="bi bi-plus-square"
        /> 


    const renderProductDetails = () => {
        if(selectedProduct !== null) {
        
            return <div id="productDetails" 
                        className="container-fluid">

                        <div className="row">

                            <Navigation/>

                            <div className="col-12 col-md-6 my-2">

                                <img src={selectedProduct.image_url} 
                                        alt="product placeholder"
                                        className="productImage"
                                />

                            </div>

                            <div className="col-12 col-md-6 
                                            details my-3">

                                <h4>{selectedProduct.name}</h4>

                                <div className="priceLabel">
                                    Price
                                </div>

                                <div className="price">

                                    ${selectedProduct.unit_price}

                                </div>

                                <div className="my-2">

                                    <span className="quantity">
                                        Quantity 
                                    </span>   

                                    {renderLeftArrow()}

                                    <span className="quantity mx-2">
                                        {quantity}
                                    </span>

                                    {renderRightArrow()}

                                </div>

                                <div>
                                    <span className="totalPrice">
                                        Total price
                                    </span>

                                    ${(selectedProduct.unit_price * quantity).toFixed(2)}
                                </div>

                                <AddToCartButton 
                                        product={selectedProduct} 
                                        quantity={quantity} 
                                />

                            </div> 

                        </div>
                    
                    
                    </div>            
                    
        }
        else {
            return <div>
                        Loading.. 
                        <Link to="/"> Home</Link>

                   </div>
        }
    }
    

    return renderProductDetails()

}


export default ProductDetails

