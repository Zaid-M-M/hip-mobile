import React from "react";
import Contact_sec1 from "./Contact_sec1/Contact_sec1";
import Contact_sec2 from "./Contact_sec2/Contact_sec2";
import Contact_sec3 from "./Contact_sec3/Contact_sec3";
// import EnquiryButton from '../EnquiryForm/EnquiryButton'
// import Book_Site_Button from '../Book-site/Book_SiteButton'

const ContactWrapper = () => {
  return (
    <div>
      <Contact_sec1 />
      <Contact_sec2 />
      <Contact_sec3 />
    </div>
  );
};

export default ContactWrapper;
