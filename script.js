let users = []


let form = document.getElementById('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let check = false;
let list = document.querySelector('#list')



const listelement = () => { 
    list.innerHTML = ''

    users.forEach(user => {
        list.innerHTML += `
            <div id="${user.id}" class="userbox">
                <div class="userinput">
                    <h4> ${user.firstname} ${user.lastname}</h4>
                    <h6>${user.email}</h6>
                    <p class="uid">${user.id}</p>
                </div>
                <div class="changeandremove">
                    <button class="change">Change</button>
                    <button class="remove">Remove</button>
                </div>
            </div>`  
    });
}
listelement();


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

    if (check == true) {
        removeinput(firstname);
        removeinput(lastname);
        removeinput(email);

        let newuser = {
            id: uuidv4(),
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value
        }
        users.push(newuser);
        listelement();

        firstname.value = '';
        lastname.value = '';
        email.value = '';
    }
});

function removeinput(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control';
}


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
    check = false;
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
    check = true;
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

list.addEventListener('click', (e) => {

    if(e.target.classList.contains('remove')){
        users = users.filter(newuser => newuser.id !== e.target.parentNode.parentNode.id)
        listelement();
    }

})

list.addEventListener('click', (e) => {

    if(e.target.classList.contains('change')){
        users = users.filter(newuser => newuser.id !== e.target.parentNode.parentNode.id)
        listelement();
    }
})



