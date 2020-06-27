jQuery(document).ready(function () {
    $('img').each(function () {
        if (typeof $(this).attr("data-src") != "undefined") {
            $(this).attr("src", $(this).attr("data-src"));
        }
    });
});
