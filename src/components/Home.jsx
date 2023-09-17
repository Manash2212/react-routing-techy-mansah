import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>Techy-Manash</h1>
          <p>Baap of All solutions</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            we are your one and only solution to your tech problems you face
            everyday. We are leading tech Company whose aim is to increase the
            problem solving ability in Every Children{" "}
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who We are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae
            fugiat ea voluptas? Non nobis officiis quos doloribus sunt a ab, et
            laboriosam nesciunt provident eaque explicabo voluptates similique
            assumenda quibusdam repudiandae totam commodi iusto error pariatur
            numquam vitae velit distinctio! Sit, velit optio asperiores
            provident nisi id nostrum sed tempora reiciendis, nihil placeat
            saepe iure earum soluta, aperiam magnam rerum natus dicta voluptate.
            Quia velit provident omnis accusamus cupiditate optio sapiente
            numquam animi aut. Blanditiis eum placeat laudantium, minima
            perspiciatis quia officia doloribus nostrum adipisci velit
            voluptatem sapiente repudiandae eius, nihil voluptatibus obcaecati?
            Fugiat cupiditate aut totam quaerat repellendus.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.6s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1.2s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{ animationDelay: "1.5s" }}>
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
