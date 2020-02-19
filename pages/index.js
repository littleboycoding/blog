import dynamic from "next/dynamic";
import Link from "next/link";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function fetchData(url) {
  return fetch(url).then(res => res.json());
}

function BlogList(props) {
  const { data, error } = useSWR("/api/fetchBlog", fetchData, {
    initialData: props.blog
  });
  if (error) return "เกิดข้อผิดพลาดในขณะกำลังดาวน์โหลดข้อมูล";
  if (!data)
    return (
      <>
        <FontAwesomeIcon icon={faSpinner} />
        {" กำลังโหลดข้อมูล"}
      </>
    );
  if (data) {
    const list =
      data.blog.length > 0
        ? data.blog.map(blogArray => (
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
}

function Index(props) {
  return (
    <>
      <h1>📰 Blog</h1>
      <BlogList />
    </>
  );
}

export async function unstable_getStaticProps() {
  const res = await fetchData(`${process.env.API_URL}/api/fetchBlog`);
  return { props: { blog: res, title: "หน้าหลัก" } };
}

export default Index;
