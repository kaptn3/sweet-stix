emailVerify = "";

jQuery("#email").change(function () {
    jQuery("#email-error").html("");

    // basic email validation...
    if (jQuery("#email").val().indexOf("@") < 1) {
        alert("ERROR! " + jQuery("#email").val() + " is not a valid email");
        jQuery("#email").val("");
        jQuery("#email").css('border', '1px solid red');
        return;
    }
    emailVerify = jQuery("#email").val();
    jQuery.get("/ajax/email_verify.php?email=" + jQuery("#email").val(), function (data, status) {
        if (data == "false") {
            jQuery("#email-error").html("<strong>ERROR!</strong> " + jQuery("#email").val() + " is not a valid email.<br />");
            jQuery("#email").val("");
            jQuery("#email").css('border', '1px solid red');
            return;
        }
    });
});

jQuery(".wpcf7-form-control").on("keyup", function (e) {
    if (this.id == "parent-name" || this.id == "parent-surname" || this.id == "entry-name" || this.id == "entry-surname" || this.id == "email" || this.id == "phone" || this.id == "description") {
        jQuery("#" + this.id).css('border', '1px solid var(--gray)');
    }
});
