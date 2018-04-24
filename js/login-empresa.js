const array = [];

//función para almacenar el email y password
$("form").submit(function(e){
    e.preventDefault();
    const companyemail = $('#inputEmail3').val();
    //console.log(companyemail);

    const companypassword = $('#inputPassword3').val();
    //console.log(companypassword);
    toObject(companyemail,companypassword);
});
// guarda el mail y la contraseña en un objeto 
const toObject = (email,password)=>{
    console.log(email);
    console.log(password);
let object = [{
    emaildb:email,
    passwordb:password
}]
console.log(object);
objectToLocalStorage(object);
}

//convierte el objeto en string y lo guarda el objecto en local storage

const objectToLocalStorage= json =>{
    //console.log(json);
    let jsonEmails = json;
   // console.log(jsonEmails);
   let jsonToString = JSON.stringify(jsonEmails);
   console.log(jsonToString);
   const toLocalStorage = localStorage.setItem('emailStorage',jsonToString);
   gettingData(toLocalStorage);
}
//fucnion para recuperar el string almacenado y convertirlo en json
const gettingData = storage => {
    let storedData = localStorage.getItem('emailStorage');
    console.log(storedData);
    let stringToJson = (JSON.parse(storedData));
    window.location.href = "../views/home-empresa.html"
    console.log(stringToJson);
}