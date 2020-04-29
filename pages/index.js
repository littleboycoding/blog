import dynamic from "next/dynamic";
import Link from "next/link";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function fetchData(url) {
  return fetch(url).then((res) => res.json());
}

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
      <h1>📰 Blog</h1>
      <BlogList data={props} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetchData(`${process.env.API_URL}/api/fetchBlog`);

  const fs = require("fs");
  const path = require("path");
  const markdownArray = fs.readdirSync("./markdown");
  const contentList = markdownArray.map((markdown) => ({
    fileName: path.parse(markdown).name,
    title: fs.readFileSync(`./markdown/${markdown}`, "utf8").split("\n")[0],
  }));

  return { props: { blog: contentList, title: "หน้าหลัก" } };
}

export default Index;
