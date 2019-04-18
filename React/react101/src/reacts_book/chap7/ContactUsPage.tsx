import React from "react";
import { ContactUs } from "./ContactUs";

interface IProps {

}

export const ContactUsPage: React.FC<IProps> = (props) => {

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>call us if you have questions</p>
      <ContactUs/>
    </div>
  );
};