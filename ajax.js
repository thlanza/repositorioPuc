
function ajax() {
    try {
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if(xhttp.readyState==4){
                if(xhttp.status==200) {
                    let usuario = JSON.parse(xhttp.responseText);
                    nome.innerHTML = usuario.nome;
                    idade.innerHTML = usuario.idade;
                    filhos.innerHTML = usuario.filhos.map(
                        (e) => e.nome
                    ).join(', ');
                    
                } else {
                    console.warn('status: ' +xhttp.status)
                }
            }
        };

        xhttp.open('GET', 'dados.json', true);
        xhttp.send();
    } catch(e){
        alert("Erro na comunicação com o servidor.")
    }
}
