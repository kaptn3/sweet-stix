jQuery("#order-top").change(function () {
    if (jQuery("#order-top option:selected").val() == "top") {
        jQuery("#entry-search").val("order-top");
    }
    jQuery("#search-form").submit();
});
