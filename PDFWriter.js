const pdf = require("html-pdf");
class PDFWriter {
    static WritePDF (fileName, html){
        pdf.create(html,{}).toFile(fileName, err => {})
    }
}
module.exports = PDFWriter;