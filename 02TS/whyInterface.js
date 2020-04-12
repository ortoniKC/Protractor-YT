var credential = {
    "user" : "admin",
    "password": "pass@123"
}

var submitForm = (arg) =>{
    console.log(arg.user);
    console.log(arg.pass);
}

submitForm(credential)
