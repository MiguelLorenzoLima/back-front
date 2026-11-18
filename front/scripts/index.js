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

    const data = response.json()

    console.log(data.message)
}

function buscarTodos(){
    alert('Eu crio mas não crio mas sou cria ')
}

function alterar(){
    alert('Eu crio mas não crio mas sou cria ')
}

function deletar(){
    alert('Eu crio mas não crio mas sou cria ')
}