import * as z from 'https://cdn.jsdelivr.net/npm/zod@4.3.6/+esm'


const validation = z.object({

    nom: z.string()
        .min(5, "El nom ha de ser de mínim 5 caràcters ")
        .max(20, " El nom d'usuari no pot ser de més de 20 caràcters")
    ,
    password: z.string()
        .min(8, "La contrasenya ha de tenir almenys 8 caràcters")
        .max(20, "La password no pot ser de més de 20 caràcters")
        .regex(/[0-9]/, "La contrasenya ha de contenir almenys un número")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "La contrasenya ha de contenir almenys un caràcter especial")
    ,
    email: z.string()
        .email(`${Email_} no té format de correu`)
    ,
    confirm: z.string()

});



const no_account = document.querySelectorAll(".signup")
// const si_account = document.querySelectorAll(".signin")

const btn_login = document.querySelector("#btn_log_in")
const btn_crear_cuenta = document.querySelector("#btn_crear_cuenta")
// console.log(no_account);
// retorna un array amb tots els botons marcats amb clase signup 
const btn_sinup = document.querySelector("#btn_signup")
//console.log(btn_sinup)

const nom_user_ = document.querySelector("#user_name")
const password_ = document.querySelector("#password")
const confirm_ = document.querySelector("#confirm")
const Email_ = document.querySelector("#email")
const TandC = document.querySelector("#checkbox_input")



btn_sinup.addEventListener("click", (btn) => {
    btn.preventDefault();
    //console.log("click")
    no_account.forEach((elem) => {
        console.log("elem:=", elem, "\n\n", btn_login, "=btn_login")
        elem.classList.toggle("oculto")
    })

})



btn_login.addEventListener("click", (cosa) => {
    cosa.preventDefault();
    // const DATA= querySelector(document.FormData)
    console.log("has intentat fer login amb user: ", nom_user_.value)
    console.log("has intentat fer login amb pass: ", password_.value)
    nom_user_ = nom_user_.value
    password_ = password_.value

})


btn_crear_cuenta.addEventListener("click", (cosa) => {
    cosa.preventDefault();
    /*
        console.log("has intentat fer login amb user: ", nom_user_.value)
        console.log("has intentat fer login amb pass: ", password_.value)
        console.log("has intentat fer login amb pass_confirm: ", confirm_.value)
        console.log("has intentat fer login amb Email: ", Email_.value)
        console.log("Tens el checkbox en : ", TandC.checked)
    */
    nom_user_ = nom_user_.value
    password_ = password_.value
    Email_ = Email_.value
    confirm_ = confirm_.value
    TandC = TandC.checked
    
    /* creem la var amb el nom del que conté directament, aixi ens estalviem el .value cada cop. */
})
