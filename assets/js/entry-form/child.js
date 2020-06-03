function validateForm()
{

     ip = document.getElementById("ip").value;
     url = document.getElementById("url").value;
     commentNonce = document.getElementById("comment_nonce").value;
     commentNonceTtl = document.getElementById("comment_nonce_ttl").value;
     
     parentName = document.getElementById("parent-name");
     parentSurname = document.getElementById("parent-surname");

     entryName = document.getElementById("entry-name");
     entrySurname = document.getElementById("entry-surname");
     gender = document.getElementById("entry-type");
     age = document.getElementById("age");

     email = document.getElementById("email");
     phone = document.getElementById("phone");
     description = document.getElementById("description");
     upload = document.getElementById("upload");
     accept = document.getElementById("terms-accept");
    


     if ( url != "" ) {

          document.location.href="/vanger";
          return false;
     }

     if ( commentNonce == "" || commentNonceTtl == "" ) {

          return false;
     }



     wordCount = description.value.split(' ').length;
  

     errorMessage = "";
     errorMessageCount = 1;

     if ( parentName.value == "" ) {

          if ( errorMessage == "" ) {
               parentName.focus();
          }

          parentName.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Please enter parent's first name<br>";
     }
     if ( parentSurname.value == "" ) {

          if ( errorMessage == "" ) {
               parentSurname.focus();
          }
          
          
          parentSurname.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Please enter parent's surname<br>";
     }
     
     
     if ( entryName.value == "" ) {

          if ( errorMessage == "" ) {
               entryName.focus();
          }


          entryName.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Please enter child's first name<br>";
     }
     if ( entrySurname.value == "" ) {

          if ( errorMessage == "" ) {
               entrySurname.focus();
          }


          entrySurname.style.borderColor = "red"
          errorMessage = errorMessage + (errorMessageCount++) + ") Please enter child's surname<br>";
     }
     

     if ( gender.value == "" ) {

          if ( errorMessage == "" ) {
               gender.focus();
          }


          gender.style.borderColor = "red"
          errorMessage = errorMessage + (errorMessageCount++) + ") Please select boy or girl<br>";
     }


     if ( age.value == "" ) {

          if ( errorMessage == "" ) {
               age.focus();
          }


          age.style.borderColor = "red"
          errorMessage = errorMessage + (errorMessageCount++) + ") Please your child's age<br>";
     }
     

     if ( email.value == "" ) {

          if ( errorMessage == "" ) {
               email.focus();
          }


          email.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Please enter your email address<br>";
     }

     if ( phone.value == "" ) {

          if ( errorMessage == "" ) {
               phone.focus();
          }


          phone.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Please enter your cell number<br>";
     }
     
     if ( description.value == "" ) {

          description.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Please enter your child's description<br>";
     
     } else if (wordCount < 12) {
              
          description.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") The description is too short<br>";
     
     }
     
     
     if(upload.value == "" ) {

          if ( errorMessage == "" ) {
               description.focus();
          }

          description.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Please select an image to upload<br>";
          
     } else {

          var ext = upload.value.match(/\.([^\.]+)$/)[1];
          switch (ext) {
               case 'jpg':
               case 'jpeg':
               case 'png':
               case 'JPG':
               case 'JPEG':
               case 'PNG':
                    break;
               default:
               errorMessage = errorMessage + (errorMessageCount++) + ") Images must be either JPG or PNG files<br>";
               upload.value = "";

          }
     }


     if( jQuery("#terms-accept").prop("checked") === false ) {
          accept.style.borderColor = "red";
          errorMessage = errorMessage + (errorMessageCount++) + ") Sorry, you may only enter if you accept our <a href=\"/terms-and-conditions/\" target=\"_new\">terms and conditions</a><br>";
     }



     if (errorMessage == "") {
 
          jQuery(".loadingDiv").addClass("loading");
          
          gtag_report_conversion();
          
          return true;
     }




     document.getElementById("form-validation-messages").style.display = "block";
     document.getElementById("form-validation-messages").innerHTML = errorMessage;


     return false;
}