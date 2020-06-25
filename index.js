window.addEventListener('load', (event) => {
  console.log('page is fully loaded');

  setTimeout(() => {
    const elementsWillBeRemoved = [];
    const iframeNodeList = document.querySelectorAll("iframe[id^='offer-']");
    const tpBackdrop = document.querySelector(".tp-backdrop.tp-active");
    const tpModal = document.querySelector(".tp-modal");
  
    iframeNodeList.forEach(x => {
      if (x.parentNode && x.parentNode.parentNode) {
        elementsWillBeRemoved.push(x.parentNode.parentNode);
      }
    });
  
    elementsWillBeRemoved.push(tpBackdrop);
    elementsWillBeRemoved.push(tpModal);
  
    elementsWillBeRemoved.forEach(x => {
      if (x) {
        x.remove();
      }
    });
  
    document.body.setAttribute('style', 'overflow:scroll !important');
  }, 1000);

  
});


