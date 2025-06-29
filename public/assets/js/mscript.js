$(document).ready(function() {

    var width = window.innerWidth
    var height = window.innerHeight

    if (typeof isMobile != 'undefined' && isMobile == 1) {
        $(".mvp_container,.news_articles_content,.article_area_content").css('width', '100%');
        $("#msite-header").css('background-color', '#ffffff');
        // $(".mvpBgContainer.mvp_container").css('border', '5px solid #B3B3B3');
        $(".left_content_area,.article_area_content,.service_content").css('margin', '0');
        $("#wrapper").css('margin-top', '0');
        if (typeof document.getElementsByClassName('box_images')[0] != 'undefined') {
            document.getElementsByClassName('box_images')[0].setAttribute('style', 'display:none !important');
        }
    }
    $("#menuToggle").click(function() {
        $('#mySidenav').slideDown(200);
        $("body").css({
            "overflow": "hidden"
        });
    });

    $('#mySidenav .closebtn').click(function() {
        $('#mySidenav').slideUp(200);
        $("body").css({
            "overflow": "auto"
        });
    });

    function footerPlacement() {
        if (width <= 379) {
            $('#boxingList, #help').removeClass('col-4').addClass('col-6')
            $('#legal').removeClass('col-4').addClass('col-centered')
        } else if (width >= 380) {
            $('#boxingList, #help').removeClass('col-6').addClass('col-4')
            $('#legal').removeClass('col-centered').addClass('col-4')
        }
    }
    footerPlacement()

    $(window).resize(function() {
        width = window.innerWidth
        footerPlacement()
    });

    setTimeout(function() {
        $('.submenu').hide();
        $('#mySidenav .menu-txt').click(function() {
            if (!$(this).find('.sym').hasClass('fa-minus')) {
                $('.submenu').hide();
                $('#boxing-menu-list .sym').removeClass('fa-minus').addClass('fa-plus')
            }
            $(this).find('.sym').toggleClass("fa-plus fa-minus");
            $(this).parent().children('ul').toggle(500);
        })

        $("#mainMenuHeader").click(function() {
            $('#boxing-menu-list').slideToggle(500);
            if ($(".sitesym").hasClass('fa-minus')) {
                $(".sitesym").removeClass("fa-minus").addClass("fa-plus");
            } else {
                $(".sitesym").removeClass("fa-plus").addClass("fa-minus");
            }
        })
    }, 1000)
});