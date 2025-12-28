import { cardFuncionarios, renderizarFuncionarios, renderizarSeçaoAdicionar, replaceChildrenAdicionar, replaceChildrenCarregar, replaceChildrenEditar, replaceChildrenExcluir, erroRender } from "./ui.js";
import { buscarFuncionarios } from "./api.js";
import { eventos } from "./event.js"
const container = document.querySelector('.container');
const cardContainer = document.getElementById('employee-container')
const divAdicionar = document.createElement('div')
const divEditar = document.createElement('div')
const divEdicao = document.createElement('div')
divEdicao.classList.add('div-edicao')
divEditar.classList.add('div-editar')
const divDeletar = document.createElement('div')
divDeletar.classList.add('div-deletar')
const btnAdicionar = document.getElementById('btn-adicionar');

btnAdicionar.addEventListener('click', () => {
    divAdicionar.replaceChildren()
    replaceChildrenAdicionar(cardContainer, divEditar, divEdicao, divDeletar)
    renderizarSeçaoAdicionar(container, divAdicionar)
})

const btnCarregarFuncionarios = document.getElementById('btn-fetch');
btnCarregarFuncionarios.addEventListener('click', async () => {
    replaceChildrenCarregar(divEditar, divDeletar, divEdicao)
    try {
        const funcionarios = await buscarFuncionarios()
        renderizarFuncionarios(funcionarios);
        const erro = document.getElementById('error-message')
        erro.classList.add('oculto')
    } catch (error) {
        erroRender(error)
    }
});

const btnEditar = document.getElementById('btn-editar')
btnEditar.addEventListener('click', () => {
    replaceChildrenEditar(cardContainer, divAdicionar, divDeletar)
    divEditar.classList.add('div-editar')
    divEditar.innerHTML = `<p> ID do funcionario 
    <input id="input-editar" type="number"></input>
    <button id="btn-edicao" class="btn-editar">Editar</button></p>
    `
    container.appendChild(divEditar)
})

const btnExcluir = document.getElementById('btn-clear')
btnExcluir.addEventListener('click', () => {
    replaceChildrenExcluir(cardContainer, divAdicionar, divEditar, divEdicao)
    divDeletar.replaceChildren()
    divDeletar.innerHTML = `<p> ID do funcionario 
    <input id="input-excluir" type="number"></input>
    <button id="btn-excluir" class="btn-excluir">Excluir</button></p>
    `
    container.appendChild(divDeletar)
})

eventos(divEdicao, container)

