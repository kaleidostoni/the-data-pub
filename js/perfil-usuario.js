const btnNext = () => {
    window.location.href = "../views/perfil2-user.html";
}

var input = document.getElementById('study').value;
var subBtn = document.getElementById('formUserSubmit');

var print = document.getElementById('vacant')

subBtn.addEventListener('click' , createVacant);

const createVacant = (input) => {
  console.log(input)
  
  //var text = input.value();
  console.log('es esto' + input)
  paintVacant (input)
  //console.log('aqui se pintara' + text);

}

/*function paintVacant (input) {
  console.log('no pinta lo que quiero')
  var div = document.createElement("div");
  var p = document.createElement("p");
  

  p.innerText = input;

  div.appendChild(p);
  print.appendChild(div);
  
    
  }*/