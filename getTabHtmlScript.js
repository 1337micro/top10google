let contentOfHtml = document.body.innerHTML;

let arrayOfUri = [];
const prefix = '<h3 class="r"><a href=';
while (contentOfHtml.search(prefix) != -1){
  let index = contentOfHtml.search(prefix);
  let indexOfStartingQuote = index+prefix.length;
  arrayOfUri.push(contentOfHtml.slice(indexOfStartingQuote+1,
    contentOfHtml.substring(indexOfStartingQuote+1, contentOfHtml.length).search('"') + indexOfStartingQuote));

    contentOfHtml = contentOfHtml.substring(indexOfStartingQuote+1, contentOfHtml.length);

  }

arrayOfUri.forEach( (uri) => chrome.runtime.sendMessage(uri));
