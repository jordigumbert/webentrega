const no_account = document.querySelectorAll(".signup")
const si_account = document.querySelectorAll(".signin")
//console.log(no_account);
// retorna un array amb tots els botons marcats amb clase signup 

const btn_sinup=document.querySelector("#btn_singup")
//console.log(btn_sinup)

btn_sinup.addEventListener("click", (btn) => {
    btn.preventDefault();
    console.log("click")
    
    document.querySelector("#btn_singup").classList.add("oculto")

    no_account.forEach((elem) => {
        console.log(elem)
        elem.classList.toggle("oculto")
    } )

})

