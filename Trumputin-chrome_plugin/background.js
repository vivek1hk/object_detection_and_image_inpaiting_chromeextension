// chrome.runtime.onMessage.addListener(function(request, sender, callback) {
//   if (request.action == "http") {

//     $.ajax({
//         type: request.method,
//         url: request.url,
//         data: request.data,
//         success: function(responseText){
//             console.log(responseText);
           
//             callback(responseText);
//         },
//         error: function(XMLHttpRequest, textStatus, errorThrown) {
//             //if required, do some error handling
//             callback();
//         }
//     });

//     return true; // prevents the callback from being called too early on return
//   }
// });

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
 
        console.log(request["image_source"])
         $.ajax({
                url: "http://localhost:8000/index/",
                data: {
                    img: request["image_source"]
                },
                success: function( result ) {
                    // $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
                   sendResponse({farewell: result})
                }
                    });
   

        
        return true;
});


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });