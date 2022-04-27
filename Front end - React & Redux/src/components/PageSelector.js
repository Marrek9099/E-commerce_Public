import { connect } from "react-redux"
import { changeCurrentPage, fetchProducts } from "../actions"

const PageSelector = ({changeCurrentPage, 
                       currentPage, 
                       totalPages, 
                       fetchProducts}) => {


    const renderLeftArrow = () => 
        <i onClick={ () => {
            if(currentPage > 1){
              const pageNumber = (parseInt(currentPage) - 1)
                changeCurrentPage(pageNumber)
                fetchProducts("pageChange")     
            }
          }
        } 
        className="bi bi-arrow-left-square m-1"/>

    const renderRightArrow = () => 
        <i onClick={ () => {
            if(currentPage < totalPages){
              const pageNumber = (parseInt(currentPage) + 1)
                 changeCurrentPage(pageNumber)
                 fetchProducts("pageChange")  
            }
          }
        } 
        className="bi bi-arrow-right-square m-1"/>                               


    return <div className="my-3">
       {renderLeftArrow()} 
       <span className="mx-1">{currentPage} / {totalPages}</span>
       {renderRightArrow()}
    </div>
}

const mapStateToProps = state => {
    return {
        totalPages: state.totalPages,
        currentPage: state.currentPage
    }
}

export default connect(mapStateToProps, {changeCurrentPage, fetchProducts})(PageSelector)