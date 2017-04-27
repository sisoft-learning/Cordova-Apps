/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }

function dialogAlert() {
   var message = "I am Alert Dialog2!";
   var title = "ALERT";
   var buttonName = "Alert Button";
	
   navigator.notification.alert(message, alertCallback, title, buttonName);

   function alertCallback() {
      console.log("Alert is Dismissed!");
   }
	
}



function screen1() {
    "use strict" ;   
    
    window.location.href = "index.html";   
    //window.location.href = "index.html";
    
}


// ...additional event handlers here...
