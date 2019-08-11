// looks good however your code is not DRY. Consider ways in which you could write 1 function to accommodate all of your questions. You could use a loop to create click events for each question.
// You could also consider creating HTML elements for each question using JS. You would need an array of objects containing all of the necessary components of your questions and a loop to insert elements into the dom for each question in the array.
// let questions = [
//   {
//     question: 'Hall & Oates are ...?',
//     choiceA: '... a notorious Wall Street gang.'
//     choiceB: '... a nutritous oatmeal brand that was banned in 1996.'
//     choiceC: '... two white dudes who sing R&B pop rock.'
//     answer: 'C'
//   },
//   {
//     repeat for additional questions...
//   }
// ]

// console.log('Hello Word')

$(document).ready(function() {

    // Work in progress: 'Processing' text below form to enter after submit and before alert. 
    //  $('span').text('Processing......').show().fadeOut(4000); 
    //      event.preventDefault();

    // Question function event.
    // Scoring attached to specific question.
    // Prevent default to stop page from refreshing plus keep score count.    
    $('#question1').submit(function (event) {
        // $('span').text('Processing......').show().fadeOut(4000)
        event.preventDefault()
        // var enter = $('#submit1').html()
        var score = parseInt($('.score').html())
        var points = score + 5  
        // Stop user from re-entering input multiple times
        $("#submit1").prop('disabled', true) 
        // If and else statements for correct and wrong answer. 
        // Answer can be submitted in either lowercase or uppercase. 
        if($('#submit1').val().toUpperCase() === 'C') {   
        parseInt($('.score').html(points))
            alert("OUTRAGEOUS!")
        } else {
            alert('Totally Totally Wrong!')
        }
        // 'return false' (Can also be used)
    })

       $('#question2').submit(function (event) {
        $('span').text('Processing......').show().fadeOut(4000)        
        event.preventDefault()
        var enter = $('#submit2').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        $("#submit2").prop('disabled', true) 
        
           if($('#submit2').val().toUpperCase() === 'B' ) {
            parseInt($('.score').html(points))
               alert('OUTRAGEOUS!')    
           } else {
               alert('Totally Totally Wrong!')
           }
         
       })

       $('#question3').submit(function (event) {
        $('span').text('Processing......').show().fadeOut(4000)        
        event.preventDefault()
        var enter = $('#submit2').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        $("#submit3").prop('disabled', true) 
        
        if($('#submit3').val().toUpperCase() === 'C') {
        parseInt($('.score').html(points))        
            alert('OUTRAGEOUS!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })

    $('#question4').submit(function (event) {
        $('span').text('Processing......').show().fadeOut(4000)        
        event.preventDefault()
        var enter = $('#submit2').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        $("#submit4").prop('disabled', true) 
        
        if($('#submit4').val().toUpperCase() === 'B') {
        parseInt($('.score').html(points))     
            alert('OUTRAGEOUS!')    
        } else {
            alert('Totally Wrong!')
        }
    
    })

    $('#question5').submit(function (event) {
        // $('span').text('Processing......').show().fadeOut(4000)        
        event.preventDefault()
        // var enter = $('#submit5').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        $("#submit5").prop('disabled', true)
        $('#span-5').text('Processing......').show().fadeOut(4000)
        // .then(function(){ 
        if ($('#submit5').val().toUpperCase() === 'C') {
        parseInt($('.score').html(points))      
            alert('OUTRAGEOUS!')    
        } else {
            alert('Totally Wrong!')
        }
    // })
    })
    
    })


// Source for jQuery submit form https://api.jquery.com/submit/
// Source for disabling user from inputing more than once: https://stackoverflow.com/questions/1414365/disable-enable-an-input-with-jquery
// Sources from PixelArt and ATM Lab.

