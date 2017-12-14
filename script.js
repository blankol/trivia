// console.log('Hello Word')

$(document).ready(function() {
     $('span').text('Validating......').show().fadeOut(4000);
         event.preventDefault();

    $('#question1').submit(function (event) {
        if($('#submit1').val() === 'C') {
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })
    
       $('#question2').submit(function (event) {
           if($('#submit2').val() === 'b') {
               alert('Success!')    
           } else {
               alert('Totally Wrong!')
           }
         
       })
    
    })

