//import userinfoStyle from "../css/userinfo.module.css";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import UserinfoStyle from "../css/userinfo";

async function fetchData(url) {
  //Fetch GitHub user info api
  return await fetch(url).then(res => res.json());
}

function UserInfo(props) {
  const { data, error } = useSWR(
    "https://api.github.com/users/littleboycoding",
    fetchData
  );
  if (!data)
    return (
      <>
        <style jsx>{UserinfoStyle}</style>
        <div className="userContainer">
          <h1>{". . ."}</h1>
        </div>
      </>
    );
  if (data)
    return (
      <>
        <style jsx>{UserinfoStyle}</style>
        <div className="userContainer">
          <img className="userImage" src={data.avatar_url} />
          <div className="userInfo">
            <b style={{ fontSize: "20px" }}>{data.name}</b>
            {` @${data.login}`}
            <br />
            <FontAwesomeIcon icon={faGithub} />{" "}
            <a target="_blank" href="https://github.com/littleboycoding">
              GitHub
            </a>{" "}
            <FontAwesomeIcon icon={faFacebook} />{" "}
            <a target="_blank" href="https://www.facebook.com/littleboycoding">
              Facebook
            </a>
            <p>{data.bio}</p>
          </div>
        </div>
      </>
    );
}

export default UserInfo;
