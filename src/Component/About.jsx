import React from "react";
import Common from "./Common";
import aboutImg from '../Img/Web (8).svg'

function About() {
  return (
    <div>
      <Common
        heading="Wel Come to"
        name="TechCent"
        para="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde est a ."
        link="/"
        btnName="Contact Us"
        img = {aboutImg}
      />
    </div>
  );
}

export default About;
