import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
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
    </>
  );
};

export default Home;
