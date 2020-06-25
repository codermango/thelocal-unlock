chrome.tabs.onUpdated.addListener(() => {
  console.log('ahahahaha');

  const test = document.getElementById('test');
  console.log(test);
});