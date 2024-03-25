const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input");

form.addEventListener("submit", handleSubmit);
textarea.addEventListener("input", onTextareaInput);

input.addEventListener("input", onTextareaInput);

enteredTextarea ();
enteredEmail ();




function onTextareaInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}
function onInputInput(event){
    const email = event.target.value;
    localStorage.setItem(STORAGE_KEY, email);
}

function enteredTextarea (){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
        if (savedMessage) textarea.value = savedMessage;
    
}
function enteredEmail (){
    const savedEmail = localStorage.getItem(STORAGE_KEY);
        if (savedEmail) input.value = savedEmail;
    
}

function handleSubmit(event){
    event.preventDefault();
    console.log("send");

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}