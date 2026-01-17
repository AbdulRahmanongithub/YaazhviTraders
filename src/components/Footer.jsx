function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>
                                    At Yaazhvi Traders, we bring you premium quality dry fruits and nuts sourced naturally.
                                    Our products are carefully handpicked and packed to ensure freshness, taste, and health.
                                    We are committed to delivering the goodness of nature straight to your home every day.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>
                                        Dynamic Apartments, 15 Parangusapuram St, Azeez Nagar, West
                                        Mambalam, Chennai, Tamil Nadu 600024
                                    </li>
                                    <li>nativenature.care@gmail.com</li>
                                    <li>+91 8270177197</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Quick Links</h2>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/products">Products</a>
                                    </li>
                                    <li>
                                        <a href="/about">About us</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact us</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>
                                Copyrights &copy; 2026 -{' '}
                                <span>YaazhviTraders</span>, All Rights
                                Reserved.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-12 text-end">
                            <div className="social-icons">
                                <ul>
                                    <li>
                                        <button className="social-btn" aria-label="Facebook">
                                            <i className="fab fa-facebook-f" />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="social-btn" aria-label="Twitter">
                                            <i className="fab fa-twitter" />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="social-btn" aria-label="Instagram">
                                            <i className="fab fa-instagram" />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="social-btn" aria-label="LinkedIn">
                                            <i className="fab fa-linkedin" />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="social-btn" aria-label="Dribbble">
                                            <i className="fab fa-dribbble" />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
