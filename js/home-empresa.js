

// $('select').on('change', function() {
//     alert( this.value );
//   })

const form = $('#job-form');
console.log(form);

const question1 = $('question1');
console.log(question1);
question1.change(function(e){
    console.log(question1).value;
});

// const answer1 = e => {
//     e.preventDefault();
//     console.log(e).value;
// }