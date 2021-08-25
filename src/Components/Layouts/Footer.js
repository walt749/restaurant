import React from 'react'
import '../Styles/Footer.css';

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-container">

                    {/* Social Icons */}
                    <div className="social-icons ml-auto order-last">
                        <div>
                            <div className="icon">
                                <a href="" className="me-4 text-reset"> 
                                    <i className="fab fa-facebook-f"> </i> 
                                </a>
                            </div>

                            <div className="icon">
                                <a href="" className="me-4 text-reset">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="icon">
                                <a href="" className="me-4 text-reset">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Munch Bagels Copyright */}
                    <div className="copyright">
                        
                        <div className="text-center p-4">
                        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> MUNCH BAGELS </a>
                            © 2021 Copyright
                            
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="contect-info mr-auto order-first">
                        <p><i className="fas fa-home me-3"> </i> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope me-3"> </i> contact@munchbagels.com
                        </p>
                        <p><i className="fas fa-phone me-3"> </i>  + 1 718 555 2288</p>
                        {/* <p><i className="fas fa-print me-3"> </i>  + 1 718 555 2289</p> */}
                    </div>

                </div>
            </footer>
        </div>
                 
        
    )
}

export default Footer
