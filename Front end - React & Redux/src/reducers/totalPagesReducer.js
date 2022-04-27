const totalPagesReducer = (state = "1", action) => {
    
    if(action.type === "UPDATE_TOTAL_PAGES") {
        return action.payload
    }
    return state
}


export default totalPagesReducer