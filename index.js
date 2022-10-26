const fs = require("fs");
const Reader = require("./Reader");

fs.readFile("./pedro.bueno", {encoding: 'utf-8'}, (error, dados) => {
    if(error){
        console.log("Ocorreu uma falha durante a leiturra do arquivo")
    }else{
        console.log(dados)
    }
})

function modifyUser (name, curso, category) {
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
modifyUser("Pedro Bueno", "javaScript do zero ao avançado", "javaScript")

const read = new Reader(); //Trabalhando com POO, criando um novo objeto da class Reader
read.Read("./users.csv");