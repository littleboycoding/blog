import "../css/main.css";
import Container from "../components/container";
import Router from "next/router";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default ({ Component, pageProps }) => {
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    document.title = pageProps.title + " - Little Boy";

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
    <Container>
      {!isLoading ? (
        <Component {...pageProps} />
      ) : (
        <p {...pageProps}>
          <FontAwesomeIcon icon={faSpinner} />
          {" กำลังโหลดเนื้อหา"}
        </p>
      )}
    </Container>
  );
};
