import UserInfo from "./userinfo";
import ContainerStyle from "../css/container.js";

function Container(props) {
	return (
		<>
			<style jsx>{ContainerStyle}</style>
			<div className="container">
				<UserInfo />
				<div className="content">{props.children}</div>
				<div className="footer">
					<p>
						Created with ❤ by Thanawat Yodnil
						<br />
						<br />© Unlicense Since 2562
					</p>
				</div>
			</div>
		</>
	);
}

export default Container;
