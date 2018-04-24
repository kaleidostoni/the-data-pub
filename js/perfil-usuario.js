const btnNext = () => {
    window.location.href = "../views/perfil2-user.html";
}

var inputOne = document.getElementById('study');
var inputTwo = document.getElementById('company');
var inputThree = document.getElementById('experience');
var subBtn = document.getElementById('formUserSubmit');

subBtn.addEventListener('click', function createVacant(e) {
    e.preventDefault();
    const valOne = inputOne.value;
    const valTwo = inputTwo.value;
    const valThree = inputThree.value;
    createObject(valOne, valTwo, valThree);
});

const createObject = (valOne, valTwo, valThree) => {
    //console.log(valOne, valTwo, valThree);
    let object = [{
        firstInput: valOne,
        secondInput: valTwo,
        threeInput: valThree
    }]
    objectToLocalStorage(object);
}

const objectToLocalStorage = object => {
    const toLocalStorage = localStorage.setItem('profileUserStorage', JSON.stringify(object));
    window.location.href = "../views/home-user.html"
}



