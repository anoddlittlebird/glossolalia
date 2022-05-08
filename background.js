// let color = '#a73a8a';

let color = "#" + ((1<<24)*Math.random() | 0).toString(16);

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Randomly change the background', `color: ${color}`);
});