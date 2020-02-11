import dynamic from "next/dynamic";
import Markdown from "react-markdown";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";

const Container = dynamic(() => import("../../components/container"), {
  loading: () => <h1>{". . ."}</h1>
});

function Blog(props) {
  const title = props.content.split("\n")[0];
  return (
    <Container title={title}>
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
        }
      `}</style>
      <Markdown className="markdown">{`# ${props.content}`}</Markdown>
    </Container>
  );
}

export async function unstable_getStaticPaths() {
  const fs = require("fs");
  const path = require("path");
  const paths = [];
  const markdownArray = fs.readdirSync("./markdown");
  const basenamedMD = markdownArray.map(markdown => path.parse(markdown).name);
  basenamedMD.forEach(markdown => paths.push({ params: { title: markdown } }));

  return paths;
}

export async function unstable_getStaticProps(context) {
  const fs = require("fs");
  const params = context.params;
  const title = params.title;
  const resultMarkdown = fs.readFileSync(`./markdown/${title}.md`, "utf8");

  return { props: { content: resultMarkdown } };
}

export default Blog;
