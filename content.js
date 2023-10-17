// content.js

// Function to modify DOM elements
function modifyDOM() {

    const allowedDomains = {'https://www.youtube.com' : true};
    if(!allowedDomains[window.location.origin]){
        return;
    }

    const video = document.querySelector('.html5-video-player.ad-showing .html5-main-video');
    
    if(!!video && !isNaN(video.duration)){
        video.currentTime = video.duration;
    }

  
    // You can add more modifications based on your needs
  }
  
  // Run the modifyDOM function when the page is loaded
  modifyDOM();
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "modifyDOM") {
        modifyDOM();
      }
    }
  );
  

  setInterval(()=>{
    const allowedDomains = {'https://www.youtube.com' : true};
    if(!allowedDomains[window.location.origin]){
        return;
    }
    
    const isShowingAdd = document.querySelector('.html5-video-player.ad-showing .html5-main-video');

    if(isShowingAdd){
        modifyDOM();
    }
  }, 250);
