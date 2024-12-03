/*Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

stampaDieciEmail(10)
let listaMail = ""



function stampaDieciEmail (numeroMailDaGenerare){
    for (let i = 0; i < numeroMailDaGenerare; i++){
        functionCreazioneEmail()
        
    }
}

function functionCreazioneEmail() {

axios.get(endpoint)
    .then(function (response){
        const email = response.data.response
        listaMail += `<li>${email}</li>`
        document.getElementById("lista").innerHTML = listaMail
        console.log(email);       
    })

    .catch(function(error){
        console.log(error);
        
        
    })

}