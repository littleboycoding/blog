import dynamic from "next/dynamic";
import containerStyle from "../css/container.module.css";
import React, { useEffect } from "react";
const UserInfo = dynamic(() => import("./userinfo"));

function Container(props) {
  const year = new Date().getFullYear();

  useEffect(() => {
    document.title = `${props.title} - Little Boy`;
  });

  return (
    <div className={containerStyle.container}>
      <UserInfo />
      <div className={containerStyle.content}>{props.children}</div>
      <div className={containerStyle.footer}>
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
  );
}

export default Container;
