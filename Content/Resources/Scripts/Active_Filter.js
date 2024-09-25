/*
* Copyright Solace Systems
* http://www.solace.com/
* Unlicensed use is strictly prohibited
*
*/
/*gets the filter used and outputs as part of search results*/
$(document).ready(function(){
var filter=(window.location.search.split('&').splice(1)); // Creating a variable "filter" whose value is the filter text
filter = decodeURI(filter); //Getting rid of the codes that are used for spaces
var $span = $(document.createElement('span') ); //creating a span element to contain the new text
if (filter.startsWith("p="))
{
 $span.text("Did you know that you can filter the results? Click the box above to learn more!"); //add text when no filter is used
}
else{
  filter = filter.substring(2); //getting rid of "f=" at the beginning

  const myarray=filter.split(',');//split again by the using the comma for Appliance,p=2
  filter = myarray[0]; // get the first part of the array
  

  $span.addClass('filter'); //adding the class filter to the span in case you would need to edit the styling
  if (filter == "")
  {
  $span.text("Did you know that you can filter the results? Click the box above to learn more!"); //add text when no filter is used
  } 
  else
  {
  $span.text("You are using the " +'"' + filter +'"' + " filter."); //inserting some text and the value from the URL.
  }
}
$("h1").append($span); //appending the new span to the existing string.
$("h1").append("<br /><br />");
$("h1").append("Having problems with your search? Try a hard refresh of the page (Control+F5 or Control+Refresh) or clearing your browser cache.");
});