import React from "react";

function Footer() {
    let date = new Date().getFullYear();
    return <footer>
        <p>&copy; Copyright {date}</p>
    </footer>

}

export default Footer;