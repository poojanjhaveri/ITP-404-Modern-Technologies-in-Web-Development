// JavaScript Document for to-do list project
Parse.initialize("CJ9w9FEgQxY4aoy49xHFGynNcmk940yS3rUkHxxj", "huvyQDXPzJvArxfieaTr44KeY8opJOULkblq9KQB");
var ToDoObject = Parse.Object.extend("TodoList");

$(document).ready(function(e) {
    fetchData();
});

// OnClick method for Add-todo button
$('#addtodobutton').on('click',function()
{
	var newItem = new ToDoObject();
	var itemText=$('#todotext').val();
	var priority = parseInt($('#priority').val());
	newItem.save({									// Save the object to PARSE
  		Item: itemText,
  		Priority: priority,
	}).then(fetchData());		// Fetch the data again because we need sorted data <This is a temporary thing and we are not focusing on performance here>
});


// Function to fetch Data from Parse Database
function fetchData()
{
	$('#todo-list').empty();			// Empty the contents of the list
					// Empty the text value in textbox
	
	var query = new Parse.Query(ToDoObject);
	query.descending('Priority');		// Sort based on priority
	query.find().then(function(results) {		// Fetch Data
		
        for (var i = 0; i < results.length; i++) {
			renderData(results[i]);
        }


    }
)
$('#todotext').val('');
}


// Add on click method to every new element that is added
$('#todo-list').on('click','.delete',function()
{
	var $tr = $(this).parents('tr');
	//console.log($tr);
		var itemtodo = $tr.data('item');		
		itemtodo.destroy().then(function() {	// Delete the object
			$tr.remove();					// Remove from the list
		});
});


// Function to render and display the data 
function renderData(item)
{
	//  console.log(item.get('Item') + ' ' + item.get('Priority'));
	  
	  var tr = '<tr><td class="priority">'+item.get('Priority')+'</td> <td class="item">'+item.get('Item')+'</td><td class="delete"><button class="btn-warning" class="deletebutton">Delete</button></td></tr>';
	  
	  var $tr = $(tr).data('item',item);		// Add it as key,value so that we can use it when we delete it
	//  console.log($tr);
	  $('#todo-list').append($tr);				// Append to the list
}
