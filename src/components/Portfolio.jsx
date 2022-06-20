import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import image1 from "../images/port/pic1.JPG";
import image2 from "../images/port/pic2.JPG";
import image3 from "../images/port/pic3.JPG";
import DocumenTitle from 'react-document-title'

function Portfolio() {
  return (
    <>
        <DocumenTitle title="Portfolio"/>
        <Navbar/>
            <div className="container">
                <div className="row p-3">  
                    
                       <div className="col-lg-4  d-flex flex-column align-items-center">
                            <img src={image1} alt="pic1" className="img-thumbnail"/>
                            <a href="https://covid-19-th-today.herokuapp.com">Covid-19-th-today</a>
                        </div> 
                    
                        <div className="col-lg-4  d-flex flex-column align-items-center">
                            <img src={image2} alt="pic2" className="img-thumbnail"/>
                            <a  className="d-block" href="https://search-filter-app.herokuapp.com">Country Search Filter</a>
                        </div>
                        
                        <div className="col-lg-4  d-flex flex-column align-items-center">
                            <img src={image3} alt="pic3" className="img-thumbnail" />
                            <a href="https://guitars-shop-app.herokuapp.com">Guitar Store</a>
                        </div>
                </div>
            </div>
        <Footer/>

    </>
  )
}

export default Portfolio