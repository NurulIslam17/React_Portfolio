import React from "react";
import Card from "./Card";
import Data from "./Sdata";

function Service() {
  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
              {Data.map((val, inx) => {
                return <Card key={inx} src={val.imgSrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
