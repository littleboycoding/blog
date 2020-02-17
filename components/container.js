//import containerStyle from "../css/container.module.css";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const UserInfo = dynamic(() => import("./userinfo"));
import ContainerStyle from "../css/container.js";

function Container(props) {
  const year = new Date().getFullYear();

  useEffect(() => {
    document.title = `${props.title} - Little Boy`;
  });

  return (
    <>
      <ContainerStyle />
      <div className="container">
        <UserInfo />
        <div className="content">{props.children}</div>
        <div className="footer">
          <p>
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Creative_Commons_license"
            >
              Creative Common License
            </a>
            {` @${year} 📝`}
          </p>
          <p>Created with ♥️ by Thanawat Yodnil</p>
        </div>
      </div>
    </>
  );
}

export default Container;
