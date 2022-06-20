import DocumenTitle from 'react-document-title'
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


function About() {
  return (
    <>
        <DocumenTitle title="About"/>
        <Navbar/>
            <div className="container">
              <p>&emsp;&emsp;<strong>My name is Thongrob Tipsurat.</strong>I graduated from Rajamangala University of Technology  Thanyaburi, majoring in telecommunication engineering.</p>
              <p>&emsp;&emsp;I want to open up new experiences for myself. The programming is what I really like. because always learning new things. And I can stay with it for a long time.</p>
            </div>
        <Footer/>
    </>
  )
}

export default About