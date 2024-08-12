const email = document.getElementById('email');

let error = 0;
const formValidation =(event) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');
    if(email.value ==''){
        email.style.border = '1px solid red';
        emailError.textContent = 'please enter an email address';
        emailError.style = "color: red";
        error++ //value of error increased by 1
    }
    else if(!email.value.match(emailRegex)){
            email.style.border = '1px solid red';
            emailError.textContent = 'please enter a valid email address';
            emailError.style = "color: red";
            error++ //value of error increased by 1
        }
        else{
            email.style.border = '1px solid green';
            emailError.textContent = '';
            emailError.style = "color: green";
        }
    if(error>0){
        event.preventDefault();
    }
}

