var list = ($('.buttons li').size()),
    i = 0,
    offsets = 0,
    position = 0,
    clicked = 0;;
var step = Math.round(360 / list)
rotate();

$('.buttons li').click(function() {


    var clicked = $(this).index()
    offsets = clicked * step
    rotate();

});

function rotate() {
    for (i = 0; i < list; i++) {
        position = offsets - (+i * step)
        console.log(position)
        var cls = ".image" + (i + 1)
        console.log(cls)
        $(cls).css("transform", "translate(0,9em) rotate(" + position + "deg)",
            "-webkit-transform", "translate(0,9em) rotate(" + position + "deg)",
            "moz-transform", "translate(0,9em) rotate(" + position + "deg)",
            "-ms-transform", "translate(0,9em) rotate(" + position + "deg)"

        );
    }
}
