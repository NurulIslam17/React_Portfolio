import React from "react";
import image from  '../Img/team.svg';
import Common from "./Common";

function Home() {
  return (
    <>
      <Common
        heading="Grow and Expand Your Business with"
        name="TechCent"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde est a aliquid maiores, eius dignissimos, fuga nulla
                    eveniet exercitationem libero."
        link="/service"
        btnName = "Get Started"
        img = {image}
      />
    </>
  );
}

export default Home;
