import Markdown from "react-markdown";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

function Blog(props) {
  const data = props;
  const title = data.content.split("\n")[0];

  return (
    <>
      <style jsx>{`
        span:hover {
          text-decoration: underline !important;
          cursor: pointer;
        }
      `}</style>
      <Link href="/">
        <p>
          <FontAwesomeIcon icon={faCaretSquareLeft} /> <span>ย้อนกลับ</span>
        </p>
      </Link>
      <style jsx global>{`
        .markdown p img {
          width: 100%;
          max-height: 450px;
          object-fit: contain;
          background-color: #eee;
          border: 1px solid #ddd;
        }
        .markdown p img + em {
          display: block;
          text-align: center;
          color: #999;
        }
      `}</style>
      <Markdown className="markdown">{"# " + data.content}</Markdown>
    </>
  );
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const resultMarkdown = fs.readFileSync(
    `./markdown/${params.title}.md`,
    "utf8"
  );

  const title = resultMarkdown.split("\n")[0];
  let thumbnail = resultMarkdown.split("\n")[1];
  thumbnail = thumbnail.replace(/^.*.\(/, "");
  thumbnail = thumbnail.slice(0, thumbnail.length - 1);

  return {
    props: { content: resultMarkdown, title: title, thumbnail: thumbnail },
  };
}

export async function getStaticPaths() {
  const staticPaths = { paths: [], fallback: false };

  const fs = require("fs");
  const path = require("path");
  const markdownArray = fs.readdirSync("./markdown");
  const contentList = markdownArray.map((markdown) => ({
    fileName: path.parse(markdown).name,
    title: fs.readFileSync(`./markdown/${markdown}`, "utf8").split("\n")[0],
  }));

  contentList.forEach((markdown) =>
    staticPaths.paths.push({
      params: { title: markdown.fileName },
    })
  );

  return staticPaths;
}

export default Blog;
