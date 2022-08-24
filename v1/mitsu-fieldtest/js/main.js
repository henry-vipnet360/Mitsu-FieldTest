    //preloader
    jQuery(window).ready(function () {
        jQuery('#preloader').fadeOut('slow');
        jQuery('body').css({
            'overflow': 'visible'
        });
    })
    
    //burguermenu
jQuery('.burguermenu').click(function () {
    jQuery('.burguermenu').toggleClass('open');
    jQuery('.mainmenu').toggleClass('open');
    // jQuery('main').toggleClass('openmenu');
    return false;
});