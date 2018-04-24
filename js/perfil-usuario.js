const btnNext = () => {
    window.location.href = "../views/perfil2-user.html";
}

const inputOne = document.getElementById('study');
const inputTwo = document.getElementById('company');
const inputThree = document.getElementById('experience');
const divProfileForm = document.getElementById('profileDataForm');
const subBtn = document.getElementById('formUserSubmit');

subBtn.addEventListener('click', function createVacant(e) {
    e.preventDefault();
    const valOne = inputOne.value;
    const valTwo = inputTwo.value;
    const valThree = inputThree.value;

    createObject(valOne, valTwo, valTwo);
    console.log(createObject(valOne, valTwo, valTwo));
});

const createObject = (valOne, valTwo, valThree) => {
    console.log(valOne, valTwo, valThree);
    let object = [{
        firstInput: valOne,
        secondInput: valTwo,
        threeInput: valThree
    }]
    objectToLocalStorage(object);
}

const objectToLocalStorage = object => {
    const toLocalStorage = localStorage.setItem('profileUserStorage', JSON.stringify(object));
    console.log(toLocalStorage);
    const getDataLocalStorage = localStorage.getItem('profileUserStorage')
    console.log(getDataLocalStorage);
    const parseData = JSON.parse(getDataLocalStorage);
    console.log(parseData);
    //console.log(toLocalStorage,getDataLocalStorage)
    gettingData(parseData);
}

const gettingData = (parseData) => {

    parseData.forEach(element => {
        const elementOne = element.firstInput;
        console.log(elementOne);
        const elementTwo = element.SecondInput;
        console.log(elementTwo);
        const elementThree = element.ThreeInput;
    
        paintData(elementOne,elementTwo,elementThree)
    });

const paintData = (elementOne,elementTwo,elementThree) => {

    let template = `<div>
                    <p>${elementOne}</p>
                    <p>${elementTwo}</p>
                    <p>${elementThree}</p>
                    </div>`
    
    divProfileForm.innerHTML = template;
    divProfileForm.append(template);
}

window.location.href = "../views/home-user.html"
}




