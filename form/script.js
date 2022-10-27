
// let submit = {
//     fname: document.getElementsById("fname"),
//     lname: document.getElementsById("lname"),
//     age: document.getElementsById("age"),
// }
// console.log(submit)


let submit = {
    fname : document.getElementById("fname"),
    lname : document.getElementById("lname"),
    age : document.getElementById("age")
}



let button1 = document.getElementById('sub') 

button1.addEventListener('click', function(event){
    event.preventDefault()
    console.log(submit.fname.value)
    console.log(submit.lname.value)
    console.log(submit.age.value);
}) 

let button2 = document.getElementById('clear')

button2.addEventListener('click', function(event){
    event.preventDefault()
    fname.value =""
    lname.value =""
    age.value =""
})
