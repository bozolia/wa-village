const area = WA.room.area.create({
    name: 'DangerArea',
    x: 224,
    y: 640,
    width: 32,
    height: 32,
});

const myAreaSubscriber = WA.room.area.onEnter("myArea").subscribe(() => {
  WA.chat.sendChatMessage('Incident !!!! Incident !!!', 'ChatDEVOPS');
  WA.room.showLayer("sky-danger");
  WA.room.showLayer("ground-danger");
});

WA.room.area.onLeave("myArea").subscribe(() => {
  WA.chat.sendChatMessage("Incident résolu !", "ChatDEVOPS");
  WA.room.hideLayer("sky-danger");
  WA.room.hideLayer("ground-danger");
  myAreaSubscriber.unsubscribe();
});
