function formattedCSS(cssContent) {
    // Function to format CSS content neatly
    function formatCSS(css) {
      return css
        .split("}") // Split at end of rules
        .map((rule) => rule.trim()) // Trim whitespace
        .filter((rule) => rule.length) // Remove empty rules
        .map((rule) => rule + "}") // Add closing brace back
        .join("\n\n") // Double line break between rules
        .replace(/\{/g, " {\n  ") // Add line break and indent after opening brace
        .replace(/;/g, ";\n  ") // Line break and indent for each declaration
        .replace(/,\#/g, ",\n#") // Line break before ID selectors
        .trim(); // Trim the final string
    }

    // Format the CSS content
    return formatCSS(cssContent);
}

module.exports = {
    formattedCSS
}