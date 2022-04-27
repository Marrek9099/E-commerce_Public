const currentPageReducer = (state = "1", action) => {

    
    if(action.type === "CHANGE_CURRENT_PAGE") {
        return action.payload
    }

    return state
}


export default currentPageReducer