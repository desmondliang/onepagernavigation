/*
 One Pager Navigation jQuery plugin
 Author: Desmond Liang
 Website: www.desmondliang.com/one-pager-navigation
 Date: 01/06/2014
 */
(function( $ ) {
    $.fn.onepapernav = function(options) {

        var settings = $.extend({
            // These are the defaults.
            trigger: "click",
            link: "a",
            activeClass:"active",
            speed: 1000,
            margintop: $(this).height(),
            container: this
        }, options );

        return this.each(function() {

            var objContainer = settings.container;
            var objLinks = $(settings.link);

            objContainer.find(objLinks).each(function(index){

                $(this).bind(settings.trigger,function(event){

                    event.preventDefault();

                    var d = 0;
                    if($(this.hash).offset().top > $(document).height()-$(window).height()){
                        d=$(document).height()-$(window).height();
                    }else{
                        d=$(this.hash).offset().top;
                    }
                    //go to destination
                    $('html,body').animate({scrollTop:d - settings.margintop}, settings.speed);
                });
            });


            $(window).scroll(function () {

                var objContainer = settings.container;

                if(objContainer.length > 0){

                    var depth = -1;

                    var objLinks = $(settings.link);

                    objContainer.find(objLinks).each(function(index){

                        if((($(window).scrollTop() + settings.margintop) >  $($(this).attr('href')).offset().top )){
                            depth++;
                        }
                    });

                    if( depth > -1){
                        objContainer.find($("."+settings.activeClass)).removeClass(settings.activeClass);
                        objLinks.eq(depth).addClass(settings.activeClass);
                    }
                }
            });
        });
    };
}( jQuery ));