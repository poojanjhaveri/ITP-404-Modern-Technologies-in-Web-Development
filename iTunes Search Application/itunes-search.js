// JavaScript Document

$( "#itunes-search" ).submit(function( event ) {
  event.preventDefault();
  
   var searchtext=$('#search-text').val();            // Get Search text
   searchtext=searchtext.replace(" ","+");			// Replace " " with + for the API. Eg jack+johnson
   console.log(searchtext);	
   jsonRequest("https://itunes.apple.com/search?term="+searchtext+"&entity=song&limit=30&callback=jsonHandler"); // Request
});

function jsonRequest(url)
{
     var script=document.createElement('script');
     script.src=url;
     document.getElementsByTagName('head')[0].appendChild(script);
}

function jsonHandler(data)
{
	console.log(data);
    if (data) {
         var htmlWithData = templateFunction(data);
    
    $('#content').append(htmlWithData);
    }
   
}