//import containerStyle from "../css/container.module.css";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const UserInfo = dynamic(() => import("./userinfo"));

function Container(props) {
  const year = new Date().getFullYear();

  useEffect(() => {
    document.title = `${props.title} - Little Boy`;
  });

  return (
    <>
      <style jsx>{`
        .container {
          width: 55%;
          min-height: calc(100% - 60px);
          min-width: 900px;
          position: absolute;
          left: 50%;
          top: 60px;
          transform: translateX(-50%);
        }
        .content {
          padding: 0px 30px 30px 30px;
          animation: fade 0.4s;
        }
        .footer {
          padding: 30px 0px 30px 0px;
          border-top: 1px dashed #ccc;
          text-align: center;
        }
        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media screen and (max-width: 900px) {
          .container {
            width: 100%;
            min-width: 0;
            left: 0;
            top: 0;
            position: static;
            transform: translateX(0);
          }
          .content {
            padding: 0px 20px 20px 20px;
          }
        }
      `}</style>
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
