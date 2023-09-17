import React from "react";
import { AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <h1>Techy-Manash</h1>
        <p>@all rights reserved</p>
      </div>

      <div>
        <h5>Follow us</h5>
        <div>
          <a href="https://Youtube.com" target={"blank"}><AiFillYoutube/></a>
          <a href="https://Instagram.com/alwaysmanash" target={"blank"}><AiFillInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=100080939478681" target={"blank"}><AiFillFacebook/></a>
          <a href="https://Github.com/Manash2212" target={"blank"}><AiFillGithub/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
