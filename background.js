// Track panel state per tab
const panelState = {};

chrome.action.onClicked.addListener((tab) => {
  panelState[tab.id] = !panelState[tab.id];
  chrome.tabs.sendMessage(tab.id, { 
    action: 'togglePanel', 
    show: panelState[tab.id] 
  });
});
