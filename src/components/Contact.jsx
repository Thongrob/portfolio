import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import DocumenTitle from 'react-document-title'
import "bootstrap-icons/font/bootstrap-icons.css";


function Contact() {
  return (
    <>
    <DocumenTitle title="Contact"/>
    <Navbar/>
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <p><i className="bi bi-envelope-open-fill"></i>&emsp; Email :&emsp;thongrob.tsr@gmail.com</p>
              <p><i className="bi bi-telephone"></i>&emsp; Phone :&emsp;+66 82 375 0353</p>
              <p><i className="bi bi-line"> </i>&emsp;Line :&emsp;nong_tce</p>
              <p><i className="bi bi-github"></i>&emsp; GitHub :&emsp;https://github.com/Thongrob</p>
            </div>
          </div>
        </div>
    <Footer/>
</>
  )
}

export default Contact