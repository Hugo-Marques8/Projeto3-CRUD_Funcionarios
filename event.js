import { adicionarFuncionario, editarFuncionario, deletarFuncionarios, buscarFuncionariosId, } from "./api.js";
import { erroRender } from "./ui.js";

export async function eventos(divEdicao, container) {
    container.addEventListener('click', async (event) => {
        if (event.target && event.target.id === 'btn-enviar') {
            try {
                const inputNome = document.getElementById('input-nome').value
                const inputCargo = document.getElementById('input-cargo').value
                const inputDepartamento = document.getElementById('input-departamento').value
                const inputSalario = document.getElementById('input-salario').value
                const inputId = document.getElementById('input-id').value
                const adicionar = await adicionarFuncionario(inputNome, inputCargo, inputDepartamento, inputSalario, inputId)
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
                const erro = document.getElementById('error-message')
                erro.classList.add('oculto')
            } catch (error) {
                erroRender(error)
            }
        }
    })
}