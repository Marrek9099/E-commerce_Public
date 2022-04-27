const categoriesListReducer = (state =[], action) => {
    if(action.type === "FETCH_CATEGORIES") {   
        return [...action.payload]
    } 
    return state
}


export default categoriesListReducer