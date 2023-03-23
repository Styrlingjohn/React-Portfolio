import React from "react";
import Linkedlogo from "../../public/linkedinicon";

function Footer() {
    


return(
    <footer className="footer">
        <a className = 'links' href="https://www.linkedin.com/in/styrlingmorris/">linkedin</a>
        <img src={Linkedlogo} alt="Logo" />;

        <a className = 'links' href="https://github.com/Styrlingjohn">github</a>
    </footer>
)
};


export default Footer;

