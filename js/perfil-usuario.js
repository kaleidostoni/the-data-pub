const btnNext = () => {
    window.location.href = "../views/perfil2-user.html";
}

const firstInput = document.getElementById('study');
console.log(firstInput);
const secondInput = document.getElementById('company');
console.log(secondInput);
const thirdInput = document.getElementById('experience');
console.log(thirdInput);

//firstInput.addEventListener('keyup',getvalue());

function getvalue(firstInput) {
    const firstValue = firstInput.value;
    console.log(firstValue);
}


$("#formUserProfile").submit(function(e){
    e.preventDefault();
    const firstInput = $('#study').val();
    console.log(firstInput);

    //const userpassword = $('#inputPasswordU').val();
    //console.log(companypassword);
    //toObject(useremail,userpassword);
});
// guarda el mail y la contraseña en un objeto 
/*const toObject = (email,password)=>{
    console.log(email);
    console.log(password);
let object = [{
    emailUser:email,
    passwordUser:password
}]
console.log(object);
objectToLocalStorage(object);
}*/


/*const getValueInput = (e) => {
    e.preventDeafult();
    const firstVal = firstInput.value;
    console.log(firstVal);
    //toObject(firstVal)
}

//const toObject = (firstVal)=>{
    //console.log(firstVal);
    
//let object = [{
    //school:firstVal,
    
//}]
//console.log(object);
//objectToLocalStorage(object);
//}*/
