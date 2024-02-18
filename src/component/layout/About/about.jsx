import React from "react";
import "./aboutSection.css";
import { Button, Typography} from "@material-ui/core";
import logo from "../../../image/S_mart_logo.jpg"; 

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/s.mart_fashion?utm_source=qr&igsh=ZTM4ZDRiNzUwMw==";//insta acc
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1"><b><u>About Us</u></b></Typography>
        <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
        <div>
          <div>
            <h1><b>s.Mart</b></h1><h6>BE SMART</h6>
            <br></br>
            <h2><b>Affordable Fashion, Direct to You</b></h2>
            <p>Welcome to S.mart, where fashion meets affordability, and every woman from Tier-2 and Tier-3 cities can indulge in the latest trends without breaking the bank. We're not just a brand; we're a movement, bringing you quality fashion without the hefty price tag.</p>
            <br></br>
            <h2><b>Our Mission - Affordable Fashion for Every Woman</b></h2>
            <p>At S.mart, we believe that every woman deserves to look and feel beautiful, regardless of her location or budget constraints. Our mission is simple: to provide trendy, high-quality fashion directly to you, eliminating unnecessary costs and making fashion accessible to all.</p>
            <br></br>
            <h3><b>No Middlemen, Just Savings</b></h3>
            <p>We've cut out the middlemen to bring you the most affordable prices. By working directly with manufacturers and sourcing our products efficiently, we ensure that you get the latest styles at prices that won't break the bank. Say goodbye to unnecessary markups and hello to unbeatable deals.</p>
            <br></br>
            <h3><b>Meet the Team Behind the Savings</b></h3>
            <p>Our team at S.mart is passionate about making fashion affordable for every woman. Get to know the faces behind the brand, dedicated to bringing you the latest trends at prices you'll love.</p>
            <span><b>[Founder/CMO Name]</b>:<b>Suman Das</b></span>
            <span><b>[Co-Founder/CEO Name]</b>:<b>Soumik Chakrabarty</b></span>
            <br></br>
            <h2><b>Our Values</b></h2>
            <br></br>
            <h3><b>Unbeatable Prices</b></h3>
            <p>We pride ourselves on offering fashion-forward styles at prices that fit your budget. From everyday essentials to trendy statement pieces, we've got it all at prices that will pleasantly surprise you.</p>
            <br></br>
            <h3><b>Community Empowerment</b></h3>
            <p>Our commitment goes beyond fashion; it's about empowering communities. By working directly with manufacturers, we support local economies and create opportunities for growth in Tier-2 and Tier-3 cities.</p>
            <br></br>
            <h2><b>Your Affordable Fashion Destination</b></h2>
            <p>Explore our wide range of affordable fashion, from casual wear to occasion-ready outfits. With new arrivals regularly, you can stay on trend without the hefty price tag. Join us on social media to share your affordable fashion finds using #AffordableFashionRevolution.</p>
            <br></br>
            <br></br>
            <h1><b>Thank you for choosing S.mart. Here's to looking fabulous without breaking the bank!</b></h1>
            <img style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" ,}}
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;