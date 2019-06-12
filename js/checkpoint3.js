// console.log("test")

// two lines below link mug and pot images into JS from HTML
// const mug = document.getElementById('#mug');
// const pot = document.getElementById('#pot');
// const pour = document.getElementById('#coffee-pour');

// starting jQuery
$(document).ready(function() {
    $("#pot").click(function() {
        $(this).animate({left: '-=75px'});
        // $(this).animate()
        $(this).rotate({bind:{
            click: function(){
                $(this).rotate({
                    angle: 0,
                    animateTo:-45,
                    })
                }
            }
        });
    });

});










// function pourCoffee() {
//     if {
        
//     }
// }