import Head from "next/head";
import { useRouter } from "next/router";

function OpenGraph(props) {
  const router = useRouter();
  const title = props.title
    ? props.title + " - Little Boy Coding"
    : "Little Boy Coding: My personal blog 🔥🚀🎉";

  return (
    <Head>
      <title key="title">{title}</title>
      <meta
        name="keywords"
        content={"การสร้างเว็บไซต์, blog, Thanawat Yodnil"}
      />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:image"
        property="og:image"
        content={
          props.thumbnail
            ? props.thumbnail.search("http") === 0
              ? props.thumbnail
              : props.baseurl + props.thumbnail
            : "https://www.gravatar.com/avatar/81f506d45aad1acc94b8d6a64bc6a448?s=1000"
        }
      />
      <meta
        key="og:url"
        property="og:url"
        content={props.baseurl + router.asPath}
      />
      <meta key="og:type" property="og:type" content="article" />
      <meta
        key="og:description"
        property="og:description"
        content="เว็บบล็อกเล็กๆของนักพัฒนา 💻 ที่ชอบค้นหาสิ่งใหม่ๆ และทำเพื่ออุดมกาณ์ตัวเอง"
      />
    </Head>
  );
}

export default OpenGraph;
