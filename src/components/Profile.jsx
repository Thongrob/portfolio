import DocumenTitle from 'react-document-title'
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import profile from "../images/profile/profile.jpg";


function Profile() {
  return (
    <>
        <DocumenTitle title="Home"/>
        <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12 border rounded py-3">
                        
                        <div className="objecttive pt-3">
                            <h6><strong>Career objective</strong></h6>
                            <p>&emsp;&emsp;I spend my time,       I learned a lot language of programming for knowledge and skills to up.  This is my challenging I hope to be an expert on it next time. The learning  is never end.</p>
                        </div>
                       <hr/>
                        <div className="education py-3">
                            <p><strong>Education</strong></p>
                            <p className="text-decoration-underline">Bachelor’s degree 2011 – 2014 </p>
                            <dl>
                                <li>Rajamangala University of Technology  Thanyaburi</li>  
                                <li>Electronics & Telecommunication-Telcommunication Engineering <strong>GPA 2.60</strong>
                                </li>
                            </dl>
                                <p className="text-decoration-underline">Vocational Certificate  2008 - 2010</p>
                            <dl>
                                <li>liakhonsithummarat Industrial And Community Education College</li>
                                <li>Electronics department  <strong>GPA 3.49</strong></li>
                            </dl>
                        </div>
                        <hr />
                        <div className="experience py-3">
                            <h6><strong>Experience</strong></h6>
                            <div className="sub-experience d-flex justify-content-between">
                                <p className="d-inline">Mar 2015 – Aug 2021</p>
                                <dl>
                                    <p><strong>Project engineer</strong></p>
    	                            <p>Beyond Worldtech(Thailand) Co.,Ltd.</p>
                                    <li>Configure NodeB 3G, 4G, 5G systems.</li>
                                    <li>Configure IPv4, VLAN Baseband Unit.</li>
                                    <li>Monitor statistical parameters.</li>
                                    <li>Supevise installation.</li>
                                    <li>View and fix problems for configuration L2/L3 switch.</li>
                                    <li>Troubleshoot the problem in base station system.</li>
                                </dl>
                            </div>
                        </div>
                        <hr />
                        <div className="skills">
                            <h6><strong>Skills</strong></h6>
                            <dl>
                                <li><strong>Front-end :</strong> HTML, CSS, Bootstrapt, JavaScript, Angular, React JS</li>
                                <li><strong>Back-end : </strong> PHP, C# .Net, Basic Python, Node JS, Rest API</li>
                                <li><strong>Mobile :</strong> ReactNative</li>
                                <li><strong>Devops :</strong> Git, Github, Netlify, Heroku</li>
                            </dl>

                        </div>

                        <div className="tools">
                            <h6><strong>Tools</strong></h6>
                            <dl>
                                <p>Postman, XAMPP, DBeaver, Microsoft Office, VS Code, Visual Studio, Arduino IDE, AutoCAD, Git, Wordpress</p>
                            </dl>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 rounded ">
                        <img src={profile} alt="" className="w-100 rounded" />
                        <dl className="mt-3">
                            <li><strong>Nickname :</strong>&emsp;Nong</li>
                            <li><strong>Date Of Birth : </strong>&emsp;December 19, 1988</li>
                            <li><strong>Gender :</strong>&emsp;Male</li>
                            <li><strong>Nationality :</strong>&emsp;Thai</li>
                            <li><strong>Status :</strong>&emsp;Single</li>
                            <li><strong>Religion :</strong>&emsp;Buddhist</li>
                        </dl>
                    </div>
                </div>   
            </div>
        <Footer/>
    </>
  )
}

export default Profile