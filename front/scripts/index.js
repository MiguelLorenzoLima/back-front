async function criar(){
    const id = document.getElementById('id').value
    const cpf = document.getElementById('cpf').value
    const email = document.getElementById('email').value

    const response = await fetch(
        'http://localhost:3000/api/v1/pessoa', { 
            method:"POST", 
            headers:{
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({id, cpf , email})
        })

    const data = await response.json()

    console.log(data.message)
}

async function buscarTodos(){
    const response = await fetch('http://localhost:3000/api/v1/pessoa')
    const data = await response.json()

    console.log(data)
}


function alterar(){
    const response = fetch('http://localhost:3000/api/v1/pessoa', {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({id, cpf, email})
    })
    const data = response.json()

    console.log(data)
}

function deletar(){
    const response = fetch('http://localhost:3000/api/v1/pessoa', {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({id})
    })
    const data = response.json()

    console.log(data)
}