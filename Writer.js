const fs = require("fs");
const util = require("util");

class Writer {
    constructor(){
        this.writer = util.promisify(fs.writeFile) //basicamente ele torna possível usar promises e consequentemente async await com essa função q originalmente não suporta essa funcionalidade. O promisify faz essa mágica pra gente
    }
    async Write (fileName, data) {
        try {
            await this.writer(fileName, data)
            return true
        } catch (error) {
            return false
        }
    }
}
module.exports = Writer;