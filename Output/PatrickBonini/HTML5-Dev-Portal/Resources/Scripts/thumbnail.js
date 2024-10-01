/*
* Copyright Solace Systems
* http://www.solace.com/
* Unlicensed use is strictly prohibited
*
 * v16.0.7426.25547
*/

            $(".thumbnail-container").each( (index, container) => {

/* Get the location of the current script */
var script = document.currentScript;
var fullUrl = script.src;
/* Hackey: Length of name of this script and Images directory */
var imagepath = fullUrl.substring(0, fullUrl.length - 20);
var pathtoexpandicon= imagepath + "Images/expand-icon.png";
var elem = document.createElement("img");
            elem.classList.add('img-expand');
            elem.setAttribute("src", pathtoexpandicon );
    container.appendChild(elem);
});