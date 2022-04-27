import {useEffect, useRef} from 'react'
import { connect } from "react-redux"
import { fetchCategories, fetchProducts, initialLoad} from "../actions"

let persistedSelect = null

const Categories = ({fetchCategories, fetchProducts, 
                     categoriesList, initialLoad, loaded}) => {

    useEffect(() => {
        if(!loaded) {
            fetchCategories()
            initialLoad()
            selectedCategory.current.classList.add('selected')
                                
        }
    }, [loaded, initialLoad, fetchCategories])                    

    let selectedCategory = useRef(persistedSelect)
                 
    const renderDefaultCategory = () => {

        if(selectedCategory.current === null || 
            selectedCategory.current.outerText === "All Products" ) {
              
            return <div className="categoryItem selected"
                        ref={selectedCategory}
                        onClick={ e => {
                        fetchProducts("categoryChange")
                        applySelectedStyle(e)}}
                    >
                        All Products
                    </div>
        }
        
        return <div className="categoryItem"
                    onClick={ e => {
                    fetchProducts("categoryChange")
                    applySelectedStyle(e)}}
                >
                    All Products
                </div>
    }

    const renderCategories = () => 
          categoriesList.map( category => 
            {   
            
                const categoryId = category.id

                if(selectedCategory.current !== null) {
                   if(selectedCategory.current.outerText === 
                      category.category_name) {

                       return  <div key={categoryId} 
                                    className="mx-2"
                               >

                                    <div ref={selectedCategory}         
                                         className="categoryItem selected"
                                         onClick={e => {
                                            fetchProducts("categoryChange", categoryId)
                                            applySelectedStyle(e) }
                                         }
                                    >
                                        {category.category_name}

                                    </div>

                              </div>
                   }
                }
                
                return  <div key={categoryId} 
                            className="mx-2"
                        >

                            <div className="categoryItem"
                                onClick={e => {
                                fetchProducts("categoryChange", categoryId)
                                applySelectedStyle(e) }
                                }
                            >
                                {category.category_name}

                            </div>
                        </div>
        
            }
        )
    

    const applySelectedStyle = e => {
        selectedCategory.current.classList.remove('selected')
        selectedCategory.current = e.target
        persistedSelect = e.target
        selectedCategory.current.classList.add('selected')
    }

    

    return <div>

            <div className="mx-2">

                {renderDefaultCategory()}

            </div>

            {renderCategories()}

        </div>


}


const mapStateToProps = state => {
    return {
        categoriesList: state.categoriesList,
        loaded: state.initialLoad
    }
}

export default connect(mapStateToProps, 
                      {fetchCategories,fetchProducts, initialLoad})
                      (Categories)