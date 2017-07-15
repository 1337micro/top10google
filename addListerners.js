
console.log("addListenersjs loaded");


chrome.runtime.onMessage.addListener(function(message){
  launchUri(message);
});

function launchUri(uri){
  chrome.tabs.create({url:uri, selected:false})
}
