/* 
Assumptions:
  - existence of: "../css/global.css"
  - file needs to be formate so that every className needs to be on new line
  - you run this file node ./generate-css-types.js
*/
const fs = require('fs');
const path = require('path');

const cssContentLocationPath = path.join(__dirname, '../', 'css', 'global.css');
const cssContent = fs.readFileSync(cssContentLocationPath, 'utf-8');
const OUTPUT_FILE_PATH = path.join(__dirname, '../', 'css', 'css-classes.generated.css');

main();
function main() {
  const classNames = extractClassNames(cssContent);
  const newRules = createEmptyRules(classNames);
  fs.writeFileSync(OUTPUT_FILE_PATH, newRules, 'utf-8');
}

function extractClassNames(content) {
  const matchCSSclass = /\[class~=(.*?)\]/;

  return content
    .split('\n')
    .map(line => line.trim())
    .map(line => matchCSSclass.exec(line)?.at(1))
    .filter(Boolean)
    .map(cn => cn.replace(/['"]/g, ''));
}

function createEmptyRules(classNames) {
  return classNames.map(cn => `.${cn} {}`).join('\n');
}
