const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input[type='email']");

form.addEventListener("submit", handleSubmit);
textarea.addEventListener("input", registeredForm);
input.addEventListener("input", registeredForm);


enteredTextarea ();

function registeredForm() {
    const message = textarea.value.trim();
    const email = input.value.trim();
    const allInfo = {message, email}
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allInfo));
}


function enteredTextarea (){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
        if (savedMessage) {const {email, message} = JSON.parse(savedMessage);
        input.value = email;
        textarea.value = message;
        };
    
}

function handleSubmit(event){
    event.preventDefault();
    console.log("send");

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}