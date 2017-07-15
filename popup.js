document.getElementById("submit_button").onclick = search
function search(){
  var sSearchURI = "http://www.google.com/search?q=";
  var sSearchQuery = document.getElementById("search_box").value;
  var aSearchTerms = sSearchQuery.split();

  aSearchTerms.forEach( (sTerm) =>{
    sSearchURI += sTerm + "+"; //append search terms to the sSearchURI
  });
  sSearchURI = sSearchURI.slice(0, sSearchURI.length -1); // removes the last +

  chrome.tabs.create({url:sSearchURI}); // main search results
  chrome.tabs.executeScript(null, {
    file: 'getTabHtmlScript.js'
  });
  /*
 //chrome.tabs.create(object createProperties, function callback)
 console.log("popupjs loaded");


console.log(sSearchURI);
//getHtmlOfSearch(sSearchURI);
chrome.tabs.create({url:sSearchURI}); // main search results
*/


};
