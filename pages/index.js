import dynamic from "next/dynamic";
import Link from "next/link";
import useSWR from "swr";
import React, { Fragment } from "react";

const Container = dynamic(() => import("../components/container"), {
  loading: () => <h1>{". . ."}</h1>
});

async function fetchData(url) {
  return await fetch(url).then(res => res.json());
}

function BlogList() {
  const { data, error } = useSWR("/api/fetchBlog", fetchData);
  if (error) return "เกิดข้อผิดพลาดในขณะกำลังดาวน์โหลดข้อมูล";
  if (!data) return "กำลังโหลดข้อมูล";
  if (data) {
    const list = data.blog.map(blogArray => (
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
}

function Index() {
  return (
    <Container title="หน้าหลัก">
      <h1>📰 Blog</h1>
      <BlogList />
    </Container>
  );
}

export default Index;
