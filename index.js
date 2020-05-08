/*var name = document.querySelector('#exampleInputName')
var gender = document.querySelectorAll('#form-user-create [name=gender]:checked')
var birth = document.querySelector('#exampleInputBirth')
var country = document.querySelector('#exampleInputCountry')
var email = document.querySelector('#exampleInputEmail')
var pass = document.querySelector('#exampleInputPassword')
var photo = document.querySelector('#exampleInputFile')
var admin = document.querySelector('#exampleInputAdmin')


todas as variáveis acima podem ser acessadas pelo forEach
deixando de ser necessário escrever todas elas
*/


/*
document.querySelectorAll("button").forEach(function(){
    this.addEventListener("click", function(){
        console.log("clicou!")
    })   
})
*/

let userController = new UserController("form-user-create", "table-users")