import React from 'react';
import './About.css';
function About() {
    return (
        <section className='aboutUs'> 
            <div className="containerAbout">
                <div className="content-section">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>

                    </div>

                </div>
                <div className="image-section">
                    {/* <img src="food cake.jpg"> */}
                </div>
            </div>

        <div className="teamContainer">
           <h1 id='title-2'>Team Members</h1>
            <div id="services">
                <div className="box">
                    {/* <img src="food cake.jpg" alt=""> */}
                    <h2 className="h-secondary center">Gautam Sethi</h2>
                    <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, alias cum
                        quaerat
                        aperiam sunt voluptatum! </p>
                </div>
                <div className="box">
                    {/* <img src="food cake.jpg" alt=""> */}
                    <h2 className="h-secondary center">Mridul Agarwal</h2>
                    <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repudiandae
                        consequuntur, sint impedit at expedita.</p>
                </div>
                <div className="box">
                    {/* <img src="food cake.jpg" alt=""> */}
                    <h2 className="h-secondary center">Jatin</h2>
                    <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam
                        minus
                        reiciendis illum! Voluptates! </p>
                </div>
                <div className="box">
                    {/* <img src="food cake.jpg" alt=""> */}
                    <h2 className="h-secondary center">Harshit</h2>
                    <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quibusdam
                        minus
                        reiciendis illum! Voluptates! </p>
                </div>
            </div>
        </div>
        <div id="client-section">
            <h1 className="title-3">Our Services</h1>
            <div id="clients">
                <div className="client-item">
                    {/* <img src="food cake.jpg" alt="" id="img1"> */}
                    <p className="para">Lorem, ipsum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ex?</p>
                </div>
                <div className="client-item">
                    {/* <img src="food cake.jpg" alt=""> */}
                    <p className="para">Lorem, ipsum.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, nam!</p>
                </div>
                <div className="client-item">
                    {/* <img src="food cake.jpg" alt=""> */}
                    <p className="para">Lorem, ipsum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dolores?</p>
                </div>
               
            </div>
        </div>
        <footer>
            <div className="center">
                Copyright &copy; www.smartsolutions.com. All rights reserved
            </div>
            
        </footer>
        </section>
    )
}

export default About;
