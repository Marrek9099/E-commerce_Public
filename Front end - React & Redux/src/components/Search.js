import {useState} from "react"
import { connect } from "react-redux"
import { changeSearchTerm } from "../actions"
import { fetchProducts } from "../actions"


const Search = ({changeSearchTerm, fetchProducts}) => {

    const [searchInput, setSearchInput] = useState("")

    const onSearchFormSubmit = e => {

        e.preventDefault()

        if(searchInput.length > 0){

            changeSearchTerm(searchInput)
            fetchProducts("productName")
            
        }  
    }

    return <form  onSubmit={e => onSearchFormSubmit(e)}> 

                <div className="input-group searchField">

                    <input onChange={ e => setSearchInput(e.target.value)} 
                           value={searchInput} type="text" 
                           className="form-control shadow-none " 
                           placeholder="Search for products" 
                           aria-label="Product name"
                    />

                    <button className="btn btn-outline-secondary shadow-none" 
                            type="submit">
                            Search
                    </button>

                </div>

            </form>

}


export default connect(mapStateToProps,
                      {changeSearchTerm, fetchProducts})
                      (Search)