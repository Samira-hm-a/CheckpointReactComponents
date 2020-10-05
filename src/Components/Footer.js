import React from "react";
import footer from "../Assets/contactlogo.png";
import mailme from '../Assets/mailmeimg.png';
 import   './css/Main.css'



function  Footer () {
    
        return (
            <section className="container-1">

                <img className="contactimg" src={footer} width="180" height="180" alt="contact logo"/>
                <h3> <strong>Contact me</strong></h3>
                <h4>Random Text Random text Random text</h4>
                <h4>Email Id: hmani.samira@gmail.com</h4>
                <a className="mail"href="https://mail.google.com/mail/?hmani.samira@gmail.com"><img className="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Contant Info: +21600001000</h4>

                
                
                        <a href="https://www.facebook.com/samira">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/samira" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://samira.whatsapp.com/">
                                <span className="icon fa fa-whatsapp" style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com/samira">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/samira /">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        
                
            </section>
        )
    }


export default Footer