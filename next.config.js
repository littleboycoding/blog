const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: { API_URL: "http://localhost:3000", DEV: true }
		};
	}
	return {
		exportTrailingSlash: true,
		env: { API_URL: "https://littleboycoding.github.io/blog", DEV: false },
		assetPrefix: "https://littleboycoding.github.io/blog"
	};
};
//env: { API_URL: "https://littleboycoding.netlify.app" }
