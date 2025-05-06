// minify.js
const fs = require("fs");
const UglifyJS = require("uglify-js");

const code = fs.readFileSync("original.js", "utf8");
const result = UglifyJS.minify(code);

if (result.error) {
    console.error("Error during minification:", result.error);
} else {
    fs.writeFileSync("minified.js", result.code);
    console.log("Minified file created as minified.js");
}
