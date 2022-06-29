import React from "react";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="Container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2">
                  <h1 className="mt-3">
                    {props.heading}
                    <strong className="p-2 brandName">{props.name}</strong>
                  </h1>
                  <p>{props.para}</p>

                  <div>
                    <NavLink to={props.link} className="btn btn-primary">
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6  order-lg-2 order-1">
                  <img
                    src={props.img}
                    alt="NotFound"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
