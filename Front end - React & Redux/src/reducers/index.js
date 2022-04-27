import { combineReducers } from 'redux'
import productsReducer from './productReducer'
import categoriesListReducer from './categoriesListReducer'
import searchTermReducer from './searchTermReducer'
import totalPagesReducer from './totalPagesReducer'
import currentPageReducer from './currentPageReducer'
import resourceUrlReducer from './resourceUrlReducer'
import basketReducer from './basketReducer'
import orderIdReducer from './orderIdReducer'
import initialLoadReducer from './initialLoadReducer'

export default combineReducers( {
    products: productsReducer,
    categoriesList: categoriesListReducer,
    searchTerm: searchTermReducer,
    totalPages: totalPagesReducer,
    currentPage: currentPageReducer,
    resourceURL: resourceUrlReducer,
    basket: basketReducer,
    orderId: orderIdReducer,
    initialLoad: initialLoadReducer
})