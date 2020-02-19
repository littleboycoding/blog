import dynamic from "next/dynamic";
import Router from "next/router";
import UserInfo from "./userinfo";
import ContainerStyle from "../css/container.js";

function Container(props) {
  const year = new Date().getFullYear();

  return (
    <>
      <style jsx>{ContainerStyle}</style>
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
