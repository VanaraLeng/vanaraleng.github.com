$(document).ready(function() {
    $('#form > .button').click(start);
  });

  var timer;

  function start() { 
    if (timer != undefined) {
        clearInterval(timer);
    }

    // Remove all 
    let container = $("#container");
    container.children().remove();

    let width = $("#width").val();
    let interval = $("#interval").val();
    let growth = $("#growth").val();
    let number = $("#number").val();
    
    // Populate element
    
    let offset = 20;
    let colors = ['red','blue','green', 'purple', 'yellow']

    for (let i = number - 1; i >= 0 ; i--) {
        let circle = $('<div>', {
            class: 'circle',
        });

        let color = colors[ i % colors.length];
        circle.css('background-color', color);

        circle.css('width', width);
        circle.css('height', width);
        circle.css('border-radius', width/2);

        let halfScreenWidth = window.innerWidth / 2 - 50;
        if (i % 2 == 0) {


            circle.css('left', halfScreenWidth + i * offset)
        } else {
            circle.css('left', halfScreenWidth - i * offset)   
        }
    
        $('#container').append(circle);

        // Add click event to remove
        circle.click((e) => {
            e.target.remove();
        });
    }
    
    timer = setInterval(() => {
        let circle = $('.circle');
        let gwidth = circle.width() + parseInt(growth);
        console.log(gwidth);
        circle.css('width', gwidth);
        circle.css('height', gwidth);
        circle.css('border-radius', gwidth/2)
    }, interval);
  }

  