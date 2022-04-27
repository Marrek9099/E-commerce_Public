import { Link } from 'react-router-dom'
import AddToCartButton from './AddToCartButton'


const Product = ({theProduct}) => {
 
    const productDetailsUrl = `/${theProduct.sku}`

    return <div className="productContainer my-1" style={{height:"13rem"}}>

        <div>

            <Link to={productDetailsUrl}>

                <img className="productImage"  
                 src={theProduct.image_url} 
                 alt="product placeholder"/>
            
            </Link>
            
        </div>

        <div style={{height:"30px"}} className="productName text-center">

            {theProduct.name}

        </div>

        <div className="fw-bold" style={{height:"20px"}}>

            {"$" + theProduct.unit_price}

        </div>

        <AddToCartButton product={theProduct} quantity={1}/>
        
    </div>

}


export default Product