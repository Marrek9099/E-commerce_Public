import Products from "../components/Products"
import Categories from "../components/Categories"
import Navigation from "../components/Navigation"




const Landing = () => {


  return (
    <div id="landingPage" 
         className="container-fluid">
          
      <div className="row">
        
        <Navigation/>

        <div className="col-12 col-md-2 py-2 categories">

          <Categories/>

        </div>

        <div className="products col-12 col-md-10">

          <Products className="products"/>

        </div>

      </div>
      
    </div>
    
  )

}

export default Landing