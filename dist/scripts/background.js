"use strict";var userAgent="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36",requestFilter={urls:["https://www.instagram.com/*"]};chrome.webRequest.onBeforeSendHeaders.addListener(function(e){for(var r=e.requestHeaders,t=0,s=r.length;t<s&&"User-Agent"!=r[t].name;++t);return t<r.length&&(r[t].value=userAgent),{requestHeaders:r}},requestFilter,["requestHeaders","blocking"]);
//# sourceMappingURL=background.js.map
