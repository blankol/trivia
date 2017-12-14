// console.log('Hello Word')

$(document).ready(function() {
     $('span').text('Processing......').show().fadeOut(4000);
         event.preventDefault();

    $('#question1').submit(function (event) {
        if($('#submit1').val() === 'C') {
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })
    
       $('#question2').submit(function (event) {
           if($('#submit2').val() === 'B') {
               alert('Success!')    
           } else {
               alert('Totally Wrong!')
           }
         
       })

       $('#question3').submit(function (event) {
        if($('#submit3').val() === 'b') {
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })

    $('#question4').submit(function (event) {
        if($('#submit4').val() === 'b') {
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })

    $('#question5').submit(function (event) {
        if($('#submit5').val() === 'b') {
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })
    
    })

