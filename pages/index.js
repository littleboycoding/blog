import Link from "next/link";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import OpenGraph from "../components/opengraph.js";

function BlogList({ data }) {
  const list =
    data.blog.length > 0
      ? data.blog.map((blogArray) => (
          <Fragment key={blogArray.fileName}>
            <style jsx>{`
              li:hover {
                text-decoration: underline !important;
                cursor: pointer;
              }
            `}</style>
            <Link href={`/blog/[title]`} as={`/blog/${blogArray.fileName}`}>
              <li>{blogArray.title}</li>
            </Link>
          </Fragment>
        ))
      : "ไม่มีเนื้อหาในขณะนี้";

  return <ul>{list}</ul>;
}

function Index(props) {
  return (
    <>
      <OpenGraph title={"My personal blog 🔥🚀🎉"} baseurl={props.baseurl} />
      <h1>📰 Blog</h1>
      <BlogList data={props} />
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const markdownArray = fs.readdirSync("./markdown");
  //Sort by creation date
  markdownArray.sort((a, b) => {
    return (
      fs.statSync("./markdown/" + a).mtime.getTime() -
      fs.statSync("./markdown/" + b).mtime.getTime()
    );
  });
  const contentList = markdownArray.map((markdown) => ({
    fileName: path.parse(markdown).name,
    title: fs.readFileSync(`./markdown/${markdown}`, "utf8").split("\n")[0],
  }));

  return {
    props: {
      blog: contentList,
      baseurl: process.env.API_URL,
    },
  };
}

export default Index;
