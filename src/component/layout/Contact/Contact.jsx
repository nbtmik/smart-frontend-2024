import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:smarthelpdesk2023@gmail.com">
        <Button><b>Contact: smarthelpdesk2023@gmail.com</b></Button>
      </a>
    </div>
  );
};

export default Contact;