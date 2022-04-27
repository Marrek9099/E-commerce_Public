
const orderIdReducer = (state = 0, action) => {
    if(action.type === "CREATE_ID") {
        const updatedState = state + 1
        return updatedState
    }

    return state
    
}

export default orderIdReducer