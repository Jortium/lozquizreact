import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_a">
            <div className="footer_b">
                <ul className="footer_c">
                    <li>
                        <a href="mailto:joshwortiz@gmail.com" target="_top">
                            <img
                                src="/images/email.png"
                                className="footer_1"
                                alt="Email Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <img
                                src="/images/webpage.png"
                                className="footer_1"
                                alt="Website Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/OrtizJosh" target="_blank">
                            <img
                                src="/images/github.png"
                                className="footer_1"
                                alt="GitHub Icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/joshua-ortiz-188745184/"
                            target="_blank"
                        >
                            <img
                                src="/images/linkedin.png"
                                className="footer_1"
                                alt="LinkedIn Icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
