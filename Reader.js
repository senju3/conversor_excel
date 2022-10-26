const fs = require("fs");
class Reader {
    Read (filepath) {
        fs.readFile(filepath, 'utf-8', (error, dados) => {
            if(error){
                console.log(error)
            }else{
                console.log(dados)
    
            }
        })
    }
}
module.exports = Reader;