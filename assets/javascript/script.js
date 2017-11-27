
/*
$(document).ready(function () {

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });


    var tenth = $(window).height() * .1;
    //var wrap = $("#wrap");
    var wrap = $("body");

    var scroll_lengths = [7 * tenth, 9.5 * tenth, 12 * tenth, 14.5 * tenth, 17 * tenth]
    var index = 0;
    var first = true;
    wrap.on("scroll", function (e) {
        if (first) {
            first = false;
            $(".relative").css("animation", "relativeAnim 1.0s forwards");
            $(".clear").css("animation", "clearAnim 1.0s forwards");
            $(".splash").css("animation", "splashAnim 1.0s forwards")
        }

        if (index < scroll_lengths.length - 1 && this.scrollTop > scroll_lengths[index] - 3) {
            index++;
            $("#" + String(index - 1)).css({"position": "fixed", "top": "30vh", "left": String((index - 1) * 15 + 10) + "vw", "margin":"0" });
            $("<div class='division'> <div class='division-pic'></div> </div>").insertBefore("#" + String(index -1) )
        }
    });


});
*/

var tenth = $(window).height() * .1;
var scroll_lengths = [7 * tenth, 9.5 * tenth, 12 * tenth, 14.5 * tenth, 17 * tenth, 22 * tenth, 24.5 * tenth, 27 * tenth, 29.5 * tenth, 32 * tenth]
var index = 0;
var first = true;
var foot = true;



window.onscroll = function() {myFunction()};

function myFunction() {
    if (first) {
        first = false;
        $(".relative").css("animation", "relativeAnim 1.0s forwards");
        $(".clear").css("animation", "clearAnim 1.0s forwards");
        $(".splash").css("animation", "splashAnim 1.0s forwards")
    }

    if (index < 5 && document.documentElement.scrollTop > scroll_lengths[index] -5 ) {
        index++;
        $("#" + String(index - 1)).css({"position": "fixed", "top": "30vh", "left": String((index - 1) * 15 + 12.5) + "vw", "margin":"0" });
        $("<div class='division'> <div class='division-pic'></div> </div>").insertBefore("#" + String(index -1) )
    }

    if (index < scroll_lengths.length && document.documentElement.scrollTop > scroll_lengths[index] -5 ) {

        index++;
        var temp = $("#" + String(index - 6))
        temp = temp.find(".division-pic")
        console.log(temp)
        temp.css("height", "25vh");

        $("#" + String(index - 1)).css({"position": "fixed", "top": "55vh", "left": String((index - 6) * 15 + 12.5) + "vw", "margin":"0" });
        $("<div class='division'> <div class='division-pic'></div> </div>").insertBefore("#" + String(index -1) )
        $("#" + String(index - 1)).find(".division-pic").css("height", "25vh")
    }

    if (foot && document.documentElement.scrollTop > 29 * tenth){
        foot = false;
        console.log("here")
        $("#foot").css("display", "block")
    }


}

