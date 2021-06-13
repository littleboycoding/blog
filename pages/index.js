import Link from "next/link";
import { Fragment } from "react";
import OpenGraph from "../components/opengraph.js";
import { parseStringPromise } from "xml2js";

function MediumList({ data }) {
  const list =
    data.length > 0
      ? data.map((blogArray) => (
          <Fragment key={blogArray.url}>
            <style jsx>
              {`
                a {
                  text-decoration: none;
                  color: black;
                }
                a:visited {
                  color: #555;
                }
                a:hover {
                  text-decoration: underline;
                  cursor: pointer;
                }
              `}
            </style>
            <a target="_blank" href={blogArray.url}>
              <li>{blogArray.title}</li>
            </a>
          </Fragment>
        ))
      : "ไม่มีเนื้อหาในขณะนี้";

  return <ul>{list}</ul>;
}

function BlogList({ data }) {
  const list =
    data.blog.length > 0
      ? data.blog.map((blogArray) => (
          <Fragment key={blogArray.fileName}>
            <style jsx>{`
              a {
                text-decoration: none;
                color: black;
              }
              a:visited {
                color: #555;
              }
              a:hover {
                text-decoration: underline;
                cursor: pointer;
              }
            `}</style>
            <Link
              href={`${data.basepath}/article/[title]`}
              as={`${data.basepath}/article/${blogArray.fileName}`}
            >
              <a>
                <li>{blogArray.title}</li>
              </a>
            </Link>
          </Fragment>
        ))
      : "ไม่มีเนื้อหาในขณะนี้";

  return <ul>{list}</ul>;
}

async function fetchXML(url) {
  const mediumFeed = await fetch(
    "https://littleboycoding.medium.com/feed"
  ).then((res) => res.text());

  const mediumJson = await parseStringPromise(mediumFeed);
  return mediumJson.rss.channel[0].item.map((item) => ({
    title: item.title,
    url: item.link,
  }));
}

function Index(props) {
  return (
    <>
      <style jsx>{`
        .row {
          display: flex;
          align-items: baseline;
        }
      `}</style>
      <OpenGraph
        basedomain={props.basedomain}
        basepath={props.basepath}
        description={props.description}
        homepage={true}
      />
      <h1>📰 บทความ</h1>
      <h2>Medium</h2>
      <MediumList data={props.medium} />
      <h2>BLOG</h2>
      <BlogList data={props} />
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const fm = require("front-matter");
  const markdownArray = fs.readdirSync("./markdown");
  //Sort by creation date
  markdownArray.sort((a, b) => {
    const A = fm(
      fs.readFileSync("./markdown/" + a, { encoding: "utf8" })
    ).attributes.date.split("/");
    const B = fm(
      fs.readFileSync("./markdown/" + b, { encoding: "utf8" })
    ).attributes.date.split("/");
    return new Date(B[2], B[1] - 1, B[0]) - new Date(A[2], A[1] - 1, A[0]);
  });
  const contentList = markdownArray.map((markdown) => {
    const file = fs.readFileSync(`./markdown/${markdown}`, "utf8");
    const content = fm(file);
    return {
      fileName: path.parse(markdown).name,
      title: content.attributes.title,
    };
  });

  const mediumFeed = await fetch(
    "https://littleboycoding.medium.com/feed"
  ).then((res) => res.text());

  const mediumJson = await parseStringPromise(mediumFeed);
  const mediumArticle = mediumJson.rss.channel[0].item.map((item) => ({
    title: item.title,
    url: item.link,
  }));

  return {
    props: {
      blog: contentList,
      medium: mediumArticle,
      basedomain: process.env.baseDomain,
      basepath: process.env.basePath,
      description:
        "Latest blog - " +
        contentList
          .map((map) => map.title)
          .splice(0, 10)
          .join(", "),
    },
  };
}

export default Index;
