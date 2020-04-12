export {}

var credential = {
    "user" : "admin",
    "password": "pass@123"
}

var submitForm = (arg:validCredential) =>{
    console.log(arg.user);
    console.log(arg.password);
}

submitForm(credential)

interface validCredential {
    user : string,
    password : string
}