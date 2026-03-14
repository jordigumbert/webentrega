const no_account = document.querySelectorAll(".signup")
const si_account = document.querySelectorAll(".signin")
const btn_login  = document.querySelector("#btn_log_in")
// console.log(no_account);
// retorna un array amb tots els botons marcats amb clase signup 

const btn_sinup=document.querySelector("#btn_signup")
//console.log(btn_sinup)





const nom_user_  = document.querySelector("#user_name")
const password_ = document.querySelector("#password")
const confirm_ = document.querySelector("#confirm")
const Email_ = document.querySelector("#email")



btn_sinup.addEventListener("click", (btn) => {
    btn.preventDefault();
    //console.log("click")
    no_account.forEach((elem) => {
        //console.log(elem)
        elem.classList.toggle("oculto")
    } )

})



btn_login.addEventListener("click", (cosa ) => {
cosa.preventDefault();
    // const DATA= querySelector(document.FormData)
    console.log("has intentat fer login amb user: ",    )
})

