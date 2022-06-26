import React from "react";
import image from  '../Img/team.svg';
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="Container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">

                <div className="col-lg-6 order-1 order-lg-2">
                  <h1 className="mt-3">
                    Grow and Expand Your Business with
                    <strong className="p-2 brandName">TechCent</strong>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde est a aliquid maiores, eius dignissimos, fuga nulla
                    eveniet exercitationem libero.
                  </p>

                  <div>
                    <NavLink to="/service" className="btn btn-primary">
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6  order-lg-2 order-1">
                  <img src={image} alt="NotFound" style={{width:"100%"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
