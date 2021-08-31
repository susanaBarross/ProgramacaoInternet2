/*Esta atividade vale presença. O objetivo é tentar realizar essa tarefa (envie o código do que conseguir realizar)

Realiza um conjunto de funções que realize um CRUD de Produtos (em memória). Dica: siga como base o exemplo visto na aula 03 (app5.js).

Entrega: Link do Github do projeto (nos comentários ou em um arquivo txt)

Data de entrega: 31/08.*/




let listaProdutos = [];

function inserir(produto){
    listaProdutos.push(produto);
}

function atualizar(id, produto) {
    
    for(let i = 0; i < listaProdutos.length; i++) {
        if(listaProdutos[i].id == id) {
           listaProdutos[i].nome = produto.nome;
           listaProdutos[i].preco = produto.preco;
        }
    }
    return 0;
}

function deletar(id) {
    for(let i = 0; i < listaProdutos.length; i++) {
        if(listaProdutos[i].id == id) {
            listaProdutos.splice(i, 1);
        }
    }
    return 0;
}

function buscarPorId(id) {
    for(let prod of listaProdutos){
        if(prod.id == id) {
            return prod;
        }   
    }   
    return "Produto não encontrado!" 
}

function listar(){
    return listaProdutos;
}

let produto = {id:1, nome: "papel", preco:15};
inserir(produto);
produto = {id:2, nome: "caneta", preco:10};
inserir(produto);
produto = {id:3, nome: "borracha", preco:7};
inserir(produto);
produto = {id:4, nome: "lapis", preco:12};
inserir(produto);
produto = {id:5, nome: "apontador", preco:5};
inserir(produto);

console.log(listar());
console.log(buscarPorId(1));
console.log(buscarPorId(5));
console.log(buscarPorId(6));
let produto_novo = {id:5, nome: "caderno", preco:25};
console.log(atualizar(5,produto_novo));
console.log(listar());
console.log(deletar(4));
console.log(listar());