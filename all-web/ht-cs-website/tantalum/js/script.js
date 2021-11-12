$(".skill_progress").each(function () {
    $this = $(this);
    $percentage = $this.attr("percentage");
    $this.css("width", $percentage+"%");
});

$(".skillProfessional").on("click" , function () {
    $(".PerSkills").slideUp();
    setTimeout(() => {
        $(".ProSkills").slideDown();
    }, 700);
    $(this).addClass("active");
    $(".skillPersonal").removeClass("active");
})

$(".skillPersonal").on("click" , function () {
    $(".ProSkills").slideUp();
    setTimeout(() => {
        $(".PerSkills").slideDown();
    }, 700);
    $(this).addClass("active");
    $(".skillProfessional").removeClass("active");
})
$(function () {
    $(".typed").typed({
        strings : ["Web Designer." , "Web Developer." , "Marketer." , "Blogger." , "Youtuber."],
        typeSpeed : 200,
        backSpeed : 70,
        backDelay: 1000,
        loop: true,
    })
})
$(function () {
    $("body").scrollspy({
        target : "#scrollspy"
    })
})
$(".ChangeTheme").on("click" ,function () {
    $ThemeColor = "#"+Math.random().toString(16).substr(2,6);
    console.log($ThemeColor);
    $("body").css("--first-color" , $ThemeColor);
    $(".Themechanged").fadeIn();
    $(".Themechanged").css("background" , $ThemeColor);
    $(".CurrentColor").html($ThemeColor)
    setTimeout(() => {
        $(".Themechanged").fadeOut();
    }, 2000);
})