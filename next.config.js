const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const withCSS = require("@zeit/next-css");

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return withCSS({
			env: { baseDomain: "http://localhost:3000", basePath: "" }
		});
	}
	return withCSS({
		exportTrailingSlash: true,
		env: {
			baseDomain: "https://littleboycoding.github.io/blog",
			basePath: "/blog"
		},
		assetPrefix: "https://littleboycoding.github.io/blog"
	});
};
