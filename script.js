const menuIncident = WA.ui.registerMenuCommand('Incident',
{
  callback: () => {
    WA.chat.sendChatMessage('Incident !');
  }
})
const menuFinIncident = WA.ui.registerMenuCommand('Fin Incident',
{
  callback: () => {
    WA.chat.sendChatMessage("Incident résolu !");
  }
})

WA.chat.onChatMessage((message => {
  if (message === 'Incident !') {
    WA.room.showLayer("ground-danger");
  }
  if (message === 'Incident résolu !') {
    WA.room.hideLayer("ground-danger");
  }
}));