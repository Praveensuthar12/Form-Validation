function clearError() {
    let errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    // sets error 
    let element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm() {
    let returnval = true;
    clearError();

    let name = document.forms['myForm']['fname'].value;
    if (name.length < 2) {
        seterror("name", "*length of name is too short");
        returnval = false;
    }

    if (name.length == 0) {
        seterror("name", "*length of name cannot be zero");
        returnval = false;
    }

    let email = document.forms['myForm']['femail'].value;
    if (email.length > 20) {
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    let phone = document.forms['myForm']['fphone'].value;
    if (phone.length != 10) {
        seterror("phone", "*Phone number should be of 10 digit");
        returnval = false;
    }

    let password = document.forms['myForm']['fpass'].value;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
        seterror("pass", "*Password must be at least 5 characters long and include uppercase, lowercase, number, and special character");
        returnval = false;
    }

    let cpassword = document.forms['myForm']['fcpass'].value;
    if (cpassword != password) {
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }


    return returnval;
}
