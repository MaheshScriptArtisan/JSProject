
document.addEventListener("DOMContentLoaded", function () {

    var rect = document.querySelector('#center');
    rect.addEventListener("mousemove", function (abc) {
        var rectLocation = (rect.getBoundingClientRect());
        //console.log('hay width is ' + rectLocation.width); //just checking width here 
        var insideRect = (abc.clientX - rectLocation.left);

        if (insideRect < rectLocation.width / 2) {
            //console.log("left");
            var redColor = (insideRect / rectLocation.width) * 255;

            gsap.to(rect, {
                backgroundColor: `rgb(${redColor}, 0, 0)`,
                ease: "power4.inOut",
            });
        }
        else {

            var blueColor = (insideRect / rectLocation.width) * 255;

            gsap.to(rect, {
                backgroundColor: `rgb( 0, 0,${blueColor})`,
                ease: "power4.inOut",
            });

        }
    });




});