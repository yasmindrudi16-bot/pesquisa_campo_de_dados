const express = require("express")
const dados = require('./dados.json');


const listardados = (req, res) => {
    res.send(dados)
}

function autoIncrement() {
    return Number(pacientes[pacientes.length - 1].id) + 1
}

const novadados = (req, res) => {
    if (req.body) {
        dados.push(req.body)
        res.send("dados feita com sucesso")
    } else {
        res.send("Erro ao receber dados")
    dados.id = autoIncrement()
    };
}

const excluirdados = (req, res) => {
    const id = req.params.id;
    let status = 0;

    const indice = pesquisa(dados => dados.id == id);
    if (dados.id == id) {
        dados.splice(indice, 1)
        status = 1;
    }}

    const atualizarDados = (req, res) => {
    const id = req.query.id;
    const novodados = req.body;
    let status = 0;

  dados.forEach((dados, indice) => {
    if (dados.id == id) {
        dados.sistema = novoDados.sistema;
        dados.tipo = novoDados.tipo;
        dados.finalidade = novoDados.finalidade;
        dados.tecnologia = novoDados.tecnologia;
        dados.nivel_risco = novoDados.nivel_risco;
        dados.possui_revisao_humana = novoDados.possui_revisao_humana;
    }
});

    if (status == 1) {
        res.send("dados excluídos com sucesso");
    } else {
        res.status(404).send("dados não encontrados");
    }
}

const app = express()
const porta = 3000

app.use(express.urlencoded({ extended: true }))

app.post("/", novadados)
app.get("/", listardados)
app.delete("/:id", excluirdados)
app.put("/", atualizarDados);

app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`);
})