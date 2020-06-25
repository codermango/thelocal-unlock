window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  const iframeNodeList = document.querySelectorAll("iframe[id^='offer-']");
  iframeNodeList.forEach(x => x.parentNode.parentNode.remove());
  document.body.setAttribute('style', 'overflow:scroll !important');
  document.querySelector(".tp-backdrop.tp-active").remove();
});


