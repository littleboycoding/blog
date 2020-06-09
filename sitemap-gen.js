const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://littleboycoding.github.io/blog",
	pagesDirectory: __dirname + "/out",
	targetDirectory: "out",
	//nextConfigPath: __dirname + "/next.config.js",
	ignoredPaths: ["404", "robots", "sitemap", "google"],
	ignoredExtensions: ["png", "jpg"],
	pagesConfig: {
		"/index": {
			priority: "0.7",
			changefreq: "daily"
		}
	}
});
