// console.log("test")

// two lines below link mug and pot images into JS from HTML
// const mug = document.getElementById('#mug');
// const pot = document.getElementById('#pot');
// const pour = document.getElementById('#coffee-pour');

// starting jQuery
$(document).ready(function() {
    $("#pot").click(function() {
        // below moves coffee pot to the left
        $(this).animate({left: '-=125px'});
        // below makes pot rotate
        $(this).rotate({bind:{
            click: function(){
                $(this).rotate({
                    angle: 0,
                    animateTo:-45,
                    })
                }
            }
        })
        // below makes sound effect play
        $('audio#pour-sound')[0].play()
    });
});



// audio sound effect below - automatically plays when page loads currently
// $('audio#pour-sound')[0].play()

