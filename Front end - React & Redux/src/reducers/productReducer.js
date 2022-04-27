const productsReducer = (state =[], action) => {
    if(action.type === "FETCH_ALL_PRODUCTS") {
        return [...action.payload]
    }

    else if(action.type === "FETCH_PRODUCTS_BY_CATEGORY") {
        return [...action.payload]
    }

    else if(action.type === "FETCH_PRODUCTS_BY_NAME") {
        return [...action.payload]
    }

    
    return state
}


export default productsReducer