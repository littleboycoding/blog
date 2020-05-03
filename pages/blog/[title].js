import Markdown from "react-markdown/with-html";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import OpenGraph from "../../components/opengraph.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const monthName = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

function Blog(props) {
  return (
    <>
      <OpenGraph {...props} />
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
      <Markdown
        source={`# ${props.title}\n📅 ${props.date}\n${props.content}`}
        renderers={{
          code: (props) => (
            <SyntaxHighlighter
              language={props.language}
              children={props.value}
              showLineNumbers={true}
            />
          ),
        }}
        escapeHtml={false}
        className="markdown"
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const fs = require("fs");
  const resultMarkdown = fs.readFileSync(
    `./markdown/${params.title}.md`,
    "utf8"
  );
  let createDate = resultMarkdown.split("\n")[1].split("/");
  createDate = new Date(createDate[2], createDate[1], createDate[0]);
  const parsedDate = `${createDate.getDate()} ${
    monthName[createDate.getMonth() - 1]
  } ${createDate.getFullYear() + 543}`;

  const title = resultMarkdown.split("\n")[0];
  const content = resultMarkdown.split("\n");

  let thumbnail = resultMarkdown.split("\n")[2];
  thumbnail = thumbnail.replace(/^.*.\(/, "");
  thumbnail = thumbnail.slice(0, thumbnail.length - 1);

  content.splice(0, 2);

  return {
    props: {
      content: content.map((map) => "\n" + map).join(""),
      title: title,
      date: parsedDate,
      thumbnail: thumbnail,
      baseurl: process.env.API_URL,
    },
  };
}

export async function getStaticPaths() {
  const fs = require("fs");
  const path = require("path");
  const markdownArray = fs.readdirSync("./markdown");
  const contentList = markdownArray.map((markdown) => ({
    fileName: path.parse(markdown).name,
    title: fs.readFileSync(`./markdown/${markdown}`, "utf8").split("\n")[0],
  }));

  const staticPaths = { paths: [], fallback: false };

  contentList.forEach((markdown) =>
    staticPaths.paths.push({
      params: { title: markdown.fileName },
    })
  );

  return staticPaths;
}

export default Blog;
