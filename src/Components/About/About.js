import React from "react";
import image1 from "../../images/comingsoon.jpg";
import "./About.css";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div
      id="about"
      style={{ justifyContent: "space-between",justifyContent:'center',alignContent:'center',display:'flex'  }}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="card-group" style={{ height: "100%", width: "112rem" }}>
        <div style={{ height: "100%", width: "700px",justifyContent:'center',alignContent:'center',display:'flex' }}
          className="card shadow-lg p-4 mb-5 bg-white rounded"
          style={{ justifyContent: "space-between", margin: "20px" }}
        >
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcallmrmoe%2Fposts%2F113110167785251&show_text=true&width=500"
            width="700px"
            height="813px"
            style={{ border: "none", overflow: "hidden" }}
          ></iframe>
          <div className="card-body"></div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div
          className="card shadow-lg p-4 mb-5 bg-white rounded"
          style={{ justifyContent: "space-between", margin: "20px" }}
        >
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcallmrmoe%2Fposts%2F112825067813761&show_text=true&width=500"
            width="500"
            height="813"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <div className="card-body"></div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div
          className="card shadow-lg p-4 mb-5 bg-white rounded"
          style={{ justifyContent: "space-between", margin: "20px" }}
        >
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcallmrmoe%2Fposts%2F112825067813761&show_text=true&width=500"
            width="500"
            height="813"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <div className="card-body"></div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
