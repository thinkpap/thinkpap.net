var bodywidth = $(window).width();
var ctrlwidth = $(".params").width();
var iframewidth = bodywidth - ctrlwidth - 30;

$(".iframeWrap").css('width',iframewidth+'px');



$(".params select").change(function () {

    if ($(this).val() == "easing-more") { window.open("otherDemo/T2.1/easing.html"); return; }

    var srcStr = "";
    var ind = $(".params").index($(this).closest(".params"));

    var iframe = $(this).closest(".demobox").find("iframe");
    var selects = $(this).closest(".params").find("select");

    selects.each(function () {
        srcStr += "&" + $(this).val();
    });
    iframe.attr("src", iframe.attr("src").split('&')[0] + srcStr);

    $(".curJsCode").eq(ind).html(getJsCode(ind));
});
