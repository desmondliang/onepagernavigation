One Pager Navigaiton
==================

A simple navigation for one paper style web page. I created this plugin simply out of frustration, for there was no simple
solution out there at the time I wrote this to handle such a simple task.

This plugin require jQuery 1.3+, nothing fancy. It allows you to link navigation buttons to a set to DOM elements on the same page,
scroll to the element on the event of your choice. At the same time, a custom class is added to the button related to the section
currently in the view port.

Example:
--------

    $('nav').onepapernav();

Options:
--------

    $('nav').onepapernav({
        trigger: "click",       //Event that triggers the scrolling. ie. mouseover. Default: click
        link: "a",              //Selector of the navgiation buttons. Default: 'a'
        activeClass:"active",   //Class injected to the button related to the section currently in the view port. Default: 'active'
        speed: 1000,            //Speed of the transition in milliseconds. Default: 1000
        margintop: 100          //Top margin (in px) added to the top in order to prevent part of the section from hiding under the navigation. Default: Height of the containing element.
    });