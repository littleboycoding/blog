import fetch from "isomorphic-unfetch";
import { useAsync } from "react-async";

async function fetchData() {
  //Fetch GitHub user info api
  const res = await fetch("https://api.github.com/users/littleboycoding");
  return res.json();
}

function UserInfo(props) {
  const { data, error, isPending } = useAsync(fetchData);
  if (isPending) return "กำลังโหลดข้อมูล";
  if (error) return "มีปัญหาในขณะกำลังโหลดข้อมูล";
  if (data)
    return (
      <>
        <style jsx>
          {`
            .userContainer {
              border-bottom: 1px solid #aaa;
              padding: 15px 50px 15px 50px;
            }
            .userSection {
              float: left;
              width: calc(100% - 200px);
            }
            img {
              margin-right: 10px;
              width: 150px !important;
              height: 150px;
              object-fit: cover;
              border-radius: 5px;
            }
            @media screen and (max-width: 900px) {
              .userSection {
                width: 100%;
              }
              img {
                border-radius: 50%;
                margin-right: 0;
              }
            }
          `}
        </style>
        <div className="userContainer">
          <img className="userSection" src={data.avatar_url} />
          <div className="userSection">
            <h2 style={{ display: "inline-block", marginBottom: "5px" }}>
              {data.name}
            </h2>
            {" @"}
            <span>{data.login}</span>
            <br />
            <a href="https://github.com/littleboycoding">GitHub</a>{" "}
            <a href="https://www.facebook.com/littleboycoding">Facebook</a>
            <p>{data.bio}</p>
          </div>
          <br style={{ clear: "both" }} />
        </div>
      </>
    );
}

export default UserInfo;
