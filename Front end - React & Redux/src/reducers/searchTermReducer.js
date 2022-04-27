const searchTermReducer = (state = "all", action) => {  
   
    if(action.type === "SEARCH_TERM_CHANGE") {
        return action.payload
    }
    return state
}


export default searchTermReducer