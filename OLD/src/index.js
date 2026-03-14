const spans = document.querySelectorAll("form span");
const forms = document.querySelectorAll("form");

// console.log(spans);

spans.forEach(span => {
    span.addEventListener("click", () => {
        forms.forEach( form => form.classList.toggle("oculto"))   
    })
});