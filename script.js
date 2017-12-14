// console.log('Hello Word')

$(document).ready(function() {

    // Working on text below form entering before alert. 
     $('span').text('Processing......').show().fadeOut(4000); 
         event.preventDefault();

    $('#question1').submit(function (event) {
        event.preventDefault()
        var enter = $('#submit1').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        if($('#submit1').val().toUpperCase() === 'C') {
        parseInt($('.score').html(points))
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
        // return false (Can also be used)
      
    })

       $('#question2').submit(function (event) {
        event.preventDefault()
        var enter = $('#submit2').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
           if($('#submit2').val().toUpperCase() === 'B' ) {
            parseInt($('.score').html(points))
               alert('Success!')    
           } else {
               alert('Totally Wrong!')
           }
         
       })

       $('#question3').submit(function (event) {
        event.preventDefault()
        var enter = $('#submit2').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        if($('#submit3').val().toUpperCase() === 'C') {
        parseInt($('.score').html(points))        
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })

    $('#question4').submit(function (event) {
        event.preventDefault()
        var enter = $('#submit2').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        if($('#submit4').val().toUpperCase() === 'B') {
        parseInt($('.score').html(points))     
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })

    $('#question5').submit(function (event) {
        event.preventDefault()
        var enter = $('#submit2').html()
        var score = parseInt($('.score').html())
        var points = score + 5 
        if($('#submit5').val().toUpperCase() === 'C') {
        parseInt($('.score').html(points))      
            alert('Success!')    
        } else {
            alert('Totally Wrong!')
        }
      
    })
    
    })


// Source for jQuery submit form https://api.jquery.com/submit/
