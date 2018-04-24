const buttonGoogle = document.getElementById("google")
//const googleDocs = document.querySelector('#survey');
const provider = new firebase.auth.GoogleAuthProvider();

buttonGoogle.addEventListener('click', function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            var token = result.credential.accesToken;
            var usuario = result.user;
            console.log('La primer funcion' + usuario);

            localStorage.setItem('usuario', JSON.stringify(usuario))
            window.location.href = '../views/perfil1-user.html';
        })
});

//Guardar datos automaticamente
function guardaDatos (user){
    var usuario = {
      uid:user.uid,
      nombre:user.displayName,
      email:user.email,
      foto:user.photoURL
    };
    firebase.database().ref("Data-pub/" + user.uid)
    .set(usuario)
   };
   
   
   //leyendo de la base de guardaDatos
   firebase.database().ref("Data-pub")
   .on("child_added", function(s){
    var user = s.val();
   
   });

//función para almacenar el email y password
$("form").submit(function (e) {
    e.preventDefault();
    const useremail = $('#inputEmailU').val();
    const userpassword = $('#inputPasswordU').val();
    toObject(useremail, userpassword);
});

// guarda el mail y la contraseña en un objeto 
const toObject = (email, password) => {
    let object = [{
        emailUser: email,
        passwordUser: password
    }]
    console.log(object);
    objectToLocalStorage(object);
}

//convierte el objeto en string y lo guarda el objecto en local storage
const objectToLocalStorage = json => {
    let jsonEmails = json;
    let jsonToString = JSON.stringify(jsonEmails);
    console.log(jsonToString);
    const toLocalStorage = localStorage.setItem('emailStorage', jsonToString);
    gettingData(toLocalStorage);
}

//fucnion para recuperar el string almacenado y convertirlo en json
const gettingData = storage => {
    let storedData = localStorage.getItem('emailStorage');
    console.log(storedData);
    let stringToJson = (JSON.parse(storedData));
    window.location.href = "../views/perfil1-user.html"
    console.log(stringToJson);
}