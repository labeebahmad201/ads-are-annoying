// background.js

// Function to send a message to the content script to modify the DOM
function modifyDOM() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: "modifyDOM" });
    });
  }
  
  // Set up a browser action to trigger the DOM modification
  chrome.action.onClicked.addListener(modifyDOM);
