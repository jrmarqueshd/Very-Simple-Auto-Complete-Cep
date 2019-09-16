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
            .then(res => {
                if(res.ok){
                    return res.json();
                }else{
                    fetch("https://api.postmon.com.br/v1/cep/"+$inputCEP.value)
                    .then((response)=>{
                        return response.json();
                    })
                    .then((out)=>{
                        let end = {
                            cep: out.cep,
                            address: out.logradouro,
                            neighborhood: out.bairro,
                            city: out.cidade,
                            state: out.estado
                        }
                        $address.value = end.address;
                        $neighborhood.value = end.neighborhood;
                        $city.value = end.city;
                        $state.value = end.state   
                    })
                    .catch(err =>{
                        console.log(err);
                    });
                }
            })
            .then((out) =>{
                let end = {
                    cep: out.cep,
                    address: out.logradouro,
                    neighborhood: out.bairro,
                    city: out.localidade,
                    state: out.uf
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