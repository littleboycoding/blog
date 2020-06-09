import Markdown from "react-markdown/with-html";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";
import OpenGraph from "../../components/opengraph.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const monthName = [
	"มกราคม",
	"กุมภาพันธ์",
	"มีนาคม",
	"เมษายน",
	"พฤษภาคม",
	"มิถุนายน",
	"กรกฎาคม",
	"สิงหาคม",
	"กันยายน",
	"ตุลาคม",
	"พฤศจิกายน",
	"ธันวาคม"
];

function Blog(props) {
	return (
		<>
			<OpenGraph {...props} />
			<style jsx>{`
				span:hover {
					text-decoration: underline !important;
					cursor: pointer;
				}
			`}</style>
			<Link href={props.basepath}>
				<p>
					<FontAwesomeIcon icon={faCaretSquareLeft} />{" "}
					<span>ย้อนกลับ</span>
				</p>
			</Link>
			<style jsx global>{`
				.markdown p img {
					width: 100%;
					max-height: 450px;
					object-fit: contain;
					background-color: #eee;
					border: 1px solid #ddd;
				}
				.imgCaption {
					display: block;
					text-align: center;
					color: #999;
				}
			`}</style>
			<Markdown
				source={`# ${props.title}\n📅 ${props.date}\n\n![${props.thumbnailalt}](${props.thumbnail})\n\n${props.content}`}
				renderers={{
					code: props => (
						<SyntaxHighlighter
							language={props.language}
							children={props.value}
							showLineNumbers={true}
						/>
					),
					image: imgprops => {
						return (
							<>
								<img
									src={
										imgprops.src.search("http") === 0
											? imgprops.src
											: (props.dev ? "" : "/blog") +
											  imgprops.src
									}
									alt={imgprops.alt}
								/>
								<span className="imgCaption">
									{imgprops.alt}
								</span>
							</>
						);
					}
				}}
				escapeHtml={false}
				className="markdown"
			/>
		</>
	);
}

export async function getStaticProps({ params }) {
	const fs = require("fs");
	const fm = require("front-matter");
	const resultMarkdown = fm(
		fs.readFileSync(`./markdown/${params.title}.md`, "utf8")
	);

	let createDate = resultMarkdown.attributes.date.split("/");
	createDate = new Date(createDate[2], createDate[1], createDate[0]);
	const parsedDate = `${createDate.getDate()} ${
		monthName[createDate.getMonth() - 1]
	} ${createDate.getFullYear() + 543}`;

	const title = resultMarkdown.attributes.title;
	const content = resultMarkdown.body;
	const thumbnail = resultMarkdown.attributes.image;
	const thumbnailAlt = resultMarkdown.attributes.imageAlt;

	//Description
	const rmMD = require("remove-markdown");
	let description = content;
	description = rmMD(description);
	description = description
		.split("\n")
		.filter(filter => filter !== "")
		.join(" ");

	if (description.length > 160) {
		description = description.slice(0, 160) + "...";
	}

	console.log(process.env.basePath);

	return {
		props: {
			content,
			title,
			date: parsedDate,
			thumbnail,
			thumbnailalt: thumbnailAlt || "",
			basedomain: process.env.baseDomain,
			basepath: process.env.basePath,
			description
		}
	};
}

export async function getStaticPaths() {
	const fs = require("fs");
	const fm = require("front-matter");
	const path = require("path");
	const markdownArray = fs.readdirSync("./markdown");
	const contentList = markdownArray.map(markdown => {
		const file = fs.readFileSync(`./markdown/${markdown}`, "utf8");
		const content = fm(file);
		return {
			fileName: path.parse(markdown).name,
			title: content.attributes.title
		};
	});

	const staticPaths = { paths: [], fallback: false };

	contentList.forEach(markdown =>
		staticPaths.paths.push({
			params: { title: markdown.fileName }
		})
	);

	return staticPaths;
}

export default Blog;
