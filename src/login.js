const no_account = document.querySelectorAll(".signup")
const si_account = document.querySelectorAll(".signin")
const btn_login  = document.querySelector("#btn_log_in")
// console.log(no_account);
// retorna un array amb tots els botons marcats amb clase signup 

const btn_sinup=document.querySelector("#btn_signup")
//console.log(btn_sinup)

btn_sinup.addEventListener("click", (btn) => {
    btn.preventDefault();
    //console.log("click")

    //document.querySelector("#btn_signup").classList.add("oculto")

    no_account.forEach((elem) => {
        //console.log(elem)
        elem.classList.toggle("oculto")
    } )

})





btn_login.addEventListener("click", (cosa ) => {
cosa.preventDefault();
    console.log(cosa) 
})

