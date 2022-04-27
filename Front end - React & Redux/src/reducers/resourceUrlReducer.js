
const resourceUrlReducer = (state = "", action) => {
    if(action.type === "CHANGE_RESOURCE_URL") {
        return action.payload
    }
    return state
}

export default resourceUrlReducer;