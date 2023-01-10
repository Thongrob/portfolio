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
              <p>&emsp;&emsp;I want to open up new experiences. Programming and new technology are what I really like. I always like to learn new things and I spend a lot of time on it to develop my skill. I hope to be an expert on it next time. The learning  is never end.</p>
            </div>
        <Footer/>
    </>
  )
}

export default About