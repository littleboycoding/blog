const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://littleboycoding.github.io/blog",
	pagesDirectory: __dirname + "/out",
	targetDirectory: "out",
	ignoredPaths: ["404", "sitemap", "google"],
	ignoredExtensions: ["png", "jpg"],
	pagesConfig: {
		"/index": {
			priority: "0.7",
			changefreq: "daily"
		}
	}
});
