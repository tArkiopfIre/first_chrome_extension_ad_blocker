chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {
            cancel: true
        }
    },
    { urls: ["*://*.google.com/adsense/start/*"]},
    ["blocking"]
)