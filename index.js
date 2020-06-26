
// const REMOVE_SELECTORS = [
//   "iframe[id^='offer-']",
//   ".tp-backdrop.tp-active",
//   ".tp-modal"
// ];

const bodyNode = document.querySelector("body");

const observer = new MutationObserver((mutationsList, observer) => {

  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      for (const node of mutation.addedNodes) {
        if (node.nodeName === "IFRAME") {
          const attrs = node.attributes;
          if (attrs) {
            const idAttr = attrs.getNamedItem("id");

            if (idAttr) {
              console.log(idAttr.value);
              node.remove();
            }
          }
          
        }

      }
    }
  }
});

observer.observe(bodyNode, { attributes: true, childList: true, subtree: true })
