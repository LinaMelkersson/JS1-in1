let users = [ {
    id: '1',
    firstname: 'a',
    lastname: 'b',
    email: 'eee'
}
]


let form = document.getElementById('form');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let check = false;
let list = document.querySelector('#list')

console.log(list)


const listelement = () => { 
    list.innerHTML = ''

    users.forEach(user => {
        list.innerHTML += `
            <div class="userbox">
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

    if (check === true) {
        check = false;
        listelement();
    }
    checkInputs();
    if (check == true) {
        let newuser = {
            id: Date.now().toString(),
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value
        }
        users.push(newuser);
        listelement();
        console.log(list)
    }
 
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
    // users = users.filter(newuser => newuser.id !== e.target.parentNode.parentNode.parentNode.id)
    //     listelement();
    // users = users.filter(newuser => newuser.id)
    users=users.filter(x => x.firstname)
    console.log(users)
 
    // listelement();


    // let row = remove(parentNode.parentNode);
    // row.parentNode.removechild(row);
    // console.log(e.target)

    // if(e.target.classlist.contains('remove')){
    //     let row = remove.parentNode.parentNode;
    //     row.parentNode.removechild(row);
    //     console.log(e.target)
    // }

   

    // if(e.target.classlist.contains('remove')){
    //     console.log(e.target)
    //     users = users.filter(newuser => newuser.id !== e.target.parentNode.parentNode.id)
    //     listelement();
    // }

})



