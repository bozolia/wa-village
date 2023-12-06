
if(!WA.state.hasVariable('incident')) {
  WA.state.saveVariable('incident', 'stop');
}

const menuIncident = WA.ui.registerMenuCommand('Incident',
{
  callback: () => {
    console.log('debut incident');
    WA.state.saveVariable('incident', 'start');
  }
})
const menuFinIncident = WA.ui.registerMenuCommand('Fin Incident',
{
  callback: () => {
    console.log('fin incident')
    WA.state.saveVariable('incident', 'stop');
  }
})

WA.state.onVariableChange('incident', (value) => {
  console.log('incident', value);
  if (value === 'start') {
    WA.room.showLayer("ground-danger");
  }
  if (value === 'stop') {
    WA.room.hideLayer("ground-danger");
  }
})

