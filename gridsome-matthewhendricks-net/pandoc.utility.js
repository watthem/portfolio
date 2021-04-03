// To convert files from markdown to PDF and DOCX, use npm package `node-pandoc`
// 1. node-pandoc requires pandoc installed on local dev machine first. 
//    https://pandoc.org/installing.html
// 2. then install NPM package
//    https://www.npmjs.com/package/node-pandoc
// after installing, see also your local `./Pandoc/Pandoc%20User's%20Guide.html`
// for PDF support (at least on Windows) intall https://miktex.org/download

var nodePandoc = require('node-pandoc');
var fs = require('fs'); 
var src, wordArgs, pdfArgs, callback, 

src = './content/resume.md'

// Arguments can be either a single string:
wordArgs = '-f markdown -t docx -o ./static/Matthew_Hendricks-CV.docx';
pdfArgs = '-f markdown -t pdf -o ./static/Matthew_Hendricks-CV.pdf';

// nodePandoc callback
callback = function (err, result) {

  if (err) {
    console.error('pandoc error: ',err);
  }
 
  // For output to files, the 'result' will be a boolean 'true'.
  // Otherwise, the converted value will be returned.
  console.log(result);
  return result;
};

// Call pandoc for each file type
nodePandoc(src, wordArgs, callback);
nodePandoc(src, pdfArgs, callback);

// Copy the source markdown file for the user to download
fs.copyFile(src, "./static/Matthew_Hendricks-CV.md", (err) => { 
  if (err) { 
    console.log("Copy error:", err); 
  } 
  else { 
    console.log("\nFile Contents of copied_file");
  } 
}); 
  
