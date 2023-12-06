const menuIncident = WA.ui.registerMenuCommand('Incident',
{
  callback: () => {
    WA.event.broadcast("incident", "start");
  }
})
const menuFinIncident = WA.ui.registerMenuCommand('Fin Incident',
{
  callback: () => {
    WA.event.broadcast("incident", "stop");
  }
})

WA.event.on("incident").subscribe((event) => {
  if (event.value === 'start') {
    WA.room.showLayer("ground-danger");
  }
  if (event.value === 'stop') {
    WA.room.hideLayer("ground-danger");
  }  
});

