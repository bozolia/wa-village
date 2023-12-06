const menuIncident = WA.ui.registerMenuCommand('Incident',
{
  callback: () => {
    console.log('debut incident');
    WA.event.broadcast("incident", "start");
  }
})
const menuFinIncident = WA.ui.registerMenuCommand('Fin Incident',
{
  callback: () => {
    console.log('fin incident')
    WA.event.broadcast("incident", "stop");
  }
})

WA.event.on("incident").subscribe((event) => {
  console.log('incident', event.value);
  if (event.value === 'start') {
    WA.room.showLayer("ground-danger");
  }
  if (event.value === 'stop') {
    WA.room.hideLayer("ground-danger");
  }  
});

