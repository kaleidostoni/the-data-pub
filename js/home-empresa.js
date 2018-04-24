//CUESTIONARIO DE VACANTES

// Esta función guarda el valor de la primer pregunta(select)
var question1 = $( "#question1" ) ;
const savingSelectedOption = ()=>{
   $( "#question1 option:selected" ).each(function() {
        question1 = $( this ).text() + " ";
        console.log(question1);
    });
}
question1.change(savingSelectedOption);


// Esta función guarda los valores del resto de las preguntas
submitBtn = $ ( "#submit-btn" )
const savingAnswers = (e)=>{
    e.preventDefault();
    const question2 = $( "#question2" ).val();
    const question3 = $( "#question3").val();
    const question4 = $( "#question4").val();
    const question5 = $( "#question5").val();
    const question6 = $( "#question6").val();
    const question7 = $( "#question7").val();
    const question8 = $( "#question8").val();
paintingJobVacant()
};

submitBtn.click(savingAnswers);