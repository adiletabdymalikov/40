$(document).ready(function () {

    function upDown() {
        $(".matchbox")
            .css({ transition: "1s", transform: "translateZ(60px) translateY(-70px)" })
        
        setTimeout(() => {
            $(".matchbox")
                .css({ transition: "2s", transform: "translateZ(60px) translateY(0px)" });
        }, 1000);

        setTimeout(upDown, 3000);
    }

    upDown();

});
