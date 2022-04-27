import _ from 'lodash';


const basketReducer = (state = {}, action) => {
    
    if(action.type === "ADD_ITEM") {
        return {...state, [action.payload.itemId]: action.payload}
    }

    else if(action.type === "EDIT_ITEM") {
        return { ...state, [action.payload.itemId]: action.payload}
    }

    else if(action.type === "REMOVE_ITEM") {
        return _.omit(state, action.payload)
    }

    else if(action.type === "CLEAR_BASKET") {
        return {}
    }

    
    return state
}


export default basketReducer