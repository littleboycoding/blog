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
				key="description"
				name="description"
				content={props.description}
			/>
			<meta key="author" name="author" content="Thanawat Yodnil" />
			<meta
				name="keywords"
				key="keywords"
				content={
					"การสร้างเว็บไซต์, blog, Thanawat Yodnil, web developer"
				}
			/>
			<meta key="og:title" property="og:title" content={title} />
			<meta
				key="og:image"
				property="og:image"
				content={
					props.thumbnail
						? props.thumbnail.search("http") === 0
							? props.thumbnail
							: props.basedomain +
							  props.basepath +
							  props.thumbnail
						: "https://www.gravatar.com/avatar/81f506d45aad1acc94b8d6a64bc6a448?s=1000"
				}
			/>
			<meta
				key="og:url"
				property="og:url"
				content={props.basedomain + router.asPath}
			/>
			<meta key="og:type" property="og:type" content="article" />
			<meta
				key="og:description"
				property="og:description"
				content={
					props.homepage
						? "เว็บบล็อกเล็กๆของนักพัฒนา 💻 ที่ชอบค้นหาสิ่งใหม่ๆ และทำเพื่ออุดมกาณ์ตัวเอง"
						: props.description
				}
			/>
		</Head>
	);
}

export default OpenGraph;
