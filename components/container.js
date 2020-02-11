import dynamic from "next/dynamic";
import Head from "next/head";
import containerStyle from "../css/container.module.css";
import React, { useState, useEffect } from "react";

const UserInfo = dynamic(() => import("./userinfo"), {
  loading: () => <h1>{". . ."}</h1>
});

function Container(props) {
  const year = new Date().getFullYear();
  const [title, setTitle] = useState(props.title);

  useEffect(() => {
    document.title = `${title} - Little Boy`;
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
