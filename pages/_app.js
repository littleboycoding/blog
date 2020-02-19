import "../css/main.css";
import Container from "../components/container";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

export default ({ Component, pageProps }) => {
  const [isLoading, setLoadingState] = useState(false);
  const router = useRouter();
  const baseURL = "https://www.littleboycoding.herokuapp.com";
  const title = router.asPath == "/" ? "หน้าแรก" : pageProps.title;

  useEffect(() => {
    document.title = pageProps.title
      ? `${pageProps.title} - Little Boy`
      : `เว็บไซต์บล็อกของ Little Boy`;

    Router.events.on("routeChangeStart", url => {
      setLoadingState(true);
    });
    Router.events.on("routeChangeComplete", url => {
      setLoadingState(false);
    });

    return () => {
      Router.events.off("routeChangeStart", url => {
        setLoadingState(true);
      });
      Router.events.off("routeChangeComplete", url => {
        setLoadingState(false);
      });
    };
  });

  return (
    <>
      <Head>
        <meta
          key="title"
          property="og:title"
          content={`${title} - Little Boy`}
        />
        <meta
          key="image"
          property="og:image"
          content="https://www.gravatar.com/avatar/81f506d45aad1acc94b8d6a64bc6a448?s=1000"
        />
        <meta key="url" property="og:url" content={baseURL + router.asPath} />
        <meta property="og:type" content="article" />
        <meta
          key="description"
          property="og:description"
          content="เว็บบล็อกเล็กๆของนักพัฒนา 💻 ที่ชอบค้นหาสิ่งใหม่ๆ และทำเพื่ออุดมกาณ์ตัวเอง"
        />
      </Head>
      <Container>
        {!isLoading ? (
          <Component {...pageProps} />
        ) : (
          <p {...pageProps}>
            <FontAwesomeIcon icon={faSpinner} />
            {" กำลังโหลดข้อมูล"}
          </p>
        )}
      </Container>
    </>
  );
};
