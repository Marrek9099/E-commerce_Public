const initialLoadReducer = (state = false, action) => {
    if(action.type === "LOADED") {
        return true
    }

    return state
}

export default initialLoadReducer