import axios from 'axios'
import history from '../components/history'

export const fetchProducts = (searchCriteria, categoryId = 0) => async (dispatch,getState) => {

    let url = 'https://dimitar-ecommerce.onrender.com/products';

    let response;
    let products;

    switch(searchCriteria){
        case "initialLoad":
          url += `?page=0`
          response  = await axios.get(url)
          products = response.data.products
          break
        case "productName":
            if(getState().searchTerm !== ""){
                url += `/getByName?name=${getState().searchTerm}&page=0`
                response = await axios.get(url)
                products = response.data.products;
                history.push('/')
            }
            break
        case "categoryChange":
            if(categoryId === 0){
                url += "?page=0"
                response = await axios.get(url)
                products = response.data.products
            }
            else {
                url += `/getByCategoryId?id=${categoryId}&page=0`
                response = await axios.get(url)
                products = response.data.products
            }
            break
        case "pageChange":
            url = getState().resourceURL
            url = url.substring(0, url.lastIndexOf("=") + 1).concat(parseInt(getState().currentPage) - 1)
        
            dispatch(changeResourceURL(url))
            response = await axios.get(url)
            products = response.data.products 
            break;     
        default:
            return null
    }
 
    if(searchCriteria !== "pageChange") {
        dispatch(updateTotalPages(response.data.totalPages));
        dispatch(changeCurrentPage(1))
        dispatch(changeResourceURL(url))
    }
    
    dispatch({ type: "FETCH_ALL_PRODUCTS", payload: products})

}


export const fetchCategories = () => async dispatch => {

    const {data} = await axios.get('https://dimitar-ecommerce.onrender.com/productCategories')

    const categories = data

    dispatch({ type: "FETCH_CATEGORIES", payload: categories})
}

export const changeSearchTerm = searchTerm => {
    return { type: "SEARCH_TERM_CHANGE", payload:searchTerm}
}

export const updateTotalPages = numberOfPages => {
    return { type: "UPDATE_TOTAL_PAGES", payload: numberOfPages}
}

export const changeCurrentPage = pageNumber => {
    return { type: "CHANGE_CURRENT_PAGE", payload: pageNumber}
}

export const changeResourceURL = url => {
    return { type: "CHANGE_RESOURCE_URL", payload: url}
}

export const createOrderId = () => {
    return { type: "CREATE_ID"}
}

export const addBasketItem = (product, quantity) => (dispatch,getState) => {

    dispatch(createOrderId())

    const itemId = getState().orderId

    const item = { itemId, ...product, quantity}
    
    dispatch({ type: "ADD_ITEM", payload:item})
}

export const editBasketItem = product =>  {
   return { type: "EDIT_ITEM", payload:product}
}

export const deleteBasketItem = product =>  {
   return { type: "REMOVE_ITEM", payload:product}
}

export const clearBasketItems = () => {
    return { type: "CLEAR_BASKET"}
}

export const initialLoad = () => {
    return { type: "LOADED"}
}
