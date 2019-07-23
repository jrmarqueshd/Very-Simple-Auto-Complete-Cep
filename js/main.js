window.addEventListener('load', ()=>{
    let $inputCEP = document.getElementById("inputCEP");
    let $address = document.getElementById("address");
    let $neighborhood = document.getElementById("neighborhood");
    let $city = document.getElementById("city");
    let $state = document.getElementById("state");

    $inputCEP.addEventListener("change", ()=>{
        if($inputCEP.value.length == 8){
            let url = `http://viacep.com.br/ws/${$inputCEP.value}/json/`;
            fetch(url)
            .then(res => res.json())
            .then((out) =>{
                let end = {
                    cep: out.cep,
                    address: out.logradouro,
                    neighborhood: out.bairro,
                    city: out.localidade,
                    state: out.uf
                }
                if(end.address == 'undefined' || end.neighborhood == "undefined" || end.city == "undefined" || end.state == "undefined"){
                    alert("ueba");
                }

                $address.value = end.address;
                $neighborhood.value = end.neighborhood;
                $city.value = end.city;
                $state.value = end.state                
            })
            .catch(err => {
                alert("Erro inexperado, por favor contacte o seu administrador!!!", err);
            });
        }else{
            alert("Digite um CEP válido.");
        }
    });
});