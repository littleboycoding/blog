import dynamic from "next/dynamic";
import Link from "next/link";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import React, { Fragment } from "react";
const Container = dynamic(() => import("../components/container"));

async function fetchData(url) {
  return fetch(url).then(res => res.json());
}

function BlogList(props) {
  const { data, error } = useSWR("/api/fetchBlog", fetchData, {
    initialData: props.blog
  });
  if (error) return "เกิดข้อผิดพลาดในขณะกำลังดาวน์โหลดข้อมูล";
  if (!data) return "กำลังโหลดข้อมูล";
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
    <Container title="หน้าหลัก">
      <h1>📰 Blog</h1>
      <BlogList />
    </Container>
  );
}

export async function unstable_getServerProps(context) {
  const res = await fetchData(
    `${process.env.API_URL || "http://localhost:3000"}/api/fetchBlog`
  );
  return { props: { blog: res } };
}

export default Index;
