$(document).ready(() => {

    let started = false;

    $('#start').click(() => {
        console.log("start click");
        reset();
        started = true;
        setStatus("Keep moving...");
        $('.boundary').mouseover(lostEvent);

    });

    $('#maze').mouseleave(lostEvent);

    function lostEvent(){
        if (started) {
            $('.boundary').addClass('youlose');
            setStatus("You lost! :[");
            started = false;
        }
    }


    $('#end').mouseover(function() {
        if (started) {
            setStatus("You win! :]");
            reset();
        }
    });

    function setStatus(text) {
        $('#status').text(text);
    }

    function reset() {
        started = false;
        $('.boundary').unbind('mouseover');
        $('.boundary').removeClass('youlose');
    }

});