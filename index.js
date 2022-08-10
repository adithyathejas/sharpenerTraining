const btn = document.querySelector('.btn')

btn.addEventListener('mouseover',(e)=>{

    e.preventDefault()

    document.querySelector("#my-form").style.background="#FF0000"

})



btn.addEventListener('mouseout',(e)=>{

    e.preventDefault()

    document.querySelector("#my-form").style.background="#0000FF"



})




const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")

myForm.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault()
    if(nameInput.value=="" || emailInput.value==""){
        msg.classList.add('error')
        msg.innerHTML="<h6 class='new'>please enter name </h6>"
                console.log("enter real values")
    }
    else{
        console.log(nameInput.value)
        console.log(emailInput.value)
    }
    }
    
