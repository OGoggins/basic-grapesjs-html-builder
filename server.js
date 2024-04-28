const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const { formattedHTML } = require("./public/formatHtml");
const { formattedCSS } = require("./public/formatCss");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.post("/cssDownload", async (req, res) => {
  const { css } = req.body;

  res.setHeader("Content-Disposition", 'attachment; filename="style.css"');
  res.setHeader("Content-Type", "text/css");
  res.send(formattedCSS(css));
});

app.post("/htmlDownload", async (req, res) => {
  const { html } = req.body;

  res.setHeader("Content-Disposition", 'attachment; filename="index.html"');
  res.setHeader("Content-Type", "text/html");
  res.send(formattedHTML(html));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
