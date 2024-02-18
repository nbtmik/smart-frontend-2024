import React from "react";
//img
//img
import "./Footer.css"

function Footer(){
    return(
        <footer id="footer">
            <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and ios Mobile phone</p>
            <span>Coming Soon!</span>
            {/* img */}
            </div>

            <div className="midFooter">
            <h1>sMart</h1>
            <h4><b>look fabulous without breaking the bank!</b></h4>
            <p>Copyrights @2024</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                <a href="https://www.instagram.com/s.mart_fashion?utm_source=qr&igsh=ZTM4ZDRiNzUwMw==">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;