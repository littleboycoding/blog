import Link from "next/link";
import { Fragment } from "react";
import OpenGraph from "../components/opengraph.js";

function BlogList({ data }) {
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
						<Link
							href={`${data.basepath}/article/[title]`}
							as={`${data.basepath}/article/${blogArray.fileName}`}
						>
							<li>{blogArray.title}</li>
						</Link>
					</Fragment>
			  ))
			: "ไม่มีเนื้อหาในขณะนี้";

	return <ul>{list}</ul>;
}
function Index(props) {
	return (
		<>
			<OpenGraph
				basedomain={props.basedomain}
				basepath={props.basepath}
				description={props.description}
				homepage={true}
			/>
			<h1>📰 BLOG</h1>
			<BlogList data={props} />
		</>
	);
}

export async function getStaticProps() {
	const fs = require("fs");
	const path = require("path");
	const fm = require("front-matter");
	const markdownArray = fs.readdirSync("./markdown");
	//Sort by creation date
	markdownArray.sort((a, b) => {
		const A = fm(
			fs.readFileSync("./markdown/" + a, { encoding: "utf8" })
		).attributes.date.split("/");
		const B = fm(
			fs.readFileSync("./markdown/" + b, { encoding: "utf8" })
		).attributes.date.split("/");
		return new Date(B[2], B[1], B[0]) - new Date(A[2], A[1], A[0]);
	});
	const contentList = markdownArray.map(markdown => {
		const file = fs.readFileSync(`./markdown/${markdown}`, "utf8");
		const content = fm(file);
		return {
			fileName: path.parse(markdown).name,
			title: content.attributes.title
		};
	});

	return {
		props: {
			blog: contentList,
			basedomain: process.env.baseDomain,
			basepath: process.env.basePath,
			description:
				"Latest blog - " +
				contentList
					.map(map => map.title)
					.splice(0, 10)
					.join(", ")
		}
	};
}

export default Index;
