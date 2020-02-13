export default (req, res) => {
  const fs = require("fs");
  const query = req.query;
  const title = query.title;
  const resultMarkdown = fs.readFileSync(`./markdown/${title}.md`, "utf8");

  res.status(200).json({
    content: resultMarkdown
  });
};
