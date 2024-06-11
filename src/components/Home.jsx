import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>React</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphic" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex
            nobis ut velit a beatae praesentium? Tempore asperiores nihil
            perferendis, laudantium in commodi nam, sunt cupiditate sapiente
            voluptate aut porro.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            similique delectus nobis non beatae saepe, eligendi repellat ab
            doloremque hic rerum quisquam, ratione dignissimos tenetur quam at
            maxime magni quasi?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
