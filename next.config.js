const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: { baseDomain: "http://localhost:3000", basePath: "" }
		};
	}
	return {
		env: {
			baseDomain: "https://littleboycoding.github.io",
			basePath: ""
		},
		assetPrefix: "https://littleboycoding.github.io/"
	};
};
