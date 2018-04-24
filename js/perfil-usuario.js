const btnNext = () => {
    window.location.href = "../views/perfil2-user.html";
}

var inputOne = document.getElementById('study');
var inputTwo = document.getElementById('company');
var inputThree = document.getElementById('experience');
var subBtn = document.getElementById('formUserSubmit');

var print = document.getElementById('vacant')

subBtn.addEventListener('click' , createVacant);

function createVacant(e){
  e.preventDefault();
  
  const valOne = inputOne.value;
  console.log(valOne);
  const valTwo = inputTwo.value;
  console.log(valTwo);
  const valThree = inputThree.value;
  console.log(valThree);
  
  paintObject(valOne,valTwo,valThree);

}

const paintObject = (valOne,valTwo,valThree) =>{
    console.log(valOne,valTwo,valThree);
let object = [{
    firstInput:valOne,
    secondInput:valTwo,
    threeInput:valThree
}]
//console.log(object);
objectToLocalStorage(object);
}

const objectToLocalStorage= json =>{
    //console.log(json);
   let jsonInputs = json;
   let jsonToString = JSON.stringify(jsonInputs);
   const toLocalStorage = localStorage.setItem('profileUserStorage',jsonToString);
   gettingData(toLocalStorage);
}

const gettingData = storage => {
    let storedData = localStorage.getItem('profileUserStorage');
    let stringToJson = (JSON.parse(storedData));
    console.log(stringToJson);
    window.location.href = "../views/home-user.html"
}

