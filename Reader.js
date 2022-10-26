const fs = require("fs");
const util = require("util");

class Reader {
    constructor(){
        this.reader = util.promisify(fs.readFile) //basicamente ele torna possível usar promises e consequentemente async await com essa função q originalmente não suporta essa funcionalidade. O promisify faz essa mágica pra gente
    }
    async Read (filepath) {
        try {
            return await this.reader(filepath, 'utf-8')
        } catch (error) {
            return undefined
        }
    }
}
module.exports = Reader;