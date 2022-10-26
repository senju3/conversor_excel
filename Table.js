class Table {
    constructor(arr){
        this.header = arr[0];
        arr.shift(); //remove o primeiro elemento do array, no caso, o header
        this.rows = arr
    }

    //Campos Vituais, uma nova maneira de se usar os métodos. Basicamente transforma os métodos em atributos. Obrigatório retornar algo
    get countRows () {
        return this.rows.length; //a rows é um array de arrays(rows), no caso estou contando quantas rows tem nesse array
    }

    get countColumns () {
        return this.header.length; // Já o header é um array de strings(columns), no caso estou contando quantas columns tem nesse array 
    }
}
module.exports = Table;