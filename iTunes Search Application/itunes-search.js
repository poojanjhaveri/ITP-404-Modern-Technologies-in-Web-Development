// JavaScript Document

var templateString = $('#itunes-search-page-template').html();
var templateFunction = Handlebars.compile(templateString);


Handlebars.registerHelper('if_custom', function(a, b, opts) {
	
    if(a.trackExplicitness == "notExplicit")
	{
        return opts.fn(this);  // Not Explicit
	}
    else
	{
        return opts.inverse(this); // Explicit
	}
});


$( "#itunes-search" ).submit(function( event ) {
  event.preventDefault();
  
   var searchtext=$('#search-text').val();           // Get Search text
   searchtext=searchtext.replace(" ","+");			// Replace " " with + for the API. Eg jack+johnson
   jsonRequest("https://itunes.apple.com/search?term="+searchtext+"&entity=song&limit=30&callback=jsonHandler"); // Request
});

/*
Function for JSON Request
*/
function jsonRequest(url)
{
     var script=document.createElement('script');
     script.src=url;
     document.getElementsByTagName('head')[0].appendChild(script);
}

/*
Callback function after the request
*/
function jsonHandler(data)
{
		var $content = $('#content');			// selector caching
		$content.html("");						// Erase the content at beginning of every json Request
		console.log(data);
		if(data.results.length==0)				// Results count is zero. So no data obtained
		{
			$content.html("No artist found");		// No vaid artist found
			}
		else
		{
		  for(var i=0;i<data.results.length;i++)
		  {
			 var htmlWithData = templateFunction(data.results[i]);	 // pass the data to the function so that it compiles
			 $content.append(htmlWithData);					// Append the data to existing div
		  }
		}

   
}