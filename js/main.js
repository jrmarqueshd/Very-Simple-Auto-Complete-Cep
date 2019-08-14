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
                    return res.json();
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



    let cep = "09973220";

    if(cep.length != 8){
        alert("Digite um valor válido!");
    }else{
        // fetch("http://viacep.com.br/ws/" + cep + "/json/")
        fetch("https://api.postmon.com.br/v1/cep/" + cep)
            .then(response =>{
                if(response.ok){
                    response.json().then(myJson =>{
                        console.log(myJson);
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }else{
                    return alert("Error!!!");
                }
            })
            .catch((err)=>{
                alert(`Houve um erro inexperado (${err}), Entre em contato com a equipe técnica!`);
            })
    }

    // fetch("https://api.postmon.com.br/v1/cep/" + cep)
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((myJson)=>{
    //         console.log(myJson);
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     })
});