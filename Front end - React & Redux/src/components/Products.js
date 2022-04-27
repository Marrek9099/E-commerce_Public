import { useEffect} from "react"
import { connect } from "react-redux"
import { fetchProducts } from "../actions"
import { initialLoad } from "../actions";
import Product from "./Product";
import PageSelector from "./PageSelector";



const Products = ({products, fetchProducts, initialLoad, loaded}) => {

    useEffect(() => {
        if(!loaded) {
            fetchProducts("initialLoad")
            initialLoad()
        }       
    },[loaded,initialLoad,fetchProducts])


    const renderPageSelector = () => {
        if(products.length > 0){
            return <PageSelector/>
        }
    }


    
    const renderProducts = () => products.map( product => {

       return <div key={product.name} 
                    className=" col-12 col-md-5 
                                col-lg-4 my-2 ">
                                    
                    <Product theProduct={product}/>
              </div>    
       
    })
    


    return <div className="row">
                {renderProducts()}
                {renderPageSelector()}
        </div>


}

const mapStateToProps = state => {
    return {
        products: state.products,
        searchTerm: state.searchTerm,
        category: state.category,
        loaded: state.initialLoad
    }
}

export default connect(mapStateToProps, {fetchProducts, initialLoad})(Products)

