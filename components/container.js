import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import UserInfo from "./userinfo";
import ContainerStyle from "../css/container.js";
import Head from "next/head";

function Container(props) {
  const year = new Date().getFullYear();
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={`${props.title ? props.title : "หน้าหลัก"} - Little Boy`}
        />
        <meta
          property="og:image"
          content="https://www.gravatar.com/avatar/81f506d45aad1acc94b8d6a64bc6a448?s=1000"
        />
        <meta
          property="og:url"
          content={`https://www.littleboycoding.herokuapp.com/blog/${router.query.title}`}
        />
        <meta property="og:type" content="website" />
      </Head>
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
