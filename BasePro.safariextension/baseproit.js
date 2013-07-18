/* ================================================================================================ */
/* ››››› Add Dropbox email to BCC line on all mailto links in the contact list. ‹‹‹‹‹ */
/* 
   Developed by: Mark Van Holstyn and Samuel Bowles at Mutually Human
   http://mutuallyhuman.com
   hello@mutuallyhuman.com
*/
/* ================================================================================================ */

var attempts = 0;

function checkForContent() {

  attempts++;  // Check to make sure the AJAX content has loaded.
  
  var emails = $(".contact-list .email a");
  if(emails.size() > 0) {
    addDropboxEmail();
  } else if(attempts < 100) {
    setTimeout(checkForContent, 100); // If we don't find content after 100 attempts fail silently.
  }
}

checkForContent();

function addDropboxEmail() {
  
  var dropbox_email = $(".dropbox-email").text(); // Get the dropbox email on this page.

  $(".contact-list .email a").each(function(){
    var mailto = $(this).attr("href");
    $(this).attr("href", mailto + '?bcc=' + dropbox_email); // Add the dropbox email as a BCC.
  });
}
