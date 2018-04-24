//CUESTIONARIO DE VACANTES

// Esta función guarda el valor de la primer pregunta
var question1 = $( "#question1" ) ;
const savingSelectedOption = ()=>{
   $( "#question1 option:selected" ).each(function() {
        question1 = $( this ).text() + " ";
        console.log(question1);
    });
}
question1.change(savingSelectedOption);


submitBtn = $ ( "#submit-btn" )
const paintingPost = (e)=>{
    e.preventDefault();
    const question2 = $( "#question2" ).val();
    const question3 = $( "#question3").val();
    const question4 = $( "#question4").val();
    const question5 = $( "#question5").val();
    const question6 = $( "#question6").val();
    const question7 = $( "#question7").val();
    const question8 = $( "#question8").val();

};

submitBtn.click(paintingPost);