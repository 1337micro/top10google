
console.log("popupjs loaded");
document.getElementById("submit_button").onclick = search;
function search(){
 //chrome.tabs.create(object createProperties, function callback)
 console.log("popupjs loaded");

var sSearchURI = "http://www.google.com/search?q=";
var sSearchQuery = document.getElementById("search_box").value;
var aSearchTerms = sSearchQuery.split();

aSearchTerms.forEach( (sTerm) =>{
  sSearchURI += sTerm + "+"; //append search terms to the sSearchURI
});
sSearchURI = sSearchURI.slice(0, sSearchURI.length -1); // removes the last +

console.log(sSearchURI);
//chrome.tabs.create({url:sSearchURI}); // main search results
getHtmlOfSearch(sSearchURI);

};
function getHtmlOfSearch(sUri){
  $.ajax(sUri, {success: (html) => parseHtml(html),
                crossDomain: true,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
    });
}
function parseHtml(html){
  console.log(html);
    function scrape_useful_tags(html){

    }
}
