// maka.js - part of make america kittens again
// v1.2.1
// by Tom Royal 
// tomroyal.com

var makaTesting = true; // for debugging only

if (makaTesting){
	console.log('maka initiated');
	var makaReplacements = 0;
}	

// init blacklist

var blacklist = ["trump", "трамп", "トランプ"]; // thanks to jSanchoDev and akiatoji for translations

// get additional settings from chrome storage

// chrome.storage.local.get({
//     blockPence: false,
//     blockFarage: false,
//     blockLePen: false,
//     blockWilders: false,
//     blockBannon: false,
//     customBlock: false
//   }, function(items) { 
// 	  if (items.blockPence){
// 		  blacklist.push("mike pence");
// 		  blacklist.push("ペンス");
// 	  };
// 	  if (items.blockFarage){
// 		  blacklist.push("farage");
// 	  };
// 	  if (items.blockLePen){
// 		  blacklist.push("le pen");
// 	  };
// 	  if (items.blockWilders){
// 		  blacklist.push("wilders");
// 	  };
// 	  if (items.blockBannon){
// 		  blacklist.push("bannon");
// 	  };
// 	  // process custom blocklist
	  
// 	  if(items.customBlock){
// 			var customBlockTargets = items.customBlock.split(',');
// 			  customBlockTargets.forEach(function(blockTarget) {
// 				    blacklist.push(blockTarget.trim().toLowerCase())
// 			  });  
// 	  };

// 	  document.addEventListener('DOMContentLoaded', makanow(theKittens), false);
	  
//   });

// kitten data!
// Note - now moved from S3 to local storage


// var theKittens = {"kitten": [
//     {"file": "1.jpg", "Credit": "Crsan", "URL": "http://www.flickr.com/photos/crsan/2571204498/", "type":"0"},
// 	{"file": "2.jpg", "Credit": "Abcrumley", "URL": "http://www.flickr.com/photos/crumley/160490011/", "type":"0"},
// 	{"file": "3.jpg", "Credit": "Woodchild2010", "URL": "http://www.flickr.com/photos/woodchild/5335939044/", "type":"0"},
// 	{"file": "4.jpg", "Credit": "Vancouverfilmschool", "URL": "http://www.flickr.com/photos/vancouverfilmschool/4838552777/", "type":"0"},
// 	{"file": "5.jpg", "Credit": "Jameswragg", "URL": "http://www.flickr.com/photos/jameswragg/4688532009/", "type":"0"},
// 	{"file": "6.jpg", "Credit": "Eva101", "URL": "http://www.flickr.com/photos/evapro/519752551/", "type":"0"},
// 	{"file": "7.jpg", "Credit": "Pinguino", "URL": "http://www.flickr.com/photos/pinguino/2655478691/", "type":"0"},
// 	{"file": "8.jpg", "Credit": "Daisyree Bakker", "URL": "http://www.flickr.com/photos/27875041@N02/4710868953/", "type":"0"},
// 	{"file": "9.jpg", "Credit": "VictoriaPeckham", "URL": "http://www.flickr.com/photos/victoriapeckham/4000992556/", "type":"0"},
// 	{"file": "10.jpg", "Credit": "Peter Huys", "URL": "http://www.flickr.com/photos/darksidex/4568967536/", "type":"0"},
// 	{"file": "11.jpg", "Credit": "Lauren Nelson", "URL": "http://www.flickr.com/photos/lulieboo/3523637733/", "type":"0"},
// 	{"file": "12.jpg", "Credit": "Denizen24", "URL": "http://www.flickr.com/photos/39311243@N05/4273391516/", "type":"0"},
// 	{"file": "13.jpg", "Credit": "Pinguino", "URL": "http://www.flickr.com/photos/pinguino/2655477765/", "type":"0"},
// 	{"file": "14.jpg", "Credit": "Sikander", "URL": "http://www.flickr.com/photos/sikander/3941418808/", "type":"0"},
// 	{"file": "15.jpg", "Credit": "Snickclunk", "URL": "ttp://www.flickr.com/photos/snickclunk/4985501252/", "type":"0"},
// 	{"file": "16.jpg", "Credit": "JeffreyW", "URL": "http://www.flickr.com/photos/jeffreyww/4975375328/", "type":"0"},
// 	{"file": "17.jpg", "Credit": "Jeremy Bronson", "URL": "http://www.flickr.com/photos/jbrons/4872001139/", "type":"0"},
// 	{"file": "18.jpg", "Credit": "Threat to Democracy", "URL": "http://www.flickr.com/photos/16725630@N00/4811658578/", "type":"0"},
// 	{"file": "19.jpg", "Credit": "Eofstr", "URL": "http://www.flickr.com/photos/eofstr/4757862779/", "type":"0"},
// 	{"file": "20.jpg", "Credit": "DvdOuden", "URL": "http://www.flickr.com/photos/dvdouden/4733485066/", "type":"0"},
// 	{"file": "21.jpg", "Credit": "Cuttlefish", "URL": "http://www.flickr.com/photos/cuttlefish/4969726052/", "type":"0"},
// 	{"file": "22.jpg", "Credit": "JenniferC", "URL": "http://www.flickr.com/photos/29638108@N06/5104339654/", "type":"0"},
// 	{"file": "23.jpg", "Credit": "Jasontoff", "URL": "http://www.flickr.com/photos/jasontoff/5098333343/", "type":"0"},
// 	{"file": "24.jpg", "Credit": "FHgitarre", "URL": "http://www.flickr.com/photos/48356868@N06/5073501988/", "type":"0"},
// 	{"file": "25.jpg", "Credit": "Phil Hawksworth", "URL": "http://www.flickr.com/photos/philhawksworth/5037670666/", "type":"0"},
// 	{"file": "26.jpg", "Credit": "Phil Hawksworth", "URL": "http://www.flickr.com/photos/philhawksworth/5036995211/", "type":"0"},
// 	{"file": "27.jpg", "Credit": "FragmentFi", "URL": "http://www.flickr.com/photos/fragmentfi/5033666682/", "type":"0"},
// 	{"file": "28.jpg", "Credit": "SpookyPeanut", "URL": "http://www.flickr.com/photos/spookypeanut/5502011850/", "type":"0"},
// 	{"file": "29.jpg", "Credit": "Glennsajan", "URL": "http://www.flickr.com/photos/glennsajan/5485364346/", "type":"0"},
// 	{"file": "30.jpg", "Credit": "Woodchild2010", "URL": "http://www.flickr.com/photos/woodchild/5335939044/", "type":"0"},
// 	{"file": "31.jpg", "Credit": "Ollie Crafoord", "URL": "http://www.flickr.com/photos/lollaping/5277362546/", "type":"0"},
// 	{"file": "32.jpg", "Credit": "Mami Terai", "URL": "http://www.google.com", "type":"1"},
// 	{"file": "33.jpg", "Credit": "Sam Scheibel", "URL": "http://www.google.com", "type":"1"}
//     ]
// };

console.log("Got here");
//   $.ajax({
//   url: "http://localhost:8000/index/",
//   data: {
//     img: 97201
//   },
//   success: function( result ) {
//     // $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//     console.log(result);
//   }
//     });

// chrome.runtime.sendMessage({
//         method: 'GET',
//         action: 'http',
//         url: 'http://localhost:8000/index/',
//         data: "key=trump"
//     }, function(reponseText) {
//         alert("responseText");
// 		 var newdiv = document.createElement('div'); 
//             newdiv.setAttribute('id','trumputin');
//             document.body.appendChild(newdiv)
//     }); 

open = false;
// $("img").on("mouseenter", function() {
//     timer = setTimeout(function() {
		
// 		if (!open)
// 		{
// 			open = true;
// 		     putinify();
// 		}
//     }, 4000);
// });

$("img").mouseenter(function() {
    var that = this;
    timer = setTimeout(function(){
        $('img').removeClass('hovered');
		if (!open)
		{
			open = true;
		     putinify(that.src);
		}


        $(that).addClass('hovered');
    }, 3000);
}).mouseleave(function() {
    clearTimeout(timer);
});

// $("img").on("mouseout", function() {
//     $(".box").css("background", "red");
//     clearInterval(timer);
// });

var lists = ["Sending Image","Detecting Face","Preparing Inpainting","Applying Magic","Painting Putin","Downloading..."]
count = 0;

function putinify(imgsrc)
{
console.log(imgsrc)

var newdiv = document.createElement('div'); 
            newdiv.setAttribute('id','trumputin');
            document.body.appendChild(newdiv);
			$( "#trumputin" ).addClass( "div-mid" );
			$( "#trumputin" ).draggable();
			
			$("#trumputin").append("<h2 >Trumputin!</h2>");
			$("#trumputin").append("<p id='vals' style:' text-align: center'; font-size:14px;> </p>");
			var myVar = setInterval(function(){

				if(count<lists.length)
				{
					$("#vals").empty();
					$("#vals").html(lists[count]);
					count++;
				}

			}, 3200);
			$("#trumputin").append("<img id='loading' src='https://media2.giphy.com/media/QEqIZuPif9hiU/giphy.gif' >");
			$( "#loading" ).addClass( "loading-class" );
			

chrome.extension.sendMessage({image_source: imgsrc}, function(response) {
        //console.log(response.farewell);
			$("#loading").remove();
			$("#trumputin").empty()
			// $( "#trumputin" ).removeClass("div-mid");
			$('#trumputin').append('<img id="inpainted" alt="Embedded Image" src="data:image/jpeg;base64,' + response.farewell + '" />');
			$( "#inpainted" ).addClass( "loading-class" );
			$( "#inpainted" ).resizable({
     				 aspectRatio: 1 / 1
    		});
			$( "#trumputin" ).dblclick(function() {
 						//  
						  $( "#trumputin" ).remove();
							open = false;
						  count = 0;
				});
			
});
}


// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
// });

// function makanow(){
// 	if (makaTesting){
// 		console.log('maka processing blacklist is '+blacklist);
// 	}

// 	// called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with kittens
// 	var pagepics=document.getElementsByTagName("img"), i=0, img;	
// 	while (img = pagepics[i++])
// 	{	
		
// 		if (img.hasAttribute('makareplaced')){
// 			// already replaced	
// 		}
// 		else {
// 			// not yet replaced
// 			var alttext = String(img.alt).toLowerCase();
// 			var imgsrc = String(img.src).toLowerCase();
// 			console.log(alttext,imgsrc)
			
// 			if (img.parentElement.nodeName != 'BODY'){
// 				// check parent innerHTML for blackilist
// 				var parenttag = img.parentElement.innerHTML.toLowerCase();
// 			}
// 			else {
// 				// prevent parse of entire doc
// 				var parenttag = '';
// 			};
			
// 			var imgwidth = img.clientWidth;
// 			var imgheight = img.clientHeight;
	
// 			blacklist.forEach(function(blist) {	
// 				if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1) || (parenttag.indexOf(blist) != -1)){
					
// 					// append old src
// 					img.setAttribute("makareplaced", img.src);
					
// 					// remove srcsets, forcing browser to the kitten - eg, BBC News
// 					if (img.hasAttribute('srcset')){
// 						img.removeAttribute('srcset');	
// 					};
// 					// remove source srcsets if children of same parent <picture> element - eg, the Guardian
// 					if (img.parentElement.nodeName == 'PICTURE'){
// 						var theparent = img.parentNode;
// 						for(var child=theparent.firstChild; child!==null; child=child.nextSibling) {
// 						    if (child.nodeName == "SOURCE"){
// 							    child.removeAttribute('src');
// 							    child.removeAttribute('srcset');
// 						    };
// 						};
						
// 					};
// 					// knock out lazyloader data URLs so it doesn't overwrite kittens
// 					if (img.hasAttribute('data-src')){
// 						img.removeAttribute('data-src');	
// 					};
// 					if (img.hasAttribute('data-hi-res-src')){
// 						img.removeAttribute('data-hi-res-src');	
// 					};
// 					if (img.hasAttribute('data-low-res-src')){
// 						img.removeAttribute('data-low-res-src');	
// 					};
					
// 					var randk = Math.floor(Math.random() * 32) + 1
					
// 					img.src = chrome.runtime.getURL('/kittens/'+theKittens.kitten[randk].file+'');
					
// 					img.width = imgwidth;
// 					img.height = imgheight;
					
// 					if (theKittens.kitten[randk].type == 0){
// 						img.alt = 'Photo by '+theKittens.kitten[randk].Credit+' source '+theKittens.kitten[randk].URL+'';
// 					}
// 					else {
// 						img.alt = 'Photo by '+theKittens.kitten[randk].Credit+'';
// 					};
// 					makaReplacements++;
// 				};
// 			});	
// 		};				
// 	}
// 	if (makaTesting){
// 		console.log('maka processing complete, replaced '+makaReplacements+' images');
// 	}	    
// };

// function to replace kittened-images with the original SRCs

// function undomakanow(){
// 	if (makaTesting){
// 		console.log('undoing MAKA');
// 	}

// 	var pagepics=document.getElementsByTagName("img"), i=0, img;	
// 	while (img = pagepics[i++])
// 	{	
// 		if (img.hasAttribute('makareplaced')){
// 			if (makaTesting){
// 				console.log('replacing image');
// 			};
// 			img.src = img.getAttribute('makareplaced');
// 			img.removeAttribute('makareplaced');
// 		};	
// 	};
	
// }

// listener for context menu click invoking the above

// chrome.extension.onMessage.addListener(function (message, sender, callback) {
//     if (message.functiontoInvoke == "putinify") {
// 	    // undo function called
//         putinify();
//     };
//     /*
//     else if (message.functiontoInvoke == "redoMAKA") {
//         makanow(theKittens);
//     }
//     */
// });