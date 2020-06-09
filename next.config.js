const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: { baseDomain: "http://localhost:3000", basePath: "" }
		};
	}
	return {
		exportTrailingSlash: true,
		env: {
			baseDomain: "https://littleboycoding.github.io/blog",
			basePath: "/blog"
		},
		assetPrefix: "https://littleboycoding.github.io/blog"
	};
};
