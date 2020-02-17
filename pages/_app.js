import "../css/main.css";
import React, { useState } from "react";
import Router from "next/router";

const AppStyle = () => (
  <style jsx>
    {`
      .loadingDIV {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: black;
        opacity: 0.08;
        transition: all 1s;
        z-index: 2;
      }
    `}
  </style>
);

export default ({ Component, pageProps }) => {
  const [isLoading, setLoadingState] = useState(false);
  routerEvent(setLoadingState);

  return (
    <>
      <AppStyle />
      {isLoading ? <div className="loadingDIV"></div> : null}
      <Component {...pageProps} />
    </>
  );
};

function routerEvent(setter) {
  const events = Router.events.on;
  events("routeChangeStart", () => {
    setter(true);
  });
  events("routeChangeComplete", () => {
    setter(false);
  });
}
