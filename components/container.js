import dynamic from "next/dynamic";
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
            Created with
            <br />
            🧰 Framework{" "}
            <a target="_blank" href="https://nextjs.org/">
              Next.js
            </a>
            , 📑 Editor{" "}
            <a target="_blank" href="https://neovim.io/">
              Neovim
            </a>
            , 🗺️ Hosted on{" "}
            <a target="_blank" href="https://netlify.com">
              Netlify
            </a>{" "}
            And ❤️
            <br />
            <br />©{" "}
            <a target="_blank" href="https://unlicense.org/" target="_blank">
              Unlicense
            </a>{" "}
            Since 2562
          </p>
        </div>
      </div>
    </>
  );
}

export default Container;
