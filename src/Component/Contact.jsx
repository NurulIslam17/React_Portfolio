import React, { useState } from "react";
import img from "../Img/Web (5).svg";
import "./Style.css";

function Contact() {

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });


  const inputEvent = (e) => {
    const {name,value} = e.target;

    setData((prevData)=>{
      return {
        ...prevData,
        [name]:value,
      }
    })
  };

  const submitForm = (e) =>{
    e.preventDefault();
    alert(`Name : ${data.name}, Email: ${data.email}, Phone : ${data.phone}, Msg : ${data.msg}`)
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h2 className="text-center">Contact Us</h2>
            <div className="row serviceLeft">
              <div className="col-lg-6">
                <img src={img} style={{ width: "100%" }} alt="NotFound" />
              </div>

              <div className="col-lg-6 p-2 formDiv">
                <form onSubmit={submitForm}>
                  <div className="form-group  m-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={data.name}
                      onChange={inputEvent}
                      placeholder="Enter Name"
                    />
                  </div>

                  <div className="form-group  m-3">
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      value={data.phone}
                      onChange={inputEvent}
                      placeholder="Enter Phone"
                    />
                  </div>

                  <div className="form-group  m-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={data.email}
                      onChange={inputEvent}
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group m-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      name="msg"
                      value={data.msg}
                      onChange={inputEvent}
                      placeholder="Comment here..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-dark mt-2">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
