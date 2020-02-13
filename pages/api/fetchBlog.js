export default (req, res) => {
  const fs = require("fs");
  const path = require("path");
  const markdownArray = fs.readdirSync("./markdown");
  const contentList = markdownArray.map(markdown => ({
    fileName: path.parse(markdown).name,
    title: fs.readFileSync(`./markdown/${markdown}`, "utf8").split("\n")[0]
  }));

  res.status(200).json({
    blog: contentList
  });
};
