export function renderizarFuncionarios(funcionarios) {
    const containerCards = document.getElementById('employee-container');
    // .replaceChildren() limpa a tela.
    containerCards.replaceChildren()
    // com fragmento(DocumentFragment) criamos tudo na memoria e depois adicionamos tudo de uma vez na tela.
    const fragmento = document.createDocumentFragment()
    // map percorre o array funcionarios, que vem da requisição a api, e para cada objeto(funcionario) executa o código
    // funcionario é um objeto, que esta dentro do array funcionarios, por isso consigo fazer funcionario.nome, .cargo, etc
    funcionarios.map(funcionario => {
        const cardFuncionarios = document.createElement('div');
        cardFuncionarios.classList.add('employee-card')
        const admissao = new Date(funcionario.admissao)
        admissao.toLocaleDateString('pt-BR')
        cardFuncionarios.innerHTML = `<div class="avatar-placeholder">
        <span>JS</span>
    </div>
    <h3 class="employee-name">${funcionario.nome}</h3>
    <p class="employee-role">${funcionario.cargo}</p>
    <p class="employee-role">Departamento: ${funcionario.departamento}</p>
    <p class="employee-role">Salario: ${funcionario.salario}</p>
    <p class="employee-role">Id: ${funcionario.id}</p>
    <p class="employee-role">Admissão: ${admissao.toLocaleDateString('pt-BR')}</p>`;
        // adiciona tudo(cardFuncionario))em quanto o loop esta ativado na memoria(DocumentFragment).
        fragmento.appendChild(cardFuncionarios);
    })
    // fora do loop, adiciona todos os cards salvos no fragmento tudo de uma vez na tela, boa pratica.
    containerCards.appendChild(fragmento)
    /*sem o DocumentFragment, para cada loop iria ser adicionado um card na tela, o que faria o navegador recalcular
    o layout da página (Reflow) toda vez, que é uma pessima pratica. */
}

export function cardFuncionarios(funcionario, container) {
    const cardFuncionario = document.createElement('div');
    cardFuncionario.classList.add('employee-card')
    cardFuncionario.innerHTML = `<div class="avatar-placeholder">
        <span>JS</span>
    </div>
    <h3 class="employee-name">${funcionario.nome}</h3>
    <p class="employee-role">${funcionario.cargo}</p>
    <p class="employee-role">Departamento: ${funcionario.departamento}</p>
    <p class="employee-role">Salario: ${funcionario.salario}</p>
    <p class="employee-role">Id: ${funcionario.id}</p>`;
    container.appendChild(cardFuncionario)
}

export function renderizarSeçaoAdicionar(container, divAdicionar) {
    divAdicionar.classList.add('div-adicionar')
    divAdicionar.innerHTML = `<ul id="ul-post" class="ul-post">
        <li>Nome <input id="input-nome" type="text"></input></li>
        <li>Cargo <input id="input-cargo" type="text"></input></li>
        <li>Departamento <input id="input-departamento" type="text"></input></li>
        <li>Salario <input id="input-salario" type="number"></input></li>
        <li>Admissão <input id="input-admissao" type="date"></input></li>
        <button id="btn-enviar" class="btn-enviar">Adicionar</button>
    </ul>`
    container.appendChild(divAdicionar)
}

export async function confirmacaoRequisicao(id, textContent, textContent2) {
    const btn = document.getElementById(`${id}`)
    btn.textContent = `${textContent}`
    btn.style.fontSize = '20px';
    btnTime = setTimeout(() => {
        btn.textContent = `${textContent2}`
        btn.style.fontSize = '16px';
    }, 2000)
    clearTimeout(btnTime)
}

export function erroRender(error) {
    const erro = document.getElementById('error-message')
    erro.textContent = error.message
    erro.classList.remove('oculto')
}

export function replaceChildrenAdicionar(cardContainer, divEditar, divEdicao, divDeletar) {
    cardContainer.replaceChildren()
    divEditar.replaceChildren()
    divEdicao.replaceChildren()
    divDeletar.replaceChildren()
}

export function replaceChildrenCarregar(divEditar, divDeletar, divEdicao) {
    // verifica de o main existe no container
    //const divAdicionarExiste = container.querySelector('.div-adicionar')
    // se main existe, o return é executado, cancelando o código abaixo
    //if (divAdicionarExiste) return
    const divAdicionar = document.querySelector('.div-adicionar')
    if (divAdicionar) {
        divAdicionar.replaceChildren()
    }
    if (divEdicao) {
        divEdicao.replaceChildren()
    }
    divEditar.replaceChildren()
    divDeletar.replaceChildren()
}

export function replaceChildrenEditar(cardContainer, divAdicionar, divDeletar) {
    cardContainer.replaceChildren()
    divAdicionar.replaceChildren()
    divDeletar.replaceChildren()
}

export function replaceChildrenExcluir(cardContainer, divAdicionar, divEditar, divEdicao) {
    cardContainer.replaceChildren()
    divAdicionar.replaceChildren()
    divEditar.replaceChildren()
    divEdicao.replaceChildren()
}