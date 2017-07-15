//
console.log("getTabHtml loaded")
chrome.tabs.executeScript({file:'getTabHtmlScript.js'})
//let rawHtmlGoogleSearch = document.getElementsByTagName("body").innerHtml;
//console.log(rawHtmlGoogleSearch);
