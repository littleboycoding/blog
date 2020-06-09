import "../css/main.css";
import Container from "../components/container";
import Router from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";

export default ({ Component, pageProps }) => {
	const [isLoading, setLoadingState] = useState(false);

	useEffect(() => {
		Router.events.on("routeChangeStart", () => {
			setLoadingState(true);
		});
		Router.events.on("routeChangeComplete", () => {
			setLoadingState(false);
		});

		return () => {
			Router.events.off("routeChangeStart", () => {
				setLoadingState(true);
			});
			Router.events.off("routeChangeComplete", () => {
				setLoadingState(false);
			});
		};
	});

	return (
		<>
			<Container>
				{!isLoading ? (
					<Component {...pageProps} />
				) : (
					<p {...pageProps}>
						<FontAwesomeIcon icon={faSpinner} />
						{" กำลังโหลดข้อมูล"}
						<Head>
							<title>
								กำลังโหลดข้อมูล... - Little Boy Coding
							</title>
						</Head>
					</p>
				)}
			</Container>
		</>
	);
};
