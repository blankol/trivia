// console.log('Hello Word')


    $('form').submit(function (event) {
        if ($('#submit1').val() === 'C' ) {
            $( 'span' ).text('Checking...').show();
            return;
        }
        $('span').text('Incorrect!').show().fadeOut(1000);
        event.preventDefault();
    });
