import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-3 text-center">People</h1>
      </div>
      <div
        className="row py-4 px-2 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="media/images/mine.png"
            alt="Aditya"
            className="img-fluid mb-3"
            style={{ borderRadius: "100%", width: "50%", maxWidth: "260px" }}
          />
          <h4 className="mt-2">Patil Aditya</h4>
          <h6 className="text-muted">Mern stack learner</h6>
        </div>
        <div className="col-12 col-md-6 p-4">
          <p>
            I'm a student passionate about technology and software development.
            I enjoy learning new concepts, building projects, and improving my
            skills through hands-on practice.
          </p>
          <p>
            I'm currently learning the MERN stack and exploring full-stack
            development. Alongside this, I practice DSA problems to strengthen
            my logic and problem-solving skills.
          </p>
          <p>He loves playing chess.</p>
          <p>
            Connect on{" "}
            <a
              href="https://www.instagram.com/_adi7ya._/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Instagram
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/PatilAdityaN"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
