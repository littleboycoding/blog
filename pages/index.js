import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment } from "react";

const Container = dynamic(() => import("../components/container"), {
  loading: () => <h1>{". . ."}</h1>
});

function BlogList(props) {
  const list = props.blog.map(blogArray => (
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
  ));

  return <ul>{list}</ul>;
}

function Index(props) {
  return (
    <Container title="หน้าหลัก">
      <h1>📰 Blog</h1>
      <BlogList blog={props.blog} />
    </Container>
  );
}

export async function unstable_getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const markdownArray = fs.readdirSync("./markdown");
  const contentList = markdownArray.map(markdown => ({
    fileName: path.parse(markdown).name,
    title: fs.readFileSync(`./markdown/${markdown}`, "utf8").split("\n")[0]
  }));

  return {
    props: { blog: contentList }
  };
}

export default Index;
