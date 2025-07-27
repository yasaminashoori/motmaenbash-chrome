const { isSecureGateway } = require("./utils");

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url !== undefined && changeInfo.status === "complete") {
    console.log(tab.url);

    //show the page action.
    if (isSecureGateway(tab.url)) {
      chrome.action.setIcon({
        tabId: tabId,
        path: {
          128: "/assets/images/icon_ok.png",
        },
      });
      chrome.action.setTitle({
        tabId: tabId,
        title: "درگاه پرداخت امن، مطمئن باش",
      });
    }
  }
}
