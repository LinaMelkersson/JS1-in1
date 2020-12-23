let form = document.getElementById('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    let firstnameValue = firstname.value.trim();
    let lastnameValue = lastname.value.trim();
    let emailValue = email.value.trim();

    if(firstnameValue === ``) {
    setErrorFor(firstname, `Firstname cannot be blank`);

    } else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === ``) {
        setErrorFor(lastname, `Lastname cannot be blank`);
    
    } else {
        setSuccessFor(lastname);
    }

    if(emailValue === ``) {
        setErrorFor(email, `Email cannot be blank`);
    
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, `Email is not valid`);

    } else {
        setSuccessFor(email);
    }
}
    
function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
