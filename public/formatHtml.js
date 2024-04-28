const beautify = require("js-beautify").html;

function formattedHTML(htmlContent) {
  const skeletonHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="style.css" rel="stylesheet" />
    <title>Default Title</title>
</head>
    <!-- HTML content goes here -->
</html>`;

  // Replace the placeholder comment with the actual HTML content
  const fullHtml = skeletonHtml.replace(
    "<!-- HTML content goes here -->",
    htmlContent
  );

  // Beautify the final HTML
  return beautifiedHtml = beautify(fullHtml, {
    indent_size: 2,
    space_in_empty_paren: true,
  });
}

module.exports = {
  formattedHTML,
};
