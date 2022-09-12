import Image from "next/image";
import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Main() {
  return (
    <div className="mx-lg-3 row  w-100 ">
      <div className="col-md-7">
        <div className="d-flex flex-column">
          <RoughNotationGroup show={true}>
            {/* heading */}
            <h2>
              Hello! I am Siddharth, a{" "}
              <span className="highlight">developer</span> based in India.
            </h2>

            {/* body */}
            <span className="fw-bolder fs-4 my-4">
              I am an{" "}
              <RoughNotation
                type="highlight"
                color="#fce880"
                padding={[3, 0]}
                animationDuration={1500}
                order={1}
              >
                enthusiastic programmer
              </RoughNotation>{" "}
              eager to contribute to team success through hard work, attention
              to detail and excellent{" "}
              <RoughNotation
                order={2}
                type="circle"
                color="#e5d1fd"
                padding={0}
                animationDuration={1500}
              >
                organizational
              </RoughNotation>{" "}
              skills.
            </span>
            <span className="fw-bolder fs-4 my-4">
              I love building tools that are{" "}
              <RoughNotation
                type="highlight"
                color="#fcc4c0"
                padding={[3, 0]}
                animationDuration={1500}
                order={3}
              >
                user-friendly, simple
              </RoughNotation>{" "}
              user-friendly, simple and delightful.
            </span>
          </RoughNotationGroup>

          {/* Link buttons */}
          <div>
            <button type="button" className="btn btn-light px-4">
              View Linkedin
            </button>
            <button type="button" className="btn btn-dark mx-4 px-4">
              View Github
            </button>
          </div>
        </div>
      </div>
      {/* Image section right side */}
      <div className="col-md-5">
        <Image
          className="rounded shadow-lg"
          src="/images/portrait.jpg"
          alt="portrait"
          height="400px"
          width="385px"
        />
      </div>
    </div>
  );
}

export default Main;
