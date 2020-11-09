import React, { Component } from "react";
import "../../css/footer.css";
import facebook from "../../image/facebook.svg";
import instagram from "../../image/instagram.svg";
import google from "../../image/google.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer">
        <div className="contact">
          <div className="contact-number">
            <span>Contact us 0966998657</span>
          </div>

          <div className="contact-social">
            <img src={facebook} alt="facebook" width={30} />
            <img src={instagram} alt="instagram" width={30} />
            <img src={google} alt="google" width={30} />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
