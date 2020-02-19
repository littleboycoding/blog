import dynamic from "next/dynamic";
import Markdown from "react-markdown";
import Link from "next/link";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareLeft,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

function fetchData(url) {
  return fetch(url).then(res => res.json());
}

function Blog(props) {
  const router = useRouter();
  const { data, error } = useSWR(
    "/api/fetchContent?title=" + router.query.title,
    fetchData,
    { initialData: props.content }
  );
  const title = data ? data.content.split("\n")[0] : "กำลังโหลด";

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
      `}</style>
      <Markdown className="markdown">{`${
        data ? (
          "# " + data.content
        ) : error ? (
          "เกิดข้อผิดพลาดในการเข้าถึงเนื้อหา"
        ) : (
          <>
            <FontAwesomeIcon icon={faSpinner} /> + {" กำลังโหลดเนื้อหา"}
          </>
        )
      }`}</Markdown>
    </>
  );
}

export async function unstable_getStaticProps({ params }) {
  const res = await fetchData(
    `${process.env.API_URL}/api/fetchContent?title=${params.title}`
  );
  const title = res.content.split("\n")[0];
  return { props: { content: res, title: title } };
}

export async function unstable_getStaticPaths() {
  const staticPaths = { paths: [] };
  const res = await fetchData(`${process.env.API_URL}/api/fetchBlog`);
  res.blog.forEach(markdown =>
    staticPaths.paths.push({
      params: { title: markdown.fileName }
    })
  );

  return staticPaths;
}

export default Blog;
