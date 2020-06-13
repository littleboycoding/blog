import css from "styled-jsx/css";

const UserinfoStyle = css`
	.userContainer {
		border-bottom: 1px dashed #ccc;
		padding: 15px 50px 15px 50px;
		display: flex;
	}
	.userImage {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 5px;
	}
	.userInfo {
		margin-left: 10px;
		width: calc(100% - 160px);
	}
	a:visited,
	a {
		color: black;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	@media screen and (max-width: 900px) {
		.userContainer {
			display: block;
		}
		.userInfo {
			width: 100%;
			margin-left: 0;
		}
		.userImage {
			margin-bottom: 20px;
		}
	}
`;

export default UserinfoStyle;
