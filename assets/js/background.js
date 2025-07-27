const { isSecureGateway } = require("./utils"); // اگر مسیر فرق داره، تنظیم کن

chrome.tabs.onUpdated.addListener(checkForValidUrl);

function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url !== undefined && changeInfo.status === "complete") {
    console.log(tab.url);

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
