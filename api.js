export async function buscarFuncionarios() {
    const resp = await fetch(`https://695160c570e1605a1089f0f5.mockapi.io/api/v1/funcionarios`)
    if (!resp.ok) {
        const erro = new Error('Erro ao buscar funcionários')
        erro.status = resp.status
        throw erro
    }
    return await resp.json()
}

export async function buscarFuncionariosId(id) {
    const resp = await fetch(`https://695160c570e1605a1089f0f5.mockapi.io/api/v1/funcionarios/${id}`)
    if (!resp.ok) {
        const erro = new Error('Erro ao buscar funcionário')
        erro.status = resp.status
        throw erro
    }
    return resp.json()
}

export async function adicionarFuncionario(nome, cargo, departamento, salario, admissao) {
    const resp = await fetch('https://695160c570e1605a1089f0f5.mockapi.io/api/v1/funcionarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: nome,
            cargo: cargo,
            departamento: departamento,
            salario: salario,
            admissao: admissao
        })
    })
    if (!resp.ok) {
        const erro = new Error ('Servidor indisponivel')
        erro.status = resp.status
        throw erro
    }
    return resp
}

export async function editarFuncionario(nome, cargo, departamento, salario, id) {
    const resp = await fetch(`https://695160c570e1605a1089f0f5.mockapi.io/api/v1/funcionarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: nome,
            cargo: cargo,
            departamento: departamento,
            salario: salario,
            id: id
        })
    })
     if (!resp.ok) {
        const erro = new Error ('Servidor indisponivel')
        erro.status = resp.status
        throw erro
    }
    return resp
}

export async function deletarFuncionarios(id) {
    const resp = await fetch(`https://695160c570e1605a1089f0f5.mockapi.io/api/v1/funcionarios/${id}`, {
        method: 'DELETE'
    })
     if (!resp.ok) {
        const erro = new Error('Funcionário não encontrado')
        erro.status = resp.status
        throw erro
    }
    return resp
}