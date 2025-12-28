import { adicionarFuncionario, editarFuncionario, deletarFuncionarios, buscarFuncionariosId, } from "./api.js";
import { erroRender, confirmacaoRequisicao } from "./ui.js";

export async function eventos(divEdicao, container) {
    container.addEventListener('click', async (event) => {
        if (event.target && event.target.id === 'btn-enviar') {
            try {
                const nome = document.getElementById('input-nome').value
                const cargo = document.getElementById('input-cargo').value
                const departamento = document.getElementById('input-departamento').value
                const salario = document.getElementById('input-salario').value
                const admissao = document.getElementById('input-admissao').value
                const adicionar = await adicionarFuncionario(nome, cargo, departamento, salario, admissao)
                confirmacaoRequisicao('btn-enviar', 'Adicionado', 'Adicionar')
            } catch (error) {
                erroRender(error)
            }
        }

        if (event.target && event.target.id === 'btn-edicao') {
            const input = document.getElementById('input-editar').value
            try {
                const funcionario = await buscarFuncionariosId(input)
                divEdicao.innerHTML = `<ul id="ul-edicao" class="ul-post">
            <li>Nome <input id="input-nome-edicao" type="text" value="${funcionario.nome}"></input></li>
            <li>Cargo <input id="input-cargo-edicao" type="text" value="${funcionario.cargo}"></input></li>
            <li>Departamento <input id="input-departamento-edicao" type="text" value="${funcionario.departamento}"></input></li>
            <li>Salario <input id="input-salario-edicao" type="number" value="${funcionario.salario}"></input></li>
            <li>Id <input id="input-id-edicao" type="number" value="${funcionario.id}" readonly></input></li>
            <li>Admissao <input id="input-admissao-edicao" type="date" value="${funcionario.admissao}" readonly></input></li>
            <button id="btn-enviar-edicao" class="btn-editar">Editar
            </button>
        </ul>`
                container.appendChild(divEdicao)
                const erro = document.getElementById('error-message')
                erro.classList.add('oculto')
            } catch (error) {
                erroRender(error)
            }
        }

        if (event.target && event.target.id === 'btn-enviar-edicao') {
            try {
                const nome = document.getElementById('input-nome-edicao').value
                const cargo = document.getElementById('input-cargo-edicao').value
                const departamento = document.getElementById('input-departamento-edicao').value
                const salario = document.getElementById('input-salario-edicao').value
                const id = document.getElementById('input-id-edicao').value
                const editar = await editarFuncionario(nome, cargo, departamento, salario, id)
                confirmacaoRequisicao('btn-enviar-edicao', 'Editado', 'Editar')
                const erro = document.getElementById('error-message')
                erro.classList.add('oculto')
            } catch (error) {
                erroRender(error)
            }
        }

        if (event.target && event.target.id === 'btn-excluir') {
            try {
                const inputExcluir = document.getElementById('input-excluir').value
                const deletar = await deletarFuncionarios(inputExcluir)
                confirmacaoRequisicao('btn-excluir', 'Excluido', 'Excluir')
                const erro = document.getElementById('error-message')
                erro.classList.add('oculto')
            } catch (error) {
                erroRender(error)
            }
        }
    })
}