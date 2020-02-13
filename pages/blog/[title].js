import dynamic from "next/dynamic";
import Markdown from "react-markdown";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";
const Container = dynamic(() => import("../../components/container"));

async function fetchData(url) {
  return await fetch(url).then(res => res.json());
}

function Blog() {
  const router = useRouter();
  const { data, error } = useSWR(
    "/api/fetchContent?title=" + router.query.title,
    fetchData
  );
  const title = data ? data.content.split("\n")[0] : "บล็อก";

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
      <Markdown className="markdown">{`${
        data ? "# " + data.content : "กำลังโหลดเนื้อหา"
      }`}</Markdown>
    </Container>
  );
}

export default Blog;
