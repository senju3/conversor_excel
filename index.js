const fs = require("fs");
const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

/*function modifyUser (name, curso, category) {
    fs.readFile("./usuario.json", {encoding: "utf-8"}, (error, dados) => {
        if(error){
            console.log("Ocorreu um erro na leitura do arquivo")
        }else {
            let conteudo = JSON.parse(dados) //Transforma texto em objeto javascript(JSON)
            conteudo.name = name;
            conteudo.curso = curso;
            conteudo.category = category;
            fs.writeFile("./usuario.json", JSON.stringify(conteudo), error => { //Transforma objeto javascript(JSON) em string(texto)
                if(error){
                    console.log("Um error aconteceu durante a escrita")
                }
            })
        }
    })
}
modifyUser("Pedro Bueno", "javaScript do zero ao avançado", "javaScript")*/

const read = new Reader(); //Trabalhando com POO, criando um novo objeto da class Reader
const write = new Writer();
async function main (){ //já que a class usa uma função async, aqui também tme q ser async
    const data = await read.Read("./users.csv");
    const processedData = Processor.Process(data);
    const users = new Table(processedData)
    const html = await HtmlParser.Parser(users)

    write.Write(Date.now()+".html", html)
    PDFWriter.WritePDF(Date.now()+".PDF", html)
}
main()