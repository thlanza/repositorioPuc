
function ajax() {
    try {
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if(xhttp.readyState==4){
                console.log('status '+ xhttp.status);
                let objeto = JSON.parse(xhttp.responseText);
                console.log(objeto);   
            }
        };
        let usuario = {
            first_name: nome.value,
            email: email.value
        };
        
        xhttp.open('POST', 'https://reqres.in/api/users', true);
        xhttp.send(JSON.stringify(usuario));
    } catch(e){
        alert("Erro na comunicação com o servidor.")
    }
}
