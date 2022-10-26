class Processor {
    static Process (data) {
        let rows = [];
        const a = data.split("\r\n") //split é um método usado para separar string, recebendo como parâmetro o modo de separação. No caso estou separando por quebra de linha e para isso uso \r e ou \n
        a.forEach(row => { 
            const arr = row.split(",")// aqui estou separando por vírgula
            rows.push(arr) // push é um método de inserir/adiciona no final do array algum dado. No caso estou adicionando cada linha no array, cada vez que é percorrida pelo método forEach()
        });
        return rows
    }
}
module.exports = Processor;