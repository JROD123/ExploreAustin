$(document).ready(function () {

    $("#submit").click(function () {
        var name = $("#firstname").val();
        var donation = $("#inputammount").val();

        $(".modal-title").html("Thank you " + name + "!");
        $(".modal-body").html("Your $" + donation + " donation just funded 2 years of Saturday challenges for 1 Explorer!");
        $(".modal-footer").hide();
    });

    $(document).on('click', '.Navbtn', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 75
        }, 1000);
    });

    $(document).on('click', '.donate-btn', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 75
        }, 1000);
    });

    $(document).on('click', '.Footer', function (event) {
        event.preventDefault();
        const href = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 75
        }, 1000);
    });

    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 350){
                $(".EAlogo").css({"opacity" : "0"})
            }
            else {
                $(".EAlogo").css({"opacity" : "1"})
            }
        })
    })
    
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1700){
                $(".donateimg").css({"opacity" : "1"})
            }
            else {
                $(".donateimg").css({"opacity" : "0"})
            }
        })
    })

})

$("Navbtn").click(function () {
    $(".icon").toggleClass("close");
});

$("#wrapper").click(function () {
    $(".icon").toggleClass("close");
});

$(".nav-link").click(function () {
    $(".icon").toggleClass("close");
}); 