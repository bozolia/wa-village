const menuIncident = WA.ui.registerMenuCommand('Incident',
{
  callback: () => {
    WA.chat.sendChatMessage('Incident !', { author: 'ChatDEVOPS' });
  }
})
const menuFinIncident = WA.ui.registerMenuCommand('Fin Incident',
{
  callback: () => {
    WA.chat.sendChatMessage("Incident résolu !", { author: 'ChatDEVOPS' });
  }
})

WA.chat.onChatMessage((message => {
  if (message === 'Incident !') {
    WA.room.showLayer("sky-danger");
    WA.room.showLayer("ground-danger");
    return;
  }
  if (message === 'Incident résolu !') {
    WA.room.hideLayer("sky-danger");
    WA.room.hideLayer("ground-danger");
  }
}));