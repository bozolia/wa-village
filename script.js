const menuIncident = WA.ui.registerMenuCommand('Incident',
{
  callback: () => {
    WA.room.showLayer("sky-danger");
    WA.room.showLayer("ground-danger");
    WA.chat.sendChatMessage('Incident !', { uthor: 'ChatDEVOPS' });
  }
})
const menuFinIncident = WA.ui.registerMenuCommand('Fin Incident',
{
  callback: () => {
    WA.room.hideLayer("sky-danger");
    WA.room.hideLayer("ground-danger");
    WA.chat.sendChatMessage("Incident résolu !", { scope: 'local', author: 'ChatDEVOPS' });
  }
})

WA.chat.onChatMessage((message => {
  if (message === 'Incident !') {
    
  }
  if (message === 'Incident résolu !') {
  
  }
}));