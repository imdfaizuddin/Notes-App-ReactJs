import React from "react";

function Footer(){
    let date = new Date().getFullYear();
    return(
        <p>&copy; Copyright {date}</p>
    )
}

export default Footer;