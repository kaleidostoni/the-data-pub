//CUESTIONARIO DE VACANTES

//Esta función guarda el valor de la primer pregunta
$( "#question1" ).change(function () {
    var question1 = "";
    $( "#question1 option:selected" ).each(function() {
      question1 = $( this ).text() + " ";
      console.log(question1);
    });
   
  })
