import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Meet = () => {
  return (
    <Wrapper>
      <Head>
        <title>Sid86 | Meet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container py-5 px-md-5">
        <h1>Let&apos;s Connect !</h1>
        <div className="row my-5">
          <div className="col-md-5">
            <div className="container h-100 text-center border-dashed p-3 rounded">
              <h3 className="mt-md-5">Fix a meeting over zoom</h3>

              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="144px"
                  height="144px"
                  className="pointer"
                >
                  <circle cx="24" cy="24" r="20" fill="#2196f3" />
                  <path
                    fill="#fff"
                    d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"
                  />
                  <polygon fill="#fff" points="37,31 31,27 31,21 37,17" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-md-1 d-flex justify-content-center align-items-center">
            <h2>OR</h2>
          </div>
          <div className="col-md-6">
            <div className="container border-dashed px-4 rounded">
              <h3 className="py-2">
                Send a message <MailOutlineIcon fontSize="large" />{" "}
              </h3>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                ></textarea>

                <button className="btn btn-outline-light mt-4 px-5">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <Footer />
    </Wrapper>
  );
};

export default Meet;
