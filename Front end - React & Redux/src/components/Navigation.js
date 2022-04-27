import Search from "../components/Search"
import { Link } from 'react-router-dom'
import { connect } from "react-redux"


const Navigation = ({basket}) => {

    return <nav>

            <div className="row my-2">

                <div className="col-2 col-md-2">
                
                <Link to="/">'
                
                    <i className="bi bi-bag-check-fill 
                                  logo display-5">
                    </i>

                </Link>

                
                </div>

                <div className="col-8 my-auto">

                    <Search/>

                </div>

                <div className="col-1">

                    <Link to="/basket"> 

                        <i className="bi bi-cart2 display-6 basket 
                                    position-relative">

                            <span className="position-absolute 
                                            top-0 start-50 
                                            badge rounded-pill 
                                            bg-secondary"
                            >
                                {basket.length}
                            </span>
                        </i>

                    </Link> 
            
                </div>

            </div>

  </nav>


}

const mapStateToProps = state => {
    return {
        basket: Object.values(state.basket)
    }
  }
  
  export default connect(mapStateToProps, {})(Navigation)