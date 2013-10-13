
ITP 404 - Modern Technologies in Web Development Assignments
Information Technology Department
University of Southern California
Fall 2013

You can see all the project assignments here : http://scf.usc.edu/~pjhaveri/itp404/classpage.html


Assignment 3 - Reusable Accordion Widget using Javascript OOP
For this assignment, take your accordion lab and turn it into a reusable accordion widget using the constructor pattern and the prototype pattern. You should create this widget in such a way that 2 (or more) accordion widgets can coexist on a single page and not clash with each other.

Assignment 4 - Position mapper
Current Position Mapper with Google Maps and Geolocation . Map the current position of the user, reverse geococde it and disply it in an info-window on the google map.

Assignment 5 - iTunes Search Application
Create a form with a text box where the user can type in an artist name and a submit button. When the form is submitted (not clicked), you will fire off a JSONP request to the iTunes Search API and render the results somewhere in the middle of the page.
Each search should only return 30 songs.
Your requests should only return songs, not music videos, podcasts, etc. (See the entity query string parameter in the API documentation.)
When new requests are made, the previous results should be replaced.
At minimum, you should display the following data:
-track name
-a picture of the album artwork for each song
-track price
-if it is explicit, show the explicit content icon. otherwise, dont show it
-genre
If a bogus artist is typed into the search box, then I should see a message displayed in the middle of the page in red "No artist found".
For HTML rendering, use the Handlebars templating library.
If an artist contains 2 words in the name (like The Offspring), the spaces should be replaced with a + symbol, so that the artist string that is passed to the iTunes API is "The+Offspring". See the string replace function.
Style your final page with a little CSS



