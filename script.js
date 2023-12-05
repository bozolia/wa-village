const menuIncident = WA.ui.registerMenuCommand('Incident',
{
  callback: () => {
    WA.chat.sendChatMessage('Incident !!!! Incident !!!', 'ChatDEVOPS');
    WA.room.showLayer("sky-danger");
    WA.room.showLayer("ground-danger");
  }
})
const menuFinIncident = WA.ui.registerMenuCommand('Fin Incident',
{
  callback: () => {
    WA.chat.sendChatMessage("Incident résolu !", "ChatDEVOPS");
    WA.room.hideLayer("sky-danger");
    WA.room.hideLayer("ground-danger");
  }
})
