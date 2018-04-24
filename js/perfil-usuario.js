const btnNext = () => {
    window.location.href = "../views/perfil2-user.html";
}

const inputName = document.getElementById('name');
const inputOne = document.getElementById('study');
const inputTwo = document.getElementById('company');
const inputThree = document.getElementById('experience');
const subBtn = document.getElementById('formUser');


const createVacant = (e) => {
    e.preventDefault();
    const valName = inputName.value;
    const valOne = inputOne.value;
    const valTwo = inputTwo.value;
    const valThree = inputThree.value;
    
    createObject(valName,valOne, valTwo, valTwo);
    //console.log(createObject(valOne, valTwo, valTwo));
}

const createObject = (valName,valOne, valTwo, valThree) => {
    //console.log(valOne, valTwo, valThree);
    let object = [{
        name:valName,
        firstInput: valOne,
        secondInput: valTwo,
        threeInput: valThree
    }]
    objectToLocalStorage(object);
}

const objectToLocalStorage = object => {
    console.log(object);
    const toLocalStorage = localStorage.setItem('profileUserStorage', JSON.stringify(object));
    window.location.href = "../views/home-user.html"
}

subBtn.addEventListener('submit',createVacant);










