
$(document).ready(function() {
    $('.exampeles_title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(500);
        $(this).css('display','flex');
    });
});

$(document).ready(function() {
    $('.skills_title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(500);
        $(this).css('display','flex');
    });
});

$(document).ready(function() {
    $('.education_title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
        $(this).css('display','flex');
    });
});

$(document).ready(function() {
    $('.experience_title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
        $(this).css('display','flex');
    });
});

$(document).ready(function() {
    $('.project_title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
        $(this).css('display','flex');
    });
});

// BURGER------
$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.header_list').click(function(event){
        $('.header_burger,.header_menu').removeClass('active');
        $('body').removeClass('lock');
    });
});